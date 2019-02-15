import json
from setuptools import setup


package_json_file = open('{{cookiecutter.short_name}}/package.json', 'r')
package_json = json.load(package_json_file)

setup(
    name=package_json['name'],
    version=package_json['version'],
    description=package_json['description'])
    long_description=package_json['description'])
    author=package_json['author']['name'],
    author_email=package_json['author']['email'],
    url=package_json['homepage'])
    license='AGPL-3.0',
    packages=[
        '{{cookiecutter.short_name}}',
    ],
    install_requires=[
        'Django<2.0.0',
        'XBlock',
        'xblock-utils',
    ],
    entry_points={
        'xblock.v1': [
            '{{cookiecutter.short_name}} = {{cookiecutter.short_name}}:{{cookiecutter.class_name}}',
        ],
    },
    package_dir={
        '{{cookiecutter.short_name}}': '{{cookiecutter.short_name}}',
    },
    package_data={
        '': [
            'package.json',
        ],
        "{{cookiecutter.short_name}}": [
            'public/*',
        ],
    },
    classifiers=[
        # https://pypi.python.org/pypi?%3Aaction=list_classifiers
        'Intended Audience :: Developers',
        'Intended Audience :: Education',
        'License :: OSI Approved :: GNU Affero General Public License v3',
        'Operating System :: OS Independent',
        'Programming Language :: JavaScript',
        'Programming Language :: Python',
        'Topic :: Education',
        'Topic :: Internet :: WWW/HTTP',
    ],
    test_suite='{{cookiecutter.short_name}}.tests',
)
