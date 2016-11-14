# andrewgarner.com

Static site for [Andrew Garner] using [Jekyll].


## Prerequisites

* [Git]
* [Docker]


## Installation

Clone the repository:

```sh
$ git clone git@github.com:andrewgarner/andrewgarner.com.git
```


## Usage

To serve the site locally using [Docker]:

```sh
$ docker-compose run jekyll
```

To release the site:

```sh
$ env S3_ID='abc123' S3_SECRET='abc123' ./bin/release
```


[Andrew Garner]: https://www.andrewgarner.com
[Docker]: https://www.docker.com
[Git]: http://git-scm.com
[Jekyll]: https://jekyllrb.com
