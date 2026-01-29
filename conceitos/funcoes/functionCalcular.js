function calcular(num1, num2, simb){
    switch(simb){
        case '+':
            return num1 + num2

        case '-':
            return num1 - num2

        case '*':
            return num1 * num2
        
        case '/':
            return num1 / num2

        default:
            return null
    }
}

console.log(calcular(3, 6, '+'))
console.log(calcular(17, 6, '-'))
console.log(calcular(4, 6, '*'))
console.log(calcular(36, 6, '/'))
console.log(calcular(3, 6, 'a'))