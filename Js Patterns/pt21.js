// Eg:1
var printstring = "";
var temp = 5;
for(var row = 1;row <= 5; row++){
    for(var tp=1; tp < temp; tp++){
        printstring = printstring + " ";
    }
    for(var col = 1; col <= row; col++){
        if(col == 1) {
            printstring = printstring +" "+ 1;
        }
        else if(col == row) {
            printstring = printstring +" "+ 1;
        } else {
            printstring = printstring + " "+(row-1);
        }
    }
    console.log(printstring);
    printstring = "";
    temp--;
}

//Eg2:
/*
var printstring = "";
var temp = 5;
for(var row = 1;row <= 5; row++){
    for(var tp=(5-1); tp >= row; tp--){
        printstring = printstring + " ";
    }
    for(var col = 1; col <= row; col++){
        if(col == 1) {
            printstring = printstring +" "+ 1;
        }
        else if(col == row) {
            printstring = printstring +" "+ 1;
        } else {
            printstring = printstring + " "+(row-1);
        }
    }
    console.log(printstring);
    printstring = "";
    temp--;
}
*/