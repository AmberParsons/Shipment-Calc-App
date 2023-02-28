This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

Run `npm start`
Then you should be able to open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To see everything working together, make sure to run `docker-compose up --build` over in the API repo!

## Description

- This is a super simple form on a FE just to show the API working as expected, mainly because of time struggles. (Don't judge how naff the UI looks :'( )
- If I had more time I'd add proper validation to the inputs, but as of right now, to see it working you have to put in valid values. That work would include unit tests too of course
- I'd also show the returned data in a better way, textarea was the fastest thing to use that I could think of
- This app could do with better state handling too, mainly to allow for easier cross-input validations (like making sure the addresses inputted aren't the same)
- The error handling isn't great either, with more time I'd use react router to route to some simple error pages - probably with text that changes based off which error code was returned

