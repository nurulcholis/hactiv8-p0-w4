function digitPerkalianMinimum(angka) {
    var bagi;
    var arr = [];
    var  arrStr = '';
    var result = 0;
    
    for (var i = 1; i <= angka; i++) {
       bagi = angka / i;
       arrStr = i.toString() + bagi.toString();
      
      if (bagi % 1 === 0) {
        arr.push(arrStr);
        if (result === 0) {
          result = arrStr.length;
        } else {
          if (result > arrStr.length) {
            result = arrStr.length;
          }
        }
      }
    }
    return result;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  
  
  