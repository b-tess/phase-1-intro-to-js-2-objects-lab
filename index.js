// Write your solution in this file!
const employee = {
    name: 'Alice',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    }
}

const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, value) => {
    obj[key] = value
    return obj
}

const deleteFromEmployeeByKey = function (obj, key) {
    const newObj = { ...obj }

    delete newObj[key]

    return newObj
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]

    return obj
}
