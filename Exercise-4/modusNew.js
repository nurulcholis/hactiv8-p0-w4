function modus(arr){
    var arr2 = [];
    var arr3 = [];
    var count = 0;
    for(var i = 0; i < arr.length; i++){
      var cek = false;
      for(var j = 0; j < arr2.length; j++){
        if(arr[i] === arr2[j]){
          cek = true;
        }
      }
      if(cek === false){
        arr2.push(arr[i]);
      }
    }
    for(var i = 0; i < arr2.length; i++){
      arr3.push([]);
      count = 0;
      for(var j = 0; j < arr.length; j++){
        if(arr2[i] === arr[j]){
          count++;
        }
      }
      arr3[i].push(arr2[i],count);
    }
    var temp = arr3[0][1];
    var modus = 0;
    for(var i = 1; i < arr3.length; i++){
      if(temp < arr3[i][1]){
        temp = arr3[i][1];
        modus = arr3[i][0];
      }else if(temp === arr3[i][1] && arr3[i][1] > 1){
        modus = arr3[0][0];
      }
    }
    if(modus === 0){
      return -1;
    }
    return modus;
  }
  
  // TEST CASES
    console.log(modus([10, 4, 5, 2, 4])); // 4
    console.log(modus([5, 10, 10, 6, 5])); // 5
    console.log(modus([10, 3, 1, 2, 5])); // -1
    console.log(modus([1, 2, 3, 3, 4, 5])); // 3
    console.log(modus([7, 7, 7, 7, 7, 7])); // -1
  
  