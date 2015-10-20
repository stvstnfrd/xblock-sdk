===========================================
XBlock SDK |build-status| |coverage-status|
===========================================

This repository consists of three main components to assist in the creation of new XBlocks:

* a template-based generator for new XBlocks (found in the ``prototype`` directory)

* sample XBlocks that can be the basis for new XBlock work (found in the ``sample_xblocks`` directory)

* Workbench runtime, a simple runtime for viewing and testing XBlocks in a browser (found in the ``workbench`` directory)


Installation
------------

#.  Get a local copy of this repo::

        $ git clone https://github.com/edx/xblock-sdk.git

#. Enter the project directory::

        $ cd xblock-sdk

#.  Build and start the virtual machine::

        $ vagrant up && vagrant ssh  # or `make install` to run locally

#.  Run the server::

        $ make run

#.  Open a web browser to: http://127.0.0.1:8008


Testing
--------

To install all requirements and run the test suite::

    $ make test

This will run:

* Integration tests of XBlocks running within the workbench.
* Individual tests written for the demo XBlocks

You can test XBlocks through a browser using `Selenium`_. We have included an
example Selenium test for ``thumbs`` that uses Django's `LiveServerTestCase`_.
It runs as part of the test suite as executed by the above command. You need to
have Firefox installed for this test case to run successfully.

.. _Selenium: http://docs.seleniumhq.org/
.. _LiveServerTestCase: https://docs.djangoproject.com/en/1.4/topics/testing/#django.test.LiveServerTestCase

To update and view test coverage::

    $ make cover

See the `coverage.py`_ docs for more info and options.

.. _coverage.py: http://coverage.readthedocs.org/


Using the workbench
-------------------

When you open the workbench, you'll see a list of sample XBlock configurations
(scenarios).  Each will display a page showing the XBlocks composited together,
along with internal information like the "database" contents.

The workbench database defaults to a sqlite3 database. If you're using devstack,
you may want to set ``WORKBENCH_DATABASES`` to point to your MySQL db.

If you want to experiment with different students, you can use a URL parameter
to set the student ID, which defaults to 1::

    http://127.0.0.1:8000/?student=17

Different students will see different student state, for example, while seeing
the same content.  The default student ID contains only digits but it is not
necessary to limit student IDs to digits. Student IDs are represented as
strings.


Making your own XBlock
----------------------

Making an XBlock involves creating a Python class that conforms to the XBlock 
specification. See the ``sample_xblocks`` directory for examples and
`the XBlock tutorial`_ for a full walk-through.

.. _the XBlock tutorial: http://edx.readthedocs.org/projects/xblock-tutorial

We provide a script to create a new XBlock project to help you get started.
Run ``bin/workbench-make-xblock`` in a directory where you want to create your XBlock
project.  The script will prompt you for the name of the XBlock, and will
create a minimal working XBlock, ready for you to begin development.

You can provide scenarios for the workbench to display: see the ``thumbs.py``
sample for an example, or the ``xblock/problem.py`` file.  The scenarios are
written in a simple XML language.  Note this is not an XML format we are
proposing as a standard.

Once you install your XBlock into your virtualenv, the workbench will
automatically display its scenarios for you to experiment with.

If you are interested in making an XBlock to run for your course on edx.org,
please get in touch with us as soon as possible -- in the ideation and design
phase is ideal. See our `XBlock review guidelines`_
for more information (note that this is not needed for XBlocks running on your
own instance of Open edX, or released to the wider community).

.. _XBlock review guidelines: https://openedx.atlassian.net/wiki/display/OPEN/XBlock+review+guidelines


Example XBlocks
---------------

Included in this repository are some example XBlocks that demonstrate how to use 
various aspects of the XBlock SDK. You can see a more detailed description of 
those examples in `the README`_ located in that repository:

There is a rich community of XBlock developers that have put together a large 
number of XBlocks that have been used in various contexts, mostly on the edx-platform. 
You can see examples of what that community has done in the `edx-platform wiki`_.

.. _the README: https://github.com/edx/xblock-sdk/blob/master/sample_xblocks/README.rst
.. _edx-platform wiki: https://github.com/edx/edx-platform/wiki/List-of-XBlocks


Advanced Installation
---------------------

In order to lower the barrier to entry in developing XBlocks, we aim to
ship with "batteries included" as much as possible, keeping
configuration and installation steps to a minimum. Hence, the default,
recommended use case is to run the development server from within a
preconfigured virtual machine.

However, as this is still a djangoapp, it supports a number of
use-cases:

1. Run locally via virtualenv

        $ mkvirtualenv sdk
        $ workon sdk
        $ make install  # pip install -r requirements/{base,test}.txt; pip install -e .
        $ make run  # python manage.py runserver 0:8008
        $ deactivate

2. Provision "Bare metal" on Debian/Ubuntu

        $ make provision  # may need to be run with `sudo`
        # Installs both system and Python packages


License
-------

The code in this repository is licensed under version 3 of the AGPL unless
otherwise noted.

Please see ``LICENSE.txt`` for details.


How to Contribute
-----------------

Contributions are very welcome. The easiest way is to fork this repo, and then
make a pull request from your fork. The first time you make a pull request, you
will be asked to sign a Contributor Agreement.

Please see our `contributor's guide`_ for more information on contributing.

.. _contributor's guide: http://edx.readthedocs.org/projects/edx-developer-guide/en/latest/process/overview.html


Reporting Security Issues
-------------------------

Please do not report security issues in public. Please email security@edx.org


Mailing List and IRC Channel
----------------------------

You can discuss this code on the `edx-code Google Group`__ or in the
``#edx-code`` IRC channel on Freenode.

__ https://groups.google.com/group/edx-code

.. |build-status| image:: https://travis-ci.org/edx/xblock-sdk.svg?branch=master
   :target: https://travis-ci.org/edx/xblock-sdk
.. |coverage-status| image:: https://coveralls.io/repos/edx/xblock-sdk/badge.png
   :target: https://coveralls.io/r/edx/xblock-sdk
