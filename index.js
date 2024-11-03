function task1(){
    let firstInput = prompt("Enter first value: ")
    let secondInput = prompt("Enter second value: ")

    if(firstInput === secondInput){
        console.log("The input values are equal!")
    }
    else{
        console.log("The input values are not equal!")
    }
}

function task2(){
    let num1 = prompt("Enter the first value: ")
    let num2 = prompt("Enter the second value: ")
    let LEcomparison = (num1 == num2)
    let SIcomparison = (num1 !== num2)
    console.log("Loose Equality: "+LEcomparison)
    console.log("Strict Inequality: "+SIcomparison)
}

function task3(){
    let num1 = parseInt(prompt("Enter the first number: "))
    let num2 = parseInt(prompt("Enter the second number: "))
    num1 *= 2
    num2 /= 2
    let comparison = (num1 > num2)
    console.log(comparison)
}

function task4(){
    let num1 = parseInt(prompt("Enter the first number: "))
    let num2 = parseInt(prompt("Enter the second number: "))
    let comparison = (num1 >= num2)
    if(comparison == true){
        console.log("The first number is greater than or equal to the second number.")
    }else{
        console.log("The first number is less than the second number.")
    }
}

function task5(){
    let num1 = parseInt(prompt("Enter the first number: "))
    let num2 = parseInt(prompt("Enter the second number: "))
    let lessThanComparison = (num1 > num2)
    if (lessThanComparison == true) {
        console.log("The first number is less than the second number.")
    } else {
        console.log("The first number is greater than or equal to the second number.")
    }
}

function task5LessThanEqualComparison(){
    let num1 = parseInt(prompt("Enter the first number: "))
    let num2 = parseInt(prompt("Enter the second number: "))
    let result1 = (num1 + num2) * 5
    let result2 = num2 ** 2
    let check = (result1 <= result2)
    console.log(check)
}
