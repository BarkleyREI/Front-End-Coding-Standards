# README

## Front-end Coding Standards

The standards by which the dev team at BarkleyREI in Pittsburgh codes every project.

Uses [beautifuldocs](http://beautifuldocs.com)

## How to compile

`npm install -g beautifuldocs`

Navigate to directory in terminal

`bfdocs --theme=./themes/rei manifest.json`

## How to push to gh-pages

`git add .`

`git commit -m "blah blah commit message"`

`git push origin master`

At this point you have pushed it to the github repository (hopefully your forked version)

Now to subtree into the pages branch

`git subtree push --prefix out origin gh-pages`

No further steps, this pushes it to the branch and up to the repo

## Code reviews

All recommendations in this documentation should be adhered to during code reviews. Exceptions can be discussed but should be avoided.
