/*
==================================
Array Mastery: Second Smallest
==================================
Nama:________
[INSTRUKSI]
Function secondSmallest akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info test case, bukan harus divalidasi/dicek).
secondSmallest akan mengembalikan angka yang kedua terkecil dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 2
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method Math.max, Math.min, .filter, atau .reduce!
- Dilarang menggunakan .sort!
*/

function secondSmallest(arr){
    var indexAwal = arr[0];
    var index = 0;
    for(var i = 1; i < arr.length;i++){
        if(indexAwal > arr[i]){
            indexAwal = arr[i];
            index = i;
        }
    }
    // delete nilai terkecil pertama
    // parameter 1 utk posisi yg akan dihapus
    // parameter 2 utk mau dihapus berapa
    arr.splice(index,1);
    indexAwal = arr[0];
    for(var j = 0; j < arr.length; j++){
        if(indexAwal > arr[j]){
            indexAwal = arr[j];
        }
    }
    return indexAwal;
}
  
// TEST CASES
console.log(secondSmallest([5, 2, 1, 4])); // 2
console.log(secondSmallest([999, 5, 0, 1, 4, 998])); // 1
console.log(secondSmallest([15, 32, 11, 14])); // 14
console.log(secondSmallest([5, 4, 3, 2, 1, 0])); // 1
console.log(secondSmallest([123, 321, 143, 313])); // 143