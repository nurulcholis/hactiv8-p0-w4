function checkAB(num) {
    // you can only write your code here!
    var temp = '';
    var valA = 0;
    var valB = 0;
    var gap = 0;
    var distance = 0;

    temp = num.split(" ");
    temp = temp.join("");
   
    for(var i = 0; i < temp.length; i++){
        if(temp[i] === 'a'){
            valA = i;
        }
    }

    for(var i = 0; i < temp.length; i++){
        if(temp[i] === 'b'){
            valB = i;
            gap = Math.abs(valA - valB);
            if(distance < gap){
                distance = gap;
            }
        }
        
    }
    if(distance === 3){
        return true;
    }else{
        return false;
    }
  }
  
  // TEST CASES
    console.log(checkAB('lane borrowed')); // true
    console.log(checkAB('i am sick')); // false
    console.log(checkAB('you are boring')); // true
    console.log(checkAB('barbarian')); // true
    console.log(checkAB('bacon and meat')); // false