  function changeVocals (temp) {
    //code di sini
    var afterSplit = temp.split("");
    for(var i = 0; i < afterSplit.length; i++){
        switch(afterSplit[i]){
            case 'a' : afterSplit.splice(i,1,'b');
            break;
            case 'A' : afterSplit.splice(i,1,'B');
            break;
            case 'e' : afterSplit.splice(i,1,'f');
            break;
            case 'E' : afterSplit.splice(i,1,'F');
            break;
            case 'i' : afterSplit.splice(i,1,'j');
            break;
            case 'I' : afterSplit.splice(i,1,'J');
            break;
            case 'o' : afterSplit.splice(i,1,'p');
            break;
            case 'O' : afterSplit.splice(i,1,'P');
            break;
            case 'u' : afterSplit.splice(i,1,'v');
            break;
            case 'U' : afterSplit.splice(i,1,'V');
            break;
            default : 'wrong';
            break;
        }
    }
    afterSplit = afterSplit.join("");
    return afterSplit;
  }

  //console.log(changeVocals('Alexei'));
  
  function reverseWord (temp) {
    //code di sini
    var empty = '';
    for(var i = temp.length-1; i >= 0; i--){
        empty += temp[i];
    }
    return empty;
  }

  //console.log(reverseWord('Alexei'));
  
  function setLowerUpperCase (temp) {
    //code di sini
    var kalimatTukar = '';
    for (var i = 0; i < temp.length; i++) {
        kalimatTukar += temp[i] !== temp[i].toLowerCase() ? temp[i].toLowerCase() : temp[i].toUpperCase()
    }
    return kalimatTukar;
  }

  //console.log(setLowerUpperCase('Alexei'));
  
  function removeSpaces (temp) {
    //code di sini
    var empty = '';
    var arr = [];
    for(var i = 0; i < temp.length; i++){
        if(temp[i] !== ' '){
            empty += temp[i];
        }else{
            arr.push(empty);
            empty = '';
        }
        if(i === temp.length - 1){
            arr.push(empty);
        }
    }
    empty = '';
    for(var j = 0; j < arr.length; j++){
        empty += arr[j];
    }
    return empty;
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

//changeVocals('Sergei Dragunov');
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
