---
title: Packaging Python Projects
description: Guidelines for publishing python projects as packages
permalink: /resources/packaging/exporting-python-projects/
layout: layouts/page
section: resources
tags: ospo
eleventyNavigation:
  parent: ospo-resources-packaging
  key: ospo-resources-packaging-exporting
  order: 1
  title: Packaging Python Projects
sidenav: true
sticky_sidenav: true
---

# Packaging and Publishing Python Libraries

This guide is intended to guide Python developers in how to design their code to be easily packaged and published to PyPi with the help of Poetry. Firstly, this guide assumes that you have already set up your project and have been developing it with the help of Poetry. 

## Directory Structure

In order to design your Python library code so that it can be used and imported properly, the directory structure of the code should follow Python standards and practices. In your existing project, make sure that you have identified all parts of the code that you intend to be imported elsewhere to be used as library code. Once you have identified all of the code that you want to be able to be imported then you can put that code in the proper directory. Here is an example of the proper directory structure:

```shell
my-project-src-code/
|
--my-project/
	|
	__init__.py
	example.py
```

How your library package will work is that whenever someone installs the library they will import ‘my-project’ and they can import anything that is present in the `\_\_init\_\_.py` file. Therefore, it is important to import everything that you want to be present in the library inside the `\_\_init\_\_.py` file. 

### Exporting to PyPi

First, if you do not already have a PyPi account make sure that you create one. It is highly recommended that you also use an authenticator app such as Google authenticator or an equivalent two factor authentication method.   

Secondly, once you have a PyPi account and have made sure that it is secure and configured to your liking you can generate an API key for publishing. Then you can click on your username in the top right corner and navigate to ‘Account settings.’ 

<img width="1090" alt="Screenshot 2025-06-02 at 9 39 57 AM" src="https://github.com/user-attachments/assets/c3bcc2c7-a20b-4dc1-977f-1ea1bd1cdaba" />

<img width="1048" alt="Screenshot 2025-06-02 at 9 40 58 AM" src="https://github.com/user-attachments/assets/5d92f728-df1e-40ec-906a-5a5f83e0472f" />

Once you have navigated to the API token section, click on Add API token to generate a new token. It is recommended to name your token something memorable and only give it scope to the current project that you are going to upload. Once generated, make sure that you save the token in a safe place for later.

#### Exporting via Poetry

	  
Now that you have a PyPi account, you can publish to PyPi. First, allow poetry to use your API token with the following command:

```shell
poetry config pypi-token.pypi <api_token_goes_here>
```

Once your key is added to your configuration, make sure that your project is ready for export. Once this is done, you can build and publish your project with the following commands:

```shell
poetry build
poetry publish
```

#### Troubleshooting

	  
If you run into problems exporting your project it can be a number of things. Make sure that you have checked your project for any of the following problems:

* Incorrect Python directory structure  
* Incorrect or expired API key  
* Incorrectly setup or configured poetry installation

