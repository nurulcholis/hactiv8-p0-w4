function totalDigitRekursif(angka) {
    // you can only write your code here!
    var str = angka.toString();
    if(str.length === 1){
        return angka;
    }else{
       var temp = Number(str[0]);
       str = str.slice(1);
       return temp + totalDigitRekursif(Number(str));
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5