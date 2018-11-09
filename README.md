# Diviner: Pull Tarot cards from the Rider-Waite deck

## Sample Code/MVP Featuers

* User can choose to pull an individual new card by clicking
* Card already pulled will not be pulled again
* Adds card to horizontal listing of cards which flexbox wraps
* Write-ups shown below card or to the side of the card or on hover in tooltip popup?
* URL encoded / bookmarkable result: `/reading/:layout(simple)/:shortCode1/:shortCode2,...?`
* Available card data:
  * https://github.com/ekelen/tarot-api/blob/master/data/card_data_v2.json
  * Card images from:
    - http://www.sacred-texts.com/tarot/pkt/img/wa10.jpg
    - http://rider-waite.tarotsmith.net/cards/21world.html
    - https://www.wikiwand.com/en/Rider-Waite_tarot_deck
## Implementation notes

* Boilerplate app created with create-react-app to keep it simple
* ES6 + standardJS in terms of language features and syntax to expect
* In this I'm hoping to demonstrate my fluency in constructing a fairly basic react application well
* Focus is on best-practice and cleanliness over complexity
* The next features I would add for the sake of the project and as a showcase for dev proficiecy and style:
  * react-navigation 4: I like it and it would make a great next thing to add to this stack to make the the URLs of a particular card pull/reading bookmarkable before adding any specific user auth stuff
  * Redux: nothing about this app currently needs a global state machine, but everything eventually does and I almost added it just to demonstrate my familiarity, but stopped short. I do work extensively with Redux and a Graphql API from our backend in my current work.
* It's been awhile since I've had time outside of my work projects to do a personal project and I hope to extend this one further. This is a much simpler project than anything I'm currently working on in my job.


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
