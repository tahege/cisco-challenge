# Mechanic SPA Interview Project
This is a react single page web app for UI interviews.

## App Audience
This is a website for mechanics. The mechanics save the customers personal information (first name, last name,
email, number) and the customers car information (make, model, year). Each car then has a parts list. When the
mechanic views the car (/cars/:carId) they should see the car information (make, model, year) with the list of
parts below. The mechanic will sometimes need to create/update/delete parts on the car (example putting new
tires on a car, then part information would change).

## TODO
Create the cars page (/cars/:carId) with the car information and the list of parts. Also add
methods/routes/whatever to create/update/delete a part. The goal of this is for us to see your skills, so add
whatever you think will help us see those. So for example, if you like test driven development then add a test
framework, if you are good at designing then add a stylesheet, if you care about optimization then add
javascript side filters/sorting. Feel free to add whatever you want. There will be five endpoints needed and
the json contracts are below.
  - Create cars page (/cars/:carId)
  - Add CRUD functionally for parts on cars page

### JSON contracts
This is the structure of the JSON that will be returned by the API (you do not have to create the API).
#### Get car information
```
GET /api/cars/:carId
```
Response
```json
{
  "data": {
    "car": {"id": 2, "make": "Toyota", "model": "Camry", "year": 2020}
  }
}
```
#### Get parts information
```
GET /api/cars/:carId/parts
```
request
```json
{
  "data": {
    "parts": [
      {"id": 7, "name": "Tires", "supplier": "Goodyear", "model": "TX-37", "replaced": "2020-04-10T16:55:17-04:00" | null, "originalPart": true},
      ...
    ]
  }
}
```
#### Create part
```
POST /api/cars/:carId/parts
```
Params
```json
{
  "part": {
      "id": 3, "name": "Tires", "supplier": "Goodyear", "model": "TX-37"},
  }
}
```
Successful response
```json
{
  "data": {
    "part": {"id": 7, "name": "Tires", "supplier": "Goodyear", "model": "TX-37", "replaced": "2020-04-10T16:55:17-04:00" | null, "originalPart": true},
  }
}
```
#### Edit part
```
PATCH /api/parts/:partId
```
Params
```json
{
  "part": {
      "id": 3, "name": "Tires", "supplier": "Goodyear", "model": "TX-37", "replaced": "2020-04-10T16:55:17-04:00", "originalPart": true},
  }
}
```
Successful response
```json
{
  "data": {
    "part": {"id": 7, "name": "Tires", "supplier": "Goodyear", "model": "TX-37", "replaced": "2020-04-10T16:55:17-04:00" | null, "originalPart": true},
  }
}
```

#### Delete part
```
PATCH /api/parts/:partId
```
Successful response
```json
{}
```

#### Error responses
All error responses will be in the following format:
```json
{
  "errors": ["Some messages"]
}
```

## Other Info
Please upload your code to github (or something like that) and share the link with us/recruiter a few hours
before your interview.

# React Default Stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
