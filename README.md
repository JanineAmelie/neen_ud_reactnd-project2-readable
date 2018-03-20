## Udacity React Nanodegree Project 2
Readable: a react-redux anonymous comment messaging board.


### Table of Contents
1. [Project Overview](#project-overview)
2. [Final Product](#final-product)
3. [Project Information](#project-information)
4. [How to Run (View locally)](#how-to-run)

---

### Project-Overview

A “Readable” application where users can post text content and comment on each other's posts. You're  able to submit your own posts, comment on existing posts, and edit and delete posts and comments.

This dynamic application was build from scratch while combining the state management features of Redux with the declarative component model from React. The Project utilizes the Redux-thunk middleware to handle async fetch calls from the backend.

---
### Final-Product
![Image](https://www.dropbox.com/s/h0s6sv3hydt521b/URN_P2.png?raw=1)

---

### Project-Information
**Libraries:**
 - [ **React**](https://reactjs.org/)
 - [**React PropTypes**](https://github.com/facebook/prop-types)
 - [ **React Router-DOM**](https://reacttraining.com/react-router/)
 - [**Redux**](https://redux.js.org/)
 - [**Redux-Thunks**](https://github.com/gaearon/redux-thunk) Redux that allows you to write 	action creators that return a function instead of an action
 - [**Styled Components**](https://www.styled-components.com/) Another way of writing CSS, no longer style html Instead, you’re defining components that possesses their own encapsulated styles.
 - [**Material-Ui**](http://www.material-ui.com/#/) React components that implementGoogle's Material Design
 - [ **Moment**](https://momentjs.com/)  Time plugin to convert  the post and comment timestamps into relative time.
 - [**Faker**](https://github.com/Marak/Faker.js)  Plugin to generate interesting dummy text for all content in the project, to make it look more interesting.
 - [**Immer**](https://github.com/mweststrate/immer) A library that makes working with immutable state easy and clean. You modify a copy of the state and return that.

**Development Tools I use:**
  -	[Eslint](https://eslint.org/) Linting plugin
  -	[airBNB eslint Plugin](https://github.com/airbnb/javascript) to maintain clean code.
  -	[Webstorm IDE](https://www.jetbrains.com/webstorm/)
	
**Project Specifications:**
  - ✓ The application was created with `create-react-app.`
  - ✓ Routing. Navigating to a deleted post shows an error page.
  - ✓ The application's state is managed by Redux, with the exception of form elements which still use react controlled component state for form submission.
  - ✓ Users can create/delete/edit/vote on comments and posts.

**Project  Sources/References:**
  - [React Documentation](https://reactjs.org/docs/jsx-in-depth.html)
  - [Immutability the easy way](https://hackernoon.com/introducing-immer-immutability-the-easy-way-9d73d8f71cb3)
  - [React Router v4 Complete guide](https://www.sitepoint.com/react-router-v4-complete-guide/)
  - [ Short, in-depth explanations of JavaScript code and concepts ](http://jsforallof.us/)

---

### How-to-Run:

#### **Project pre-requisites**
 - Node & NPM
 - Terminal window where NPM commands work.
 - Winrar / Winzip etc.

___
 
### **Getting the project on your system (viewing locally):**

___

#### Starting the back-end server (backEnd)
You'll need to start the backend server and allow it to run silently in the background so the frontEnd has data to fetch.

1. Download the backend server here,
https://github.com/udacity/reactnd-project-readable-starter/blob/master/api-server/README.md

2. Clone, Fork or Download the ZIP file of the backend into a folder on your local machine.

3. Extract the archive

4.	navigate to the project’s folder:
	```bash
	$> cd /path/to/your-project-folder
	```
  
5. Install all the project’s packages and dependencies:

	```bash
	$> npm install
	```
    
6.  in a terminal, run the server:
	```bash
	$> node server.js
	```
7. The server should now be running on port 3001

____
    
#### Viewing the front-end (frontEnd)
1. Clone, Fork or Download the ZIP file of this project into a folder on your local machine.
2. Extract the archive.
 
3. navigate to your project's folder
    ```bash
      $> cd /path/to/your-project-folder
    ```
4. In the root of the app, download all the project's dependencies
    ```bash
      $> npm install
    ```
5. Then run the project with the following command:
    ```bash
      $> npm start
    ```