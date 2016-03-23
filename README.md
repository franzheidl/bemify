# bemify

[![Bower Version](https://img.shields.io/bower/v/bemify.svg)](https://img.shields.io/bower/v/bemify.svg)
[![Gem Version](https://img.shields.io/gem/v/bemify.svg)](https://img.shields.io/gem/v/bemify.svg)
[![npm Version](https://img.shields.io/npm/v/bemify.svg)](https://img.shields.io/npm/v/bemify.svg)

Bemify is a set of Sass mixins to help you write well-structured, readable, maintainable, component-based modular SCSS source using a BEM-style syntax.

__Bemify site & documentation: [http://franzheidl.github.io/bemify/](http://franzheidl.github.io/bemify/)__

Bemify supports [libsass](https://github.com/sass/libsass) since libsass 3.2.4.
## Install

Bemify can be installed as a [Ruby Gem](https://rubygems.org/gems/bemify), via [Bower](http://bower.io/search/?q=bemify), [NPM](https://www.npmjs.com/package/bemify), or manually. As a NPM module, bemify supports [eyeglass](https://github.com/sass-eyeglass/eyeglass). Bemify is also on [Sache.in](http://www.sache.in/search?query=bemify).


### Bower
To install via bower run:

    $ bower install bemify --save-dev

### Ruby Gem
When installed as a Ruby Gem, Bemify will be installed as a Compass extension if Compass is installed on your system.

    $ gem install bemify

### npm
To install via npm run:

    $npm install bemify --save-dev

### Manual Install
Include `sass/_bemify.scss`in the appropriate location in your project.



## Usage
First, import bemify:

    @import 'bemify';


Once imported, the bemify mixins can now be used to write BEM-style SCSS, making your source cleaner and easier to read and change.

    @include block('my-element') {
        …

        @include element('child') {
          …
        }

        @include modifier('small') {
          …
        }

        @include modifier('large') {
          …
        }

        @include state('active') {
          …
        }

    }

The output will be full, non-nested BEM-style class selectors:


    .my-element {
      …
    }

    .my-element__child {
      …
    }

    .my-element--large {
      …
    }

    .my-element.is-active {
      …
    }

By default, bemify will output combined `.block.state` / `.block__element.state` selectors.
Bemify can also be configured to output full `.block--state` / `.block__element--state` selectors.
For details, see Configuration below.


The mixins can be nested to create modifiers for subcomponents:

    @include block('my-element') {

        @include element('child') {
            …
            @include modifier('bad') {
                …
                @include state('happy') {
                    …
                }
            }
        }

        @include modifier('large') {
            …
        }

        @include state('active') {
            …
        }

    }

This will result in:

    .my-element {
        …
    }

    .my-element__child {
        …
    }

    .my-element__child--bad {
        …
    }

    .my-element__child--bad.is-happy {
        …
    }

    .my-element--large {
        …
    }

    .my-element.is-active {

    }

### Scoping

Bemify can can of course also be used inside any scope:

	.scope {

		@include block('nav') {

			// etc.

		}

	}


### Configuration Options

bemify uses some configuration variables where to adjust the block-element and the state separator, as well as the state prefix.
To overwrite bemify's config with your own configuration file, just import your variables before using one of the mixins.

    @import "your-variables";
    @import "bemify";

    @include block('my-block') {
        …
    }


Configurable options and their defaults are:

* `$combined-state-selectors`: `true`

  Will output selectors like: .element.is-active, set to false to write .element--is-active

* `$element-separator`: `__`

* `$modifier-separator`: `--`

* `$state-prefix`: `is`

  Note that `$state-prefix` can be overridden with each call to the `state` mixin, so you can use both `--is-active` and `--has-error` using the same configuration:

      @include state('error', 'has') {}


## Aliases
Not everyone thinks in the categories of 'block, element, modifier', but many of us still want to write modularized, components-based CSS. There are a couple of aliases included for those who think in terms of components, parent-child / -subcomponents included (And it's totally straightforward to add your own):

    @include block('name') {}
        == @include component('name') {}

    @include element('name') {}
        == @include child('name') {}
        == @include subcomponent('name') {}
        == @include sub('name') {}





## Resources
Some highly recommended reading re CSS structure, decoupling markup and styles, BEM, and why this makes sense:


* [Nicolas Gallagher: About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
* [Philip Walton: Side Effects in CSS](http://philipwalton.com/articles/side-effects-in-css/)
* [BEM official](http://getbem.com/)
* [Harry Roberts: MindBEMding – getting your head ’round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)



---
The MIT License (MIT)

Copyright (c) 2015 Franz Heidl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
