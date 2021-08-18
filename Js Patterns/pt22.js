        //    1
        //    2 2
        //    3 3 3
        //    4 4 4 4
        //    5 5 5 5 5
        //    4 4 4 4
        //    3 3 3
        //    2 2
        //    1
var stringPrint = "";
var num = 1;
for(var i = 1; i <= 9; i++){
    for(var j = 1; j <= num; j++){
        if(i <= 5){
            stringPrint = stringPrint + i + " ";
        } else {
            stringPrint = stringPrint + num + " ";
        }
    }
    if(i < 5){
        num++;
    } else {
        num--;
    }
    console.log(stringPrint);
    stringPrint = "";
}



