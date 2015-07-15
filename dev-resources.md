---
title: Jekyll static site development resources
---


* TOC
{:toc}



## Markdown

[Markdown](http://daringfireball.net/projects/markdown/syntax) is a human-readable text format that can be later converted to HTML by a pre-processor (such as Jekyll). Every file with a `md` extension will be turned into HTML during the build process.

For instance, this Markdown snippet:

~~~
## Hello
My __name__ is [Dan](http://example.com)
~~~

will get converted to this HTML:

{% highlight html %}
<h2>Hello</h2>
<p>My __name__ is <a href="http://example.com">Dan</a></p>
{% endhighlight %}

- [Markdown Basics](https://help.github.com/articles/markdown-basics/)
- [Github flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
- [Kramdown Quick Reference](http://kramdown.gettalong.org/quickref.html) -- Kramdown is the particular flavor of Markdown that Jekyll uses with a few more special, but completely optional features.

## Liquid

[Liquid is a templating language](http://liquidmarkup.org/) that has some of the power of a language like PHP/Ruby/Python, but is safe/restricted enough for Github to safely run on its own servers.

You can insert Liquid into any of the Markdown files and Jekyll will execute the Liquid code when rendering the page:

{% highlight html %}
<p>Hello, this is,
  <a href="{{ "{{ site.url " }}}}">{{ "{{ site.title " }}}}</a>,
  my website.
</p>
{% endhighlight %}


That Liquid snippet will be converted to this:

{% highlight html %}
<p>Hello, this is,
  <a href="{{ site.url }}">{{site.title}}</a>,
  my website.
</p>
{% endhighlight %}


- A list of [Jekyll-specific Liquid tags and filters](http://jekyllrb.com/docs/templates/)
- [Shopify's Liquid for Designers Guide](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
- [Getting started with Liquid](http://webdesign.tutsplus.com/tutorials/getting-started-with-liquid-shopifys-template-language--cms-19747)

## Jekyll

[Jekyll is the static website framework](http://jekyllrb.com/) that turns a folder full of text files into a seemingly-dynamic site. 


### Instructions

More information can be found in the Jekyll docs: [Basic usage](http://jekyllrb.com/docs/usage/)

#### To run a local server

At your command prompt:

      jekyll serve

#### To push your changes to the live site on Github pages

First, you have to add + commit + push your changes to your local git repo:

      git add --all
      git commit -m "my changes"

Then you push those changes to Github:

      git push


#### To build the site locally

If you're curious about seeing the static HTML that Jekyll creates, but don't want to push it to Github Pages:

      jekyll build

This creates a folder inside your jekyll project folder named `_site/`. 

__Caution:__ Do __not__ put anything that you want to keep in the `_site/`. This folder gets destroyed every time `jekyll build` is run.


#### Important Jekyll files and locations

Here's the [Jekyll docs on directory and file structure](http://jekyllrb.com/docs/structure/). Specific to our project:

- {% include github-link.html filename="_config.yml" %} -- this contains site-wide configuration information, such as the title of the site.
- {% include github-link.html filename="_layouts/" %} -- this is where all the templates for the site and pages are.
- {% include github-link.html filename="_includes/" %} -- this is where all .

#### Variables

Attributes defined in {% include github-link.html filename="_config.yml" %} can be accessed via Liquid by referring to the `site` object:

{% raw %}
  <p>{{site.title}} can be found at {{site.url}}</p>
{% endraw %}


In the `page` and `post` context, use the `page` object:

{% raw %}
  <p>This post was published on {{page.date}}</p>
{% endraw %}



#### Jekyll guides and references

- [Jekyll quick start guide and installation](http://jekyllrb.com/docs/quickstart/)
- [Jekyll's directory structure](http://jekyllrb.com/docs/structure/)
- [Creating pages](http://jekyllrb.com/docs/pages/)
- [Variables](http://jekyllrb.com/docs/variables/)
- [Using Jekyll with Pages - User Documentation (help.github.com)](https://help.github.com/articles/using-jekyll-with-pages/) 
- [My Jekyll Blog Setup with Bootstrap, SASS and Pygments (kvurd.com)](http://kvurd.com/blog/my-jekyll-blog-setup-bootstrap-sass-pygments/) 


### Github Pages

[Github Pages](http://jekyllrb.com/) is where this site is currently hosted. This is a free service of Github, which basically runs `jekyll server` on their backend for every repo that follows the `repo_name/repo_name.github.io` convention, e.g. [https://github.com/{{site.github_repo}}](https://github.com/{{site.github_repo}}). There's no need to read specifically about Github Pages, as a baked out Jekyll site can be pushed to any file-hosting platform.


## Bootstrap

This site currently uses the [Bootstrap CSS framework](http://getbootstrap.com/). The base files for _this site_ can be found in {% include github-link.html filename="assets/_sass/vendor/bootstrap/" %} and {% include github-link.html filename="assets/_sass/vendor/bootstrap.scss"%}


- The [Bootstrap homepage](http://getbootstrap.com/)
- Overview of [Bootstrap's CSS framework](http://getbootstrap.com/css/)


## Sass

[Sass is a language](http://sass-lang.com/) that _looks_ like CSS but _extends_ it with programmatic abilities. Web browsers cannot read Sass-language files, but the Jekyll build process converts `.scss` files into regular CSS.

In other words, the {%include github-link.html filename="assets/stylesheets/main.scss"%} gets converted by Jekyll to [/assets/stylesheets/main.css](/assets/stylesheets/main.css) in the built site.

Note: the Sass files in this repo have an extension of `.scss`, which [is a more modern syntax of Sass. Don't use `.sass` as a file extension](http://sass-lang.com/).

- [Sass basics](http://sass-lang.com/guide)
- [The Absolute Beginner’s Guide to Sass](http://blog.teamtreehouse.com/the-absolute-beginners-guide-to-sass)



