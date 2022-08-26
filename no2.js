function checkTypeNumber(givenNumber){
    const isEven = /^-?\d*[02468]$/
    const isOdd = /^-?\d*[13579]$/
 
    if(isEven.test(givenNumber)){
     return 'GANJIL'
    }else if(typeof givenNumber === 'string'|| givenNumber instanceof String){
     return 'Error: invalid data type'
    }else if(isOdd.test(givenNumber)){
     return 'GENAP'
    }else if(givenNumber == null){
     return 'Error: Bro where is the parameter?'
    }else{
        return 'Error: invalid data type'
    }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber('3'))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())