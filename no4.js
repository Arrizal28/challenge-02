function isValidPassword(pw){
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pw)){
        return true
     }else if (pw === 0){
        return 'password must contain at least one uppercase letter at least one lowercase letter at least one digiAt least  should be more than 8 character'
     }else if (pw == null){
        return "password can't be empty"
     }else {
        return false
     }
}

console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0))
console.log(isValidPassword())