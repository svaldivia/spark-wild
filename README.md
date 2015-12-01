## spark-wild
Spark Wild App - Built during the 2015 Vancouver Startup Week Hackaton
Built By:
Joey Kudish
Marius Ciuchete
Sebastian Valdivia
Sarah Perez


## prerequisites
* [Node.js](http://nodejs.org/#download)
* [MongoDB](http://docs.mongodb.org/master/installation/)
* [Ruby](https://www.ruby-lang.org/en/) -- for [sass](http://sass-lang.com)

To avoid a mongodb error, make sure to run these two commands. This should work to ensure that the directory is set up in the right place so that Mongo can find it:

For OS X or Linux (Windows? Not sure...)

```
sudo mkdir -p /data/db/
sudo chown `id -u` /data/db
```

----

The following dependencies are installed for you as part of a post install hook when you run `npm install`:

* [Sass](http://www.sass-lang.com/)
* [grunt-cli](https://github.com/gruntjs/grunt-cli)

## installation

*You only need to do this once*

1. `git clone git@github.com:spark-wild/spark-wild.git` into your directory of choice
2. browse inside the checked out folder then run `npm install`
3. run `grunt update`
4. modify your `/etc/hosts` file, and add the following to it:

 `127.0.0.1 spark-wild.dev`

## running the app

Before: If you just pulled changes down from the repository, and any dependencies changed you should run `grunt update` before running the app. Warning this task can take a few minutes.

Running the app is as simple as running `grunt` in the CLI and then visit [http://localhost:4000/](http://localhost:4000/) or [http://spark-wild.dev:4000/](http://spark-wild.dev:4000/). You can stop the process with `ctrl+c`
