function shoppingTime(memberId, money) {
    // you can only write your code here!
    var product = [
        ['Sepatu Stacattu',1500000],
        ['Baju Zoro',500000],
        ['Baju H&N',250000],
        ['Sweater Uniklooh',175000],
        ['Casing Handphone',50000] 
    ];
    //var arr = [];
    if(money !== undefined && memberId !== undefined && memberId !== ''){
        var shopping = {};
        var total = 0;
        shopping.memberId = memberId;
        shopping.money = money;
        shopping.listPurchased = [];
        for(var i = 0; i < product.length; i++){
            if(money >= product[i][1]){
                shopping.listPurchased.push(product[i][0]);
                total += product[i][1];
            }
        }
        shopping.changeMoney = money - total;
        if(money < product[4][1]){
            return 'Maaf uang anda tidak cukup';
        }else{
            return shopping;
        }
    }else{
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';   
    }
  }
  
  // TEST CASES
  //console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  //console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  //console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  //console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja