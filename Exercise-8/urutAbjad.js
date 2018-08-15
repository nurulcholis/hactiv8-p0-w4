function urutkanAbjad(str) {
    // you can only write your code here!
    var kamus = 'abcdefghijklmnopqrstuvwxyz';
    var ubah = str.split('');
    var arr = [];
    
    for(var i = 0; i < kamus.length; i++){
      for(var j = 0; j < ubah.length; j++){
        if(kamus[i] === ubah[j]){
            arr.push(ubah[j]);
        }
      }
    }
    return arr.join('');
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'