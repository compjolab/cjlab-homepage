## CompJoLab

## How to deploy

The [Rakefile](Rakefile) has a task defined. Run this at the command prompt:

      $ rake shoop


__Here's a [list of resources for developing with Jekyll and Github pages](http://compjolab.github.io/dev-resources)__. You can view its Github file page here: [dev-resources.md](dev-resources.md).


The rest of this pertains to how to get Jekyll running on your own system:

## Developer startup

### 0. To copy the source of this repo:

(this works if you are an owner/member of the repo and have SSH access to it)

~~~sh
git clone git@github.com:compjolab/compjolab.github.io.git
~~~

### 1. Have Ruby installed

In the shell, check your version:

~~~sh
ruby -v
~~~

A version of `2.3` or higher should be fine.


### 2. Install the Jekyll gem

~~~sh
gem install jekyll
~~~

### 3. Install JDK 8.x

Unfortunately, the s3-website gem only works with JDK 8. It may be easiest to install **jenv** and run v8 for this project only:

https://github.com/laurilehmijoki/s3_website/issues/298#issuecomment-372244500

You can also download Java 8 SDK here:

http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

At some point, might be easier to write a script that just rsyncs with the bucket.

