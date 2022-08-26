function changeWord(selectedText,changeText,text){
    let result = ''
    
    if(text === kalimat1){
        result = kalimat1.replace(selectedText,changeText)
        return result
    }else{
        result = kalimat2.replace(selectedText,changeText)
        return result
    }
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggabarkan besarnya cintaku padamu'

console.log(changeWord('mencintai','membenci',kalimat1))
console.log(changeWord('bromo','semeru',kalimat2))