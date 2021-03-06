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

module.exports = {groupAdultsByAgeRange}
