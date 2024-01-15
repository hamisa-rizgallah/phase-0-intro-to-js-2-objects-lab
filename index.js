// Write your solution in this file!
const employee = {
    name : "",
    streetAddress : "",
}
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};
    newObj[key]=value;
    return newObj;
}
const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Hamisa"
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}
const destructivelyNewEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Julias");

function deleteFromEmployeeByKey(obj, key){
    const newObjDelete = {...obj};
    delete newObjDelete[key];
    return newObjDelete;
}
const updatedDeleteKey = deleteFromEmployeeByKey(employee,"name")

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete employee.name;
    return employee;
}
const deletedDestructivelyEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name")

console.log(employee);
console.log(newEmployee);
console.log(destructivelyNewEmployee);
console.log(updatedDeleteKey);
console.log(deletedDestructivelyEmployee);