// Write your solution in this file!
var customerName = 'bob';
var bestCustomer = "not bob";
const leastFavoriteCustomer ="Oscar";

function upperCaseCustomerName(){
    let okumu = customerName.toUpperCase();
    return okumu;
}
console.log(upperCaseCustomerName());

function setBestCustomer(){
   return bestCustomer;
}
console.log(setBestCustomer());

function overwriteBestCustomer(){
 bestCustomer = "maybe bob";
}
console.log(overwriteBestCustomer())

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer  = 'Assignment to constant variable.'
    return leastFavoriteCustomer ;
} 
console.log(changeLeastFavoriteCustomer());