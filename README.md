# mean-stack-lab
Lab implementation following the [MEAN stack tutorial](https://thinkster.io/angulartutorial/mean-stack-tutorial/)
on [thinkster](https://thinkster.io/). My goal is to compare this to a LAMP stack at some point.
(Well, not PHP naturally. And probably nginx instead of Apache. And maybe just the back end bit.)

## Installing the prerequisites
I'm using Ubuntu 14.04 so here is what I did.

### [Install the latest stable version of MongoDB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)
The Ubuntu Trusty repo contains an older version and the latest MongoDB release (2.6) has some enhancements that you really want, particulary concerning [safe writes](http://docs.mongodb.org/master/release-notes/2.6-compatibility/#write-methods-incompatibility).

### [Install the latest Node.js via nvm](https://github.com/creationix/nvm)
Again, Ubuntu Trusty repo contains an older version of Node.js and I want the latest stable version. I also think it's pratical to separate versions of frameworks/languages and their dependencies for different projects. After install I stored the version in a nvmrc file. Run `nvm use` in the project folder to make sure you are using the correct version.
