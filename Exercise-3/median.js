// 1. urutkan data secara ascending
// 2. telusuri semua data dari 1 ke n
// 3. cek jika data.y ganjil proses dg n+1/2
// 4. jika datanya genap proses dg n/2
// 5. cetak data

function cariMedian(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr.length % 2 === 0){
            var before = Math.floor((arr.length-1)/2);
            var after = before + 1;
            return (arr[before]+arr[after])/2;
        }else{
            return arr[(arr.length-1)/2];
        }
    }
}

function ascending(arr){
    arr.sort(function(num1,num2){
        return num1 > num2;
    });
    return arr;
}


// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5