// A
// BB
// CCC
// DDDD
// EEEEE
// =========
// String.fromCharCode(j + 65)

// 65	A uppercase a
// 97	a lowercase a
console.log(65); // 65
console.log(String.fromCharCode(249));

pat = "";
alpha=65;
for(var i = 1; i <=5; i++){
    for(var j = 1; j <= i; j++){
        pat = pat + String.fromCharCode(alpha);
    }
    console.log(pat);
    pat="";
    alpha++;
}