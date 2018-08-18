/*
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. 
Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar.
Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. 
Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.
*/

function hitungHuruf(kata) {
    // you can only write your code here!
    var kataSplit = kata.split(' ');
    //console.log(kataSplit); //membagi kalimat menjadi kata
    var banding = 0;
    var kataFinal = '';
    
    for(var i = 0; i < kataSplit.length; i ++) {
      //melooping kata
      //console.log('i for ' + kataSplit[i]); 
      kataFinal = kataSplit[i];
      var huruf = 0;
      for(var j = 0; j < kataSplit[i].length; j++) {
        //melooping huruf
        //console.log('j for ' + kataSplit[i][j]);
        var arrHuruf = kataFinal[j];
        //console.log(arrHuruf);
        for(var k = 0; k < kataFinal.length; k++) { 
          //melooping huruf yang sama
          //console.log('k for ' + kataSplit[i][k]);
          //console.log(kataFinal[k]);
          if((j !== k) && (arrHuruf === kataFinal[k])) { 
            //menentukan jumlah huruf yang sama
            huruf++;
            //console.log(huruf);
          }
        }
      }
      if(huruf > banding) { 
        //menentukan kata pertama yang diambil dari jumlah huruf yang sama
        banding = huruf;
        kataSplit = kataFinal;
      }
    }
    if (banding > 0) {
        return kataSplit;
    }
    else {
      return -1;
    }
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a developer passionate ')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau