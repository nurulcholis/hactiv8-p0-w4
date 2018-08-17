var proxitiaJob = [
    { 
      name: 'Ksatria',
      weapon: [
        'pedang',
        'tombak'
      ]
    },
    {
      name: 'Tabid',
      weapon: [
        'gada'
      ]
    },
    {
      name: 'Penyihir',
      weapon: [
        'tongkat'
      ]
    }
  ];
  
  
  function inGame(name, weapon, alat){
    for(var i = 0; i < proxitiaJob.length; i++){
      for(var j = 0; j < proxitiaJob[i].weapon.length; j++){
        if(name === ''){
          return 'Isi nama kamu';
        }else if(weapon !== proxitiaJob[i].name){
          return 'Silahkan pilih salah satu dari job ' + proxitiaJob[0].name + ', ' + proxitiaJob[1].name + ', ' + proxitiaJob[2].name;
        }else if(weapon === proxitiaJob[i].name || alat === proxitiaJob[i].weapon[j]){
          return 'Selamat datang ' + name + ' kamu login sebagai ' + weapon;
        }else if(alat !== proxitiaJob[i].weapon[j]){
          return weapon + ' ' + name + ' kamu tidak dapat menggunakan '+ alat + ' sebagai senjatamu';
        }else if(alat === proxitiaJob[i].weapon[j]){
          return weapon + ' ' + name + ' kamu menggunakan ' + alat +' sebagai senjatamu';
        }
      }
    }
  }
   
    // Your code hereproxitiaJob[0].name
    // for(var i = 0; i < proxitiaJob.length; i++){
    //   console.log(i+1+'. Name : ' + proxitiaJob[i].name);
    //   for(var j = 0; j < proxitiaJob[i].weapon.length; j++){
    //     console.log('- Weapon : ' + proxitiaJob[i].weapon[j]);
    //   }
    // }
  
  
  
  console.log(inGame('Yoki','Ksatria','tombak'));
  //inGame('Yoki', 'Ksatria', 'tongkat');

  
  /*
  
  cek jika nama empty string tampilkan 
  
    'Silahkan isi nama kamu'
  
  
  
  cek jika job tidak sesuai option tampilkan 
  
    'Silahkan pilih salah satu dari job {Ksatria}, {Tabid}, {Penyihir}'
  
  jika job sesuai option tampilkan pesan
  
    'Selamat datang {nama} kamu login sebagai {job}'
  
    
  
  cek jika weapon tidak sesuai job maka tampilkan
  
    '{job} {nama} kamu tidak dapat menggunakan {weapon} sebagai senjatamu'
  
  jika weapon sesuai maka tampilkan
  
    '{job} {nama} kamu menggunakan {weapon} sebagai senjatamu'
  
  */
  
  