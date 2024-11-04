//#1
    let num1 = prompt("Enter first value: ")
    let num2 = prompt("Enter second value: ")

    if(num1 === num2){
        console.log("The input values are equal!")
    }
    else{
        console.log("The input values are not equal!")
    }

//#2
    num1 = prompt("Enter the first value: ")
    num2 = prompt("Enter the second value: ")
    let LEcomparison = (num1 == num2)
    let SIcomparison = (num1 !== num2)
    console.log("Loose Equality: "+LEcomparison)
    console.log("Strict Inequality: "+SIcomparison)


//#3
    num1 = parseInt(prompt("Enter the first number: "))
    num2 = parseInt(prompt("Enter the second number: "))
    num1 *= 2
    num2 /= 2
    let comparison = (num1 > num2)
    if(comparison == true){
        console.log("The first number is greater than the second number.")
    }else{
        console.log("The first number is less than the second number.")
    }

//#4
    num1 = parseInt(prompt("Enter the first number: "))
    num2 = parseInt(prompt("Enter the second number: "))
    comparison = (num1 >= num2)
    if(comparison == true){
        console.log("The first number is greater than or equal to the second number.")
    }else{
        console.log("The first number is less than the second number.")
    }

//#5
    num1 = parseInt(prompt("Enter the first number: "))
    num2 = parseInt(prompt("Enter the second number: "))
    let lessThanComparison = (num1 < num2)
    if (lessThanComparison == true) {
        console.log("The first number is less than the second number.")
    } else {
        console.log("The first number is greater than or equal to the second number.")
    }

//#5
    num1 = parseInt(prompt("Enter the first number: "))
    num2 = parseInt(prompt("Enter the second number: "))
    let result1 = (num1 + num2) * 5
    let result2 = num2 ** 2
    let check = (result1 <= result2)
    if (check == true) {
        console.log("Result 1 is less than or equal to result2.")
    }else{
        console.log("Result 1 is greater than result2.")
    }