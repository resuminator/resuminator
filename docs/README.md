# Resuminator Developer Documentation

## Table of Contents
<!--ts-->
* [Introduction](#introduction)
* [Tech Stack](#tech-stack)
* [Setting up a development enviroment](#setting-up-a-development-enviroment)
    * [1. Installing Docker](#1.-installing-docker)
    * [2. Setting up the repository](#2.-setting-up-the-repository)
    * [3. Starting the development server](#3.-starting-the-development-server)
* [Contributing to the project](#contributing-to-the-project)
* [Navigating the codebase](#navigating-the-codebase)
    * [Folder Structure](#folder-structure)
* [Help and Support](#help-and-support)
<!--te-->

## Introduction
Welcome to Resuminator Developer Community! Resuminator is the simplest online resume-builder out there which provides an intuitive drag-n-drop and what-you-see-is-what-you-get (WYSIWYG) approach.

## Tech Stack
Before contributing code to core services in Resuminator, it is highly recommended that you are familiar with the following tech stack for ease of understanding the codebase as well as contributing to it.

* React 16+ (with Hooks)
* Redux (with middlewares, eg. Thunk)
* React Router
* Material UI 4.11+
* Docker and Docker-Compose
* Framer Motion

## Contributing to the project
To read about contribution guidelines refer to our [CONTRIBUTION GUIDE](https://github.com/viveknigam3003/resuminator/blob/master/CONTRIBUTING.md)

## Setting up a development enviroment
### 1. Installing Docker
Creating a local development environment for Resuminator requires **Docker** and **Docker Compose** to be installed on your system. You may refer to the Docker Installation Guide for you respective OS from the links below:

Docker:
* [Linux](https://docs.docker.com/engine/install/)
* [Windows 10](https://docs.docker.com/docker-for-windows/install/)
* [MacOS](https://docs.docker.com/docker-for-mac/install/)

Docker Compose:
* [Linux](https://docs.docker.com/compose/install/)

**NOTE:** You **don't** need to install Docker-Compose separately in Windows or Mac. The Docker Desktop installation includes Docker Engine, Docker CLI client, Docker Compose, Notary, Kubernetes, and Credential Helper.

Once you have installed Docker, verify it's version using the following commands.

```shell
$ docker -v
Docker version 20.10.2, build 2291f61
```
```shell
$ docker-compose -v
docker-compose version 1.27.4, build 40524192
```

### 2. Setting up the repository
Fork the official repository [viveknigam3003/resuminator](https://github.com/viveknigam3003/resuminator) to your account and then clone it on your system using the following commands:

**Note:** If you're working on Windows you might have to install [Git for Windows](https://git-scm.com/download/win)

```shell
$ git clone https://github.com/<your-username>/resuminator.git
```
```shell
$ cd resuminator
```
```shell
$ git remote add upsteam https://github.com/viveknigam3003/resuminator.git
```
```shell
$ git fetch --all
```

### 3. Starting the development server
If you have installed Docker successfully as indicated in previous steps and have setup the repository correctly. You may proceed to set up the containers for the Database and the Server.

* Once your Docker Engine is running, `cd` into the resuminator folder and run the following commands

```shell
$ cd docker
```
```shell
$ docker-compose up -d
```
This step may take some time since it will be pulling the images and builing the Docker containers for you. Once it is completed you may run the following to check if the containers are running successfully

```shell
$ docker ps | grep r8r                                                                                                  e1ba2e39e683   viveknigam3003/r8r_server   "docker-entrypoint.s…"   17 hours ago   Up 3 minutes   0.0.0.0:4001->4001/tcp     r8r_server                                                                                                         71d5260cbaa7   mongo                       "docker-entrypoint.s…"   17 hours ago   Up 3 minutes   0.0.0.0:27017->27017/tcp   r8r_userdb
```

**Note for Windows 10:** Use `docker ps | findstr r8r` instead :)

This output indicated that the containers are up and the servers are running.

Next, return to the Resuminator root folder and run
```shell
npm install && npm start
```

This will install all the required dependencies and run the UI server for you which shall be accessible at http://localhost:3000

## Navigating the codebase

### Folder Structure
We follow a Group-By-Feature Approach to organize our codebase. The `src/components` contains all the folders which contain the respective files for that feature in the application.

```
src
|- components
    |- Feature1
    |   |- File1.js
    |   |- File2.js
    |- Feature2
        |- File1.js
        |- File2.js
```
Read more about Folder Stucture through the links below:
* [The Three Pigs: how to structure your React-Redux application](https://medium.com/front-end-weekly/the-three-pigs-how-to-structure-react-redux-application-67f5e3c68392)
* [A Better File Structure For React/Redux Applications](https://marmelab.com/blog/2015/12/17/react-directory-structure.html)
* [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)

## Help and Support

If you are looking for support, feel free to reach out to me at my [email](mailto://viveknigam.nigam3@gmail.com), or join the discussions [here](https://github.com/viveknigam3003/resuminator/discussions).

If you feel something has crashed or think that something might be improved, feel free to [open an issue](https://github.com/viveknigam3003/resuminator/issues/new/choose) and we'll reach out to you in the comments.