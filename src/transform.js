function groupAdultsByAgeRange(array) {
    const object = array.reduce((group, obj) => { 
        if (obj.age < 18) {
            return group
        } else if (obj.age >=18 && obj.age <=20) {
                group['20 and younger'].push(obj)
                return group
            
        } else if (obj.age >=21 && obj.age <=30) {
            group['21-30'].push(obj)
            return group
        } else if (obj.age >=31 && obj.age <=40) {
            group['31-40'].push(obj)
            return group
        } else if (obj.age >=41 && obj.age <=50) {
            group['41-50'].push(obj)
            return group
        } else if (obj.age >= 51) {
            group['51 and older'].push(obj)
            return group
        }
        return group    
    }, {
        '20 and younger': [],
        '21-30': [],
        '31-40': [],
        '41-50': [],
        '51 and older': []
    })
    return object
}
console.log(groupAdultsByAgeRange([{ name: "pete", age: 10 },
{ name: "dove", age: 17 },
{ name: "dave", age: 18 },
{ name: "hall", age: 19 },
{ name: "donn", age: 20 },
{ name: "trey", age: 21 },
{ name: "hann", age: 29 },
{ name: "chew", age: 30 },
{ name: "cloe", age: 31 },
{ name: "dart", age: 39 },
{ name: "this", age: 40 },
{ name: "dame", age: 41 },
{ name: "henk", age: 49 },
{ name: "anna", age: 50 },
{ name: "olga", age: 51 },
{ name: "bert", age: 52 },
{ name: "oldd", age: 120 },
]))
// console.log(groupAdultsByAgeRange([{ name: "pete", age: 10 },
// { name: "dove", age: 17 },]))
module.exports = {groupAdultsByAgeRange}
