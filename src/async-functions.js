const superagent = require('superagent')
const request = require('request')

function getTatooineResidents() {
  return superagent
      .get('https://swapi.co/api/planets/1/')
      .then(residents => {
        return Promise.resolve(residents.body.residents)
      })
      .catch(err => console.log(err))
  }

    

function promiseMeAString(string) {
  return new Promise((resolve, reject) => {
    if (string) {
      resolve('You kept the Promise!')
    }
    reject('You have failed me!')
  })

}

console.log(promiseMeAString('I promise'))


// getTatooineResidents()







module.exports = {
    getTatooineResidents,
    promiseMeAString,
  }