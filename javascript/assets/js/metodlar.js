// Metodlar Fonksiyonlar

// + metod yapısı var
/*
deger almayan deger döndürmeyen
deger alan deger döndürmeyen
deger almayan deger döndüren
deger alan deger döndüren

*/

function metod1(){ //deger almayan deger döndüren
    alert("metod1");
    var deger=prompt("İsim giriniz:"+deger);
    metod2(deger);
}
function metod2(item){ //deger alan deger döndüren
    alert("Gelen deger: "+item)
}
function metod3(){
    var value=5;

    return value;
}
function metod3Example(){
    var deger=metod3()*3;

    alert(deger);
}

function metod4(r){ // deger alan deger döndüren
const pi=3.14;

var result =pi*(r*r);

return result; // dışarıya deger döndürür

    
}

function metod4Example(){
var deger = prompt("r degerini giriniz: ");
alert ("sonuc: "+metod4(deger));

}