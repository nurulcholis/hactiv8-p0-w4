  function changeVocals (str) {
    //code di sini
    var kamus = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    var temp = '';
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < kamus.length; j++){
            if(str[i] === kamus[j]){
                temp += kamus[j+1];
            }
        }
    }
    return temp;
    
  }
  
  function reverseWord (str) {
    //code di sini
    var temp = '';
    for(var i = str.length-1; i >= 0; i--){
        temp += str[i];
    }
    return temp;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var kalimatTukar = '';
    for (var i = 0; i < str.length; i++) {
        kalimatTukar += str[i] !== str[i].toLowerCase() ? str[i].toLowerCase() : str[i].toUpperCase()
    }
    return kalimatTukar;
  }
  
  function removeSpaces (str) {
    //code di sini
    var temp = '';
    var arr = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            temp += str[i];
        }else{
            arr.push(temp);
            temp = '';
        }
        if(i === str.length - 1){
            arr.push(temp);
        }
    }
    temp = '';
    for(var j = 0; j < arr.length; j++){
        temp += arr[j];
    }
    return temp;
  }
  
  function passwordGenerator (name) {
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }else{
        name = changeVocals(name);
        name = reverseWord(name);
        name = setLowerUpperCase(name);
        name = removeSpaces(name);
        return name;
    }
  }

  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
