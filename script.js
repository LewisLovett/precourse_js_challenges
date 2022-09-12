const isNumberPositive = (num) => {
    if(num > 0){
        return true;
    }else {
        return false;
    }
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));