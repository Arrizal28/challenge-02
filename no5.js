function getSplitName (personName){
  let nstr = personName.toString()
    let names = nstr.split(' ');
    const n = /^[0-9]*$/
    if (names.length == 3) {
      return [{firstname: names[0], middlenames: names[1], lastname: names[2]}];
    }else if (names.length == 2) {
        return [{firstname: names[0], middlenames: null, lastname: names[names.length - 1]}];
    }else if(n.test(names) == true){
      return 'ERROR : enter the correct name'
    }else if (names.length == 1) {
      return [{firstname: names[0], middlenames: null, lastname: null}];
    }else if(names.length > 3){
      return 'Error: this function is only for 3 characters name'
    }else {
        return 'ERROR : enter the correct name'
    }
}

console.log(getSplitName('Aldi Daniela Pranata'))
console.log(getSplitName('Dwi Kuncoro'))
console.log(getSplitName('Aurora'))
console.log(getSplitName('Aurora Aureliya Sukma Darma'))
console.log(getSplitName(0))