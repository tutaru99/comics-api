# comics-api
```
Api for comics-web-app that fetches all the data for the vue front-end and displays it.
To start api - npm run away
```
```
To run mocha+chai unit tests - npm run test
```
```
Api for the comics-web-app repo front-end. Fetches and displays data.
Live ver. - https://api-comics.herokuapp.com/characters - single entry point example.
```
```
    --Both Private and Public keys must be accquired at - https://developer.marvel.com/documentation/getting_started
    --Heroku part is optional - it is being used for the continues integration through github actions (ci/cd)

    --Create .env file and add these dependencies (same keys from the front-end(comics-web-app repo))

HEROKU_API_KEY = 
HEROKU_APP_NAME = 
privateKey = 
publicKey = 
PORT = 3000
```