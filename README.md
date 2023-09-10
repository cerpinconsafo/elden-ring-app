# This is a shoddy attempt at using the free chatGPT model version (unk, JULY 2023) to create a SOMEWHAT simple application using the Elden Ring API.

## THe purpose of this app was a fun DEATH COUNT tracker for ELDEN RING boss attempts, where players would be able to manually enter or keep track of their boss attemtps and in turn display this data as a graph or chart and also be able to compare DEATH COUNTS to other users/characters FOR FUN.

## So far, this project is showing the LIMITs of the free chatGPT model. It will usually provide outdated information/code at first, and when fed the errors, may attempt to apologize for giving you outdated info, may give you an alternative and/or updated code set to fix the error, or simply apologize and redirect you to documentation. 

## I will admit, I am very new at using this, and was simply trying to experiment and see if a very simple idea could be executed without any manual intervention outside of manipulating the AI.

### Current issue 09.13.23
The API wont fetch ALL the bosses for some reason. I can get them to fetch different pages of 20 bosses each, but not all of them. This may be a limitation of the api, the way I am trying to use the call, or something else I cannot explain yet.

When the page loads, the dropdown menu is fully populated, in alphabetical order, of the first 20 ELDEN RING bosses in the list. When entering text into the 'search boss' field, it begins to sort the available entries in the drop down, hiding them until the user manually clicks the 'select boss' drop down menu.

I do like this, because it avoids a user being spoiled other boss names, and from seeing a list of ALL the bosses, but this is still not the entirely intended functionality that I want.

## REACT APP stuff
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
