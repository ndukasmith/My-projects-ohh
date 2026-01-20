'use strict';

const letMeet = new Promise((resolve, reject) => {
  const came = true;
  if (came) {
    resolve("Hi, I'm here");
  } else {
    reject("Sorry, I will not come!");
  }
});

letMeet
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
