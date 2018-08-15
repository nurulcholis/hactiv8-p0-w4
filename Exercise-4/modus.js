function cariModus(arr) {
    // you can only write your code here!
    var result = [];
    var count = 0;
    // looping panjang datanya
    for(var i = 0; i < arr.length; i++){
        // looping panjang datanya lagi utk perbandingan
        for(var j = 0; j < arr.length; j++){
            // cek indeks dari i dan j, indeks yg sama tdk akan diproses
            if(i !== j){
                // cek nilai dari masing2 data
                // jika sama maka..
                if(arr[i] === arr[j]){
                    // buat variabel kondisi awal
                    // krn kita tdk tau sudah ada blm nilai di result
                    // dengan nilai yg di data arr
                    count++;
                    var cek = false;
                    // lakukan looping dari data result
                    for(var k = 0; k < result.length; k++){
                        // cek apakah nilai yg ada pd result sama dg nilai yg akan dimasukan
                        if(arr[i] === result[k]){
                            // jika iya ubah state cek menjadi true
                            // dan tdk melakukan apa2
                            // cuma naik lagi ke for buat nambah nilai k
                            cek = true;
                        }
                    }
                    // ini dilakukan saat nilai yg ada pd result tidak sama dg nilai yg akan dimasukan
                    // utk menghindari duplikat data
                    if(cek === false){
                        // push data ke result
                        result.push(arr[i]);
                    }
                }
            }
        }
    }
    if(result.length === 0 || count > 5){
        return -1;
    }else{
        for(var i = 0; i < result.length; i++){
            return result[i];
        }
    }
    // kembalikan nilai result
    //return result;
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1