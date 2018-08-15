function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var arr = [];
    for(var i = 1; i < angka; i++){
        if(angka % i === 0){
            if(i === 1){
                arr.push([i,angka]);
            }else{
                
            }
        }
    }
    console.log(arr);
  }

  digitPerkalianMinimum(24)
  
  // TEST CASES
//   console.log(digitPerkalianMinimum(24)); // 2
//   console.log(digitPerkalianMinimum(90)); // 3
//   console.log(digitPerkalianMinimum(20)); // 2
//   console.log(digitPerkalianMinimum(179)); // 4
//   console.log(digitPerkalianMinimum(1)); // 