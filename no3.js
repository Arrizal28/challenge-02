function validateEmail(email) {
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexString = /^[A-Za-z]+$/;
    if (regex_pattern.test(email)) {
        return 'VALID'
    }else if(email == null){
      return "ERROR : Email can't be empty"
    }else if(regexString.test(email)){
        return 'ERROR : Email must contain @'
    }else if(typeof email === 'number'|| email instanceof Number){
        return 'ERROR : Email must contain letter'
    }else {
        return 'INVALID'
    }
  }
  
  console.log(validateEmail('apranata@binar.co.id'))
  console.log(validateEmail('apranata@binar.com'))
  console.log(validateEmail('apranata@binar'))
  console.log(validateEmail('apranata'))
  console.log(validateEmail(3322))
  console.log(validateEmail())