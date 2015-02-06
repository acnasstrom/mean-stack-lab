# mean-stack-lab
Lab implementation following the [MEAN stack tutorial](https://thinkster.io/angulartutorial/mean-stack-tutorial/)
on [thinkster](https://thinkster.io/). My goal is to compare this to a LAMP stack at some point.
(Well, not PHP naturally. And probably nginx instead of Apache. And maybe just the back end bit.)

Check out this blog post for a basic comparison of [LAMP vs MEAN](http://blog.backand.com/mean-vs-lamp/).

## Installing the prerequisites
I'm using Ubuntu 14.04 so here is what I did.

### [Install the latest stable version of MongoDB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)
The Ubuntu Trusty repo contains an older version and the latest MongoDB release (2.6) has some enhancements that you really want, particulary concerning [safe writes](http://docs.mongodb.org/master/release-notes/2.6-compatibility/#write-methods-incompatibility).

### [Install the latest Node.js via nvm](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)
Again, Ubuntu Trusty repo contains an older version of Node.js and I want the latest stable version. I also think it's pratical to separate versions of frameworks/languages and their dependencies for different projects. After install I stored the version in a nvmrc file. Run `nvm use` in the project folder to make sure you are using the correct version.

## Following the tutorial
I thought the tutorial was pretty straight forward and I feel I got a good basic understanding on how to create a web application using the MEAN stack. I have good knowledge of MongoDB and web development in general and I have worked with other Javascript front end frameworks before. I've never worked with AngularJS or Express before, so that was new to me.

### Bonus: Create an application using the mean framework
While exploring the subject of MEAN i found [mean](http://mean.io/). It seemed to be some sort of Rails-y set of tools with scaffolding, package management etc to get you started with the MEAN stack, so I decided to check it out after finishing the above mentioned tutorial.

#### Install prerequisites + mean framework
You can use mean either with [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/). I choose Grunt since that seems to be the recommendation from mean.

```
npm install -g grunt-cli
npm install -g bower
npm install -g mean-cli
```

#### Create a new application
Scaffolding with mean framework is really a wrapper around cloning the mean git repo (https://github.com/linnovate/mean) with some additional steps. A word of warning: You might want to clean up readme files, git repo configuration and other stuff before committing your new project to your repo. I did not.

```
mean init flipper-news

? What would you name your mean app? flipper-news
? Do you prefer grunt or gulp as a taskrunner? grunt
? Which mean packages would you like to install? mean-admin

cd flipper-news && npm install
```

Then just start the server with `grunt` and go to http://localhost:3000. Voilà! You're up and running!

I opted in for the [mean-admin](https://git.mean.io/linnovate/mean-admin/) package hoping it would provide a simple database web interface like [RailsAdmin](https://github.com/sferik/rails_admin) or [Django admin](https://docs.djangoproject.com/en/1.7/ref/contrib/admin/). The admin package _does_ provide a database interface. It also provides a web ui for managing users, system settings, themes and modules.

Start by creating a user by clicking on the "Join" link in the web ui. Make your user an admin by running `mean user <your email> -a admin` and restarting server. Log in and now you have access to the admin features.

The scaffolding done by calling `mean init <app>` also creates an example package **articles** as a starting point for a blog or similiar application.

I'm not going to dig any deeper into the mean framework, but it seems kind of nice if you don't mind the overhead. You get user authentication and some other stuff to get you started with a new project quickly.
