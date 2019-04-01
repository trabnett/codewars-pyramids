function pyramid(n){
    let spaces = " "
    let finalLine = "_"
    let result = ""
    if (n > 1) {
        result = result.concat(spaces.repeat(n - 1) + "/" + "\\\n")
        for (i = 1; i < n - 1; i++){
            result = result.concat(spaces.repeat(n - i - 1) + "/" + spaces.repeat(i * 2) + "\\\n") 
        }
        result = result.concat("/" + finalLine.repeat(n * 2 - 2) + "\\\n")
        return result
    } else {
        return '/\\\n'
    }
 
  }

  console.log(pyramid(5))