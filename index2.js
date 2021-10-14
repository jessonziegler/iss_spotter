// index2.js

const { fetchMyIP } = require('./iss_promised');

fetchMyIP()
  .then(body => console.log(body));

  fetchMyIP()
  .then(fetchCoordsByIP)
  .then(body => console.log(body));

  // index2.js
const { nextISSTimesForMyLocation } = require('./iss_promised');

// see index.js for printPassTimes
// copy it from there, or better yet, moduralize and require it in both files

// Call
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })