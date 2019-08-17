function groupAdultsByAgeRange(array) {
    const object = array.reduce((group, obj) => { 
        // console.log(key)
        if (obj.age <= 18) {
            return group
        } 
    },{})
    // console.log(object)
    return object
}

console.log(groupAdultsByAgeRange([{ name: "pete", age: 10 },
{ name: "dove", age: 17 },]))

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