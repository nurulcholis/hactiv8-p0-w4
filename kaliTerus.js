function kaliTerusRekursif(angka){
    if(angka.toString().length === 1){
        return angka;
    }else{
        var angka1 = Math.floor(angka / 10);
        var angka2 = angka % 10;
        var hasil = kaliTerusRekursif(angka1);
        return kaliTerusRekursif(angka2 * hasil);
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6