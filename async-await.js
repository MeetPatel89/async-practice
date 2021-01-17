function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information ${response}`)
    })
}

console.log(makeRequest('Google'));
makeRequest('NotGoogle')
    .then(message => console.log(message))
    .catch(message => console.log(message))
console.log(processRequest('RandomWillResolve'));
console.log(processRequest('ThisAlsoShallResolve'))