# Memoiro

NOTE: This is a quick weekend hack that I put together to help my daughter with her school project. There were several technical and non-functional constraints that influenced the somewhat eccentric design of this app. Without doubt, this could be improved with a bit more time and effort.

Memoiro is a visual memory experiment that tries to test the following hypothesis: does color have an effect on short-term memory recall? It asks test subjects to play a repeated game. The game displays several highlighted cells on a square grid for several seconds, and then asks the test subject to recall which cells were highlighted. Several experiment variables, such as the size of the grid, the number of highlighted cells, the color of the highlight, and the duration for which the highlighted cells are displayed, are varied during the trial for each test subject.

## Design

Memoiro is has a server and client, both of which are served via Google Apps Script. 

### Server

The server is written in TypeScript, compiled using Parcel, and deployed using clasp. The experiment results are stored as rows in a Google Sheet. The server generates the random data for each trial, which is then retrieved by the client.

### Client

The client is written in JavaScript, HTML, and SCSS, compiled using Parcel, and deployed using clasp. The client retrieves the random trial data from the server and renders it as a repeated game. The client uses Handlebars as its template language. The client is written as a very simplified custom state machine.

## Critique and future work

To be honest, it's a bit thrown together, but there are some interesting design ideas that could be further developed.

- I have a lot of experience with React and Angular, but both seemed a bit foreboding to integrate into Google Apps Script with not much time available. I chose Parcel for bundling because it was quick, but I haven't looked into whether React can be usually adapted to Parcel or if create-react-app could be wrenched to work with Google Apps Script.
- I coded up a quick and dirty state machine for the repeated game, but it would clearly benefit from using an existing statecharts library. One of the challenges I faced and never resolved to my satisfaction was integrating a class-based game class with a prototypal-based state machine implementation. I end up doing a lot of function binding to make it work.
- I never quite resolved what terminology should be applied throughout the codebase. Experiment or trial? Trial or sample? Board or grid? Cell or square? 
- I would liked to break up the monolith of `client/index.html` and perhaps figure out the best way to add client-side modules, most likely with Parcel, (rather than using CDN to host things like Handlebars).