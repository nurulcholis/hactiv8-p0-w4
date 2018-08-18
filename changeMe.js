function changeMe(arr) {
    // you can only write your code here!
    me = {};
    if(arr.length === 0){
        console.log('""');
    }
    var old = null;
    for(var i = 0; i < arr.length; i++){
        me.firstName = arr[i][0];
        me.lastName = arr[i][1];
        me.gender = arr[i][2];
        
        if(arr[i][3] === undefined){
            me.age = 'Invalid Birth Year';
        }else{
            old = 2018 - arr[i][3];
            me.age = old;
        }
        console.log((i+1)+ '. '+ arr[i][0] + ' ' + arr[i][1] + ':');
        console.log(me);
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""