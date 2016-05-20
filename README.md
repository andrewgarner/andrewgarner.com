# andrewgarner.com

Static site for [Andrew Garner] using [Jekyll].


## Prerequisites

* [Git]
* [Ruby]
* [Bundler]


## Installation

Clone the repository:

```sh
$ git clone git@github.com:andrewgarner/andrewgarner.com.git
```

Install the required gems:

```sh
$ bundle install
```


## Usage

To serve the site locally:

```sh
$ ./bin/jekyll serve
```

To release the site:

```sh
$ env S3_ID='abc123' S3_SECRET='abc123' ./bin/release
```


[Andrew Garner]: https://www.andrewgarner.com
[Bundler]: http://bundler.io
[Git]: http://git-scm.com
[Jekyll]: https://jekyllrb.com
[Ruby]: https://www.ruby-lang.org
