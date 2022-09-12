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
        }else{
            return z;
        }

    }else if(y>z){
        return y;
        
    }else{
        return z;
    }
}

console.log(getLargestNumber(2,1,4));
console.log(getLargestNumber(6,2,3));

const getLastName = (names) =>{
    return names[names.length - 1];
} 

console.log(getLastName(['Charlie', 'Rob', 'Andy']));
console.log(getLastName(['Ash', 'Stu']));

const allNumbersPositive = (numbers) =>{
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i]< 0){
            return false;
        }
    }
    return true; 

}

console.log(allNumbersPositive([2,4,5]));
console.log(allNumbersPositive([-5,4,6]));