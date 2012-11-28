# AlloyUI - Website

This is a working in progress of [AlloyUI's](https://github.com/liferay/alloy-ui/) website. Check the [Roadmap here](https://github.com/zenorocha/alloyui.com/wiki/Roadmap).

If you are having any problem with the library, please create an issue on [liferay/alloy-ui](https://github.com/liferay/alloy-ui/) repository.

## Table of contents

* [How it works?](#how-it-works)
* [Getting started](#getting-started)
* [Structure](#structure)
* [Deploy](#deploy)
* [Contribute](#contribute)

## How it works?

We use [DocPad](https://github.com/bevry/docpad), a static generator in NodeJS.

## Getting started

1. [Install NodeJS](https://github.com/bevry/community/wiki/Installing-Node), if you don't have it yet.

2. Install DocPad globally:

		sudo npm install -fg docpad@6.11

3. Once NodeJS is installed, you just need to clone the project:

		git clone git@github.com:zenorocha/alloyui.com.git

4. Then go to the project's folder:

		cd alloyui.com

5. Install dependencies:

		ant install

6. And finally run:

		ant run

Now you can see the website running in `http://localhost:9778/` :D

## Structure

The basic structure of the project is given in the following way:

<pre>
.
|-- out/
|-- src/
|   |-- documents
|   |-- files
|   |-- layouts
|-- docpad.coffee
|-- package.json
`-- publish.sh
</pre>

### out/

This is where the generated files are stored, once DocPad has been runned. However, this directory is unnecessary in versioning, so it is ignored ([.gitignore](https://github.com/zenorocha/alloyui.com/blob/master/.gitignore)).

### [src/documents](https://github.com/zenorocha/alloyui.com/blob/master/src/documents)

Contains all the pages of this website. Also all the documentation written in Markdown and examples written in JavaScript.

### [src/files](https://github.com/zenorocha/alloyui.com/tree/master/src/files)

Has images, CSS, JS and [CNAME](https://github.com/zenorocha/alloyui.com/blob/master/src/files/CNAME) that indicates the custom domain that should be used.

### [src/layouts](https://github.com/zenorocha/alloyui.com/tree/master/src/layouts)

Contains some templates that are used in the application.

### [docpad.coffee](https://github.com/zenorocha/alloyui.com/blob/master/docpad.coffee)

Stores most settings of the application.

### [package.json](https://github.com/zenorocha/alloyui.com/blob/master/package.json)

List NodeJS modules dependencies.

### [publish.sh](https://github.com/zenorocha/alloyui.com/blob/master/publish.sh)

Shell Script responsible for publishing the site via via [Github Pages](http://pages.github.com).

## Deploy

Just run `sh publish.sh` and then go to [zenorocha.github.com/alloyui.com](http://zenorocha.github.com/alloyui.com/)

## Contribute

Before any commit, please be sure to:

### Sort configuration attributes in logical order

1. DOM manipulation
2. Specific module logics in alphabetical order
3. Style configurations

For example:

```
var carousel = new A.Carousel({
    contentBox: '#demo', // 1. DOM manipulation
    activeIndex: 'rand', // 2. Specific module logics in alphabetical order
    intervalTime: 2, // 2. Specific module logics in alphabetical order
    width: 680, // 3. Style configurations
    height: 254 // 3. Style configurations
}).render();
```

### Run JSHint

Run [JSHint](http://jshint.com/) with the preferences proposed by [aui-lint](https://github.com/zenorocha/aui-lint) that were adapted from [yui-lint](https://github.com/yui/yui-lint).

* To do that, get the git submodule that contains all preferences: `git submodule update --init`
* Go to aui-lint folder: `cd lib/aui-lint`
* Then create this symbolic link: `ln -s $PWD/jshint.json ~/.jshintrc`
* Now you can lint using your terminal like `jshint example.js`, a [sublime text plugin](https://github.com/uipoet/sublime-jshint) or any of those [other solutions](http://www.jshint.com/platforms/).