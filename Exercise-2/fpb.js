// cari faktor bilangan
function faktor(x){
    var list = [];
    for(var i = 1; i<= x; i++){
        if(x % i == 0){
            list.push(i);
        }
    }
    return list;
}

// cari data yg sama
function search(x,y){
    var list1 = faktor(x);
    var list2 = faktor(y);
    var temp = [];

    for(var i = 0; i < list1.length; i++){
        for(var j = 0; j < list2.length; j++){
            if(list1[i] == list2[j]){
                temp.push(list1[i]);
            }
        }
       
    }

    return temp;
}

// cari nilai terbesar
function biggest(arr){
    var big = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>big){
            big = arr[i];
        }
    }
    return big;
}

// main function
function fpb(x,y){
    return biggest(search(x,y));
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1