# Diviner: Pull Tarot cards from the Rider-Waite deck

**Try me now at: https://divinerly.herokuapp.com**

## Sample Code/MVP Featuers

* User can choose to pull an individual new card by clicking
* Card already pulled will not be pulled again
* Adds card to horizontal listing of cards which flexbox wraps
* Write-ups shown below card or to the side of the card
* Data credits (the Rider-Waite Tarot deck is Public Domain in the US):
  * Data from here: https://github.com/ekelen/tarot-api/blob/master/data/card_data_v2.json
  * Images currently directly linked from: http://www.sacred-texts.com/tarot/pkt/index.htm
## Implementation notes

* Boilerplate app created with create-react-app to keep it simple
* ES6 + standardJS in terms of language features and syntax to expect
* Focus is on best-practice and cleanliness over complexity, err'ing toward being coherent and explicit over novel or clever
* In this I'm hoping to demonstrate my fluency in constructing a fairly basic React application well, there are various opinions throughout the community about the best way to do things and this project is an expression of some of my (loosely held) own.
* The next features I would add for the sake of the project and as a showcase for dev proficiecy and style in the React stack:
  * react-navigation 4: I like it and it would make a great next thing to add to this stack to make the the URLs of a particular card pull/reading bookmarkable before adding any specific user auth stuff. I would start with a URL encoded / bookmarkable result such as: `/reading/:layout(simple)/:shortCode1/:shortCode2,...?`
  * Redux: nothing about this app currently needs a global state machine, but everything eventually does and I almost added it just to demonstrate my familiarity, but stopped short. I do work extensively with Redux and a Graphql API from our backend in my current work.
  * In terms of the actual product/UX I have a long list of things that would make it a lot better, including: 
    * Various UI/UX improvements
    * User can "pin" a card they are studying
    * Choose or customize a layout for card pulling
    * Alternate deck options with different rules (hence the `src/util/deck` abstractions)
* It's been awhile since I've had time outside of my work projects to do a personal project and I hope to extend this one further. This is a much simpler project than anything I'm currently working on in my job.

## Get your hands dirty

 1. Clone repo
 2. `npm install`
 3. Run tests (Jest): `yarn test` 
 3. Run it: `yarn start`

