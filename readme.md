<p align="center">
  <img src="https://raw.githubusercontent.com/acidjazz/ckd/master/media/ckd.gif" alt="CKD GIF"/>
</p>

> Cathering Kwong Design

[![GitHub issues](https://img.shields.io/github/issues/acidjazz/ckd.svg)](https://github.com/acidjazz/ckd/issues)
[![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://raw.githubusercontent.com/acidjazz/ckd/master/license)
[![CircleCI](https://img.shields.io/circleci/project/github/acidjazz/ckd.svg)](https://circleci.com/gh/acidjazz/ckd/)
[![Dependency Status](https://gemnasium.com/badges/github.com/acidjazz/ckd.svg)](https://gemnasium.com/github.com/acidjazz/ckd)
[![aeonian status](https://img.shields.io/badge/%C3%A6onian-deployed-green.svg)](https://github.com/acidjazz/aeonian)


## Branch Status

master | staging 
--- | --- 
[![CircleCI](https://circleci.com/gh/acidjazz/ckd/tree/master.svg?style=shield)](https://circleci.com/gh/acidjazz/ckd/tree/master) | [![CircleCI](https://circleci.com/gh/acidjazz/ckd/tree/staging.svg?style=shield)](https://circleci.com/gh/acidjazz/ckd/tree/staging)


## Stack and packages detail
* [VueJS](https://vuejs.org/)  v2.x
* [NuxtJS](https://nuxtjs.org/) v2.15.8
* [Stylus](https://stylus-lang.com/) v0.56.0

## Local Build Setup
* Clone this repository 
```bash
git clone git@github.com:acidjazz/ckd.git
```
* Install dependencies
```bash
yarn install
```
* Serve your dev environment with [HMR](https://webpack.github.io/docs/hot-module-replacement.html) at http://localhost:3000
```bash
yarn dev
```
> To serve to other machines via your IP address run `yarn dev-public`

## Deployment
Continuous Deployment is setup using the [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) workflow with [aeonian](https://github.com/acidjazz/aeonian) via [Circle-CI](https://circleci.com/gh/acidjazz/ckd)
* Branch [development](https://github.com/acidjazz/ckd/tree/development) merges deploy to http://development.catherinekwong.com/
* Branch [staging](https://github.com/acidjazz/ckd/tree/staging) merges deploy to http://staging.catherinekwong.com/
* Branch [master](https://github.com/acidjazz/ckd/tree/master) merges deploy to http://catherinekwong.com/
