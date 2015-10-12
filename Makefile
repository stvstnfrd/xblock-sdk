#!/usr/bin/make -f

# Commands
APT_GET=apt-get -y
INSTALL_PACKAGE=$(APT_GET) install
INSTALL_NPM=npm install -g
# Files
SQLITE_DB=workbench.db
# Packages
LIBS_BUILD=build-essential
LIBS_PYTHON=python python-dev python-distribute python-pip
LIBS_LIBXML=libxml2-dev libxslt1-dev zlib1g-dev
LIBS_SOURCE_CONTROL=git
# Variables
HOSTNAME=workbench

all: install test

.PHONY: provision
provision:
	hostname "$(HOSTNAME)"
	echo "$(HOSTNAME)" > /etc/hostname
	$(APT_GET) update
	$(APT_GET) upgrade
	$(INSTALL_PACKAGE) apt-transport-https
	$(INSTALL_PACKAGE) $(LIBS_SOURCE_CONTROL)
	$(INSTALL_PACKAGE) $(LIBS_BUILD)
	$(INSTALL_PACKAGE) $(LIBS_PYTHON)
	$(INSTALL_PACKAGE) $(LIBS_LIBXML)
	/bin/bash script/nodejs-setup
	$(INSTALL_PACKAGE) $(LIBS_NODE)
	$(INSTALL_NPM) $(LIBS_GRUNT)
	make install

.PHONY: install
install: pip $(SQLITE_DB)

.PHONY: pip
pip:
	# TODO: we need to install requirements.txt so XBlock is installed
	# from a GitHub repo.  Once XBlock is available through PyPi,
	# we can install all requirements using setup.py
	pip install -r requirements.txt
	pip install -e .
	pip install -r test-requirements.txt

$(SQLITE_DB):
	# The --noinput flag is for non-interactive runs, e.g. TravisCI.
	python manage.py syncdb --noinput

test:
	python manage.py test

cover:
	coverage run manage.py test
	coverage report
