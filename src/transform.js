function groupAdultsByAgeRange(array) {
    const object = array.reduce((group, obj) => { 
        if (obj.age <= 18) {
            return group
        } else if (obj.age >=31 && obj.age <=40) {
            console.log(obj)
            console.log(group['31-40'])
            group['31-40'].push(obj)
            console.log(group['31-40'])
            return group
        } else if (obj.age >= 51) {
            console.log(obj)
            console.log(group['51 and older'])
            group['51 and older'].push(obj)
            console.log(group['51 and older'])
            return group
        }
        return group    
    }, {
        '31-40': [],
        '51 and older': []
    })
    console.log(object)
    return object
}
console.log(groupAdultsByAgeRange([{name: "Anna", age: 31}, {name: "John", age: 32}, {name: "Hank", age: 60}]))
// console.log(groupAdultsByAgeRange([{ name: "pete", age: 10 },
// { name: "dove", age: 17 },]))

module.exports = {groupAdultsByAgeRange}
// function groupBy(objectArray, property) {
//     return objectArray.reduce(function (acc, obj) {
//       var key = obj[property];
//       if (!acc[key]) {
//         acc[key] = [];
//       }
//       acc[key].push(obj);
//       return acc;
//     }, {});