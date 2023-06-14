# Welcome to tresh.run source code page 🏃

The goal of this project is to make it as easy as possible for new users to help contribute to the [site](https://tresh.run).

## I just want to edit text on the site... wtf is this?

First off, thank you for wanting to contribute. If you want to add to this site, there are a couple ways to do this. Pick your poison!

* ⚡️ Issue to this project [here](https://github.com/fyksen/tresh.run/issues/new). You'l need a Github user for this, sorry about that..
* 💁 Pull request [here](https://github.com/fyksen/tresh.run) Thanks!
* 💬 Send a message in our public matrix chat.
* 💌 Send a [mail](mailto:fredrik@fyksen.me)!

## Technical stuff, how does this work? 💾

* The site is built on the fantastic wiki project [Vitepress](https://vitepress.dev//).
* When something new is added to this repository, our site gets updated automagically 🧙

## How to build locally?

Wow, that's very cool 🤩. Here's a easy way to make the site run on your own computer:

* Fist, make sure you have git installed. [HOWTO](https://github.com/git-guides/install-git)
* Then install [nodejs](https://nodejs.org/en)
* Then we are finally ready to pull down and build this bloody thing:
```
git clone https://github.com/fyksen/tresh.run.git
cd tresh.run
npm ci
npm run docs:dev
```

* Now you should be able to visit the url [http://localhost:5173/](http://localhost:5173/) and see the site.
* Changes you make while running the site will get updated automatically when you save.