const isNumberPositive = (num) => {
    if(num > 0){
        return true;
    }else {
        return false;
    }
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));

const convertDaysToAge = (age) => {
    return (Math.floor(age/365));
}

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));

const getLargestNumber = (x,y,z) => {
    if(x>y){
        if(x>z){
            return x;
        }
    }else if(y>z){
        return y;
    }else{
        return z;
    }
}