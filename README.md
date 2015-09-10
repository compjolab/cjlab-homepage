## CompJoLab

## How to deploy

The [Rakefile](Rakefile) has a task defined. Run this at the command prompt:

      $ rake shoop


The deployment URL is:

[http://stanfordcompjolabsite.s3-website-us-east-1.amazonaws.com/](http://stanfordcompjolabsite.s3-website-us-east-1.amazonaws.com/)



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

A version of `2.0` or higher should be fine.


### 2. Install the Jekyll gem

~~~sh
gem install jekyll
~~~


