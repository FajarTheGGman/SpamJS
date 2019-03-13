//Jangan di recode gan gw cape bikin nya 
//Copyright© 2019 by Fajar Firdaus

//Module yang di butuhkan 
var req = require('request');
var cl = require('colors');
var pr = require('readline');
var ulang = 0;

//Sedikit hiasan :v
console.log(cl.rainbow("Spam call by Fajar Firdaus"));
console.log("")

console.log(cl.rainbow("[========================]"));
console.log(cl.red("Author : Fajar Firdaus"));
console.log(cl.red("FB : Fajar Firdaus / Ace.of.spades729"));
console.log(cl.red("YT : iTech7732"));
console.log(cl.red("IG : fajar_firdaus_7"));
console.log(cl.rainbow("[========================]"));

//Bikin interface prompt nya / readline nya
let asw = pr.createInterface({
    input : process.stdin,
    output : process.stdout
});

//Bikin Interface pertanyaan nya 
asw.question("Masukan Nomor : ", (nomor) => {
asw.question("Masukan Jumlah : ", (jumlah) => {

//Looping / pengulangan untuk memanggil function spam nya
while(ulang < `${jumlah}`){
ulang++;

//Buat delay nya biar kgk error :v
setTimeout(function(){

//Http request ke api spam :v
req("http://0x.nakocoders.org/rest-api/lain-nya/api.php?nomor=" + `${nomor}`, function(error,response,body){
js = JSON.parse(body)

//Tampilin output json nya ke console
console.log("Hasil : " + js['msg']);
}, 4000);
})
}
})
})
