# Resuminator Developer Documentation

## Table of Contents
<!--ts-->
* [Navigating the codebase](#navigating-the-codebase)
    * [Folder Structure](#folder-structure)
<!--te-->

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