rapidPrototypes
===============

Instead of relying on copy and paste for my rapid prototyping, I've organized a Node.js stack that allows me to write
fully asynchronous design-centric apps, all the way down to client-side templating.

I've abstracted each portion of the application into its own folder, explained below. 

## Node Modules ##

Copy the Gruntfile.js and package.json into a new folder, then run npm install to install the following Node modules:

+ Node
+ Express
+ Consolidate.js
+ Hogan.js
+ Grunt
+ Grunt JQuery Builder
+ Grunt JSHint
+ Grunt Uglify
+ Grunt Bootstrap

## Data ##

I chose to house my "real fake data" in large Javascript object literals above the /public directory. These data
files are exported as Node modules that can be referenced by the /server/server.js file to create an asynchronous
data request without the need for an actual database. I may add bindings for a MongoDB instance in the future if 
the need arises.

## Public ##

This is the main folder where files are served from. My work focuses on single-page apps (SPA's) that reference a single 
index.html file. I've wired this file with Require.js, for Javascript dependency management.

## Server ##

This houses my basic server.js file. The file instantiates an Express instance, and also works as a crude router. I will
break routing off into a separate file going forward as my applications get more complex.

