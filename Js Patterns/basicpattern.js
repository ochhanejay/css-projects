/*
1
12      1
123     21
1234    321
12345   4321
================*/
/*
var pat = "";
for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= i; j++ ){
        pat = pat + j;
    }
    if(i > 1){
        for(var k = i-1; k >= 1; k--){
            pat = pat+k;
        }
    }
    console.log(pat);
    pat="";
}
*/
/*
pat = "";
var tp = 1;
for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= tp; j++){
        pat = pat+j;
    }
    console.log(pat);
    pat = "";
    tp = tp+2;
}
*/
/*
pat = "";
var tp = 0;
for(var i = 1; i <= 5; i++){
    tp = i;
    for(var j = 1; j <= (2*i-1); j++){
        if(j <= i) {
            pat = pat+j;
        } else { 
            tp--;
            pat = pat+(tp);
        }
    }
    console.log(pat);
    pat = "";
}
*/
/*
pat = "";
for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= (2*i-1); j++){
        if(j <= i) {
            pat = pat+j;
        } else { 
            pat = pat+((2*i-1)-j+1);
        }
    }
    console.log(pat);
    pat = "";
}
*/



