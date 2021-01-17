function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === 'Google') {
      resolve('Google says hi');
    } else {
      reject('We can only talk to Google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra Information + ${response}`);
  });
}

/*

makeRequest('Facebook')
  .then((res) => {
    console.log(res);
    return processRequest(res);
  })
  .then((processRes) => {
    console.log(processRes);
  }).catch(err => {
      console.log(err)
  })

*/

async function doWork() {
  try {
    const response = await makeRequest('Google');
    console.log(response);
    console.log('Response received');
    const processResponse = await processRequest(response);
    console.log(processResponse);
  } catch (e) {
    console.log(e);
  }
}

function notAsyncWork() {
  const response = makeRequest('Google');
  console.log(response);
  console.log('Response received');
  const processResponse = processRequest(response);
  console.log(processResponse);
}

 async function f() {
  let promise = new Promise((res, rej) => {
    setTimeout(() => res('Done'), 2000);
  });

  let result = await promise;
  console.log(result);
  console.log('This will log last!')
}

f();
console.log('Asynchronous code example');
