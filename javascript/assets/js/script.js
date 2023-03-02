function hesapla(){
    var sayi1=Number(document.getElementById("sayi1").value);
    var sayi2= Number(document.getElementById("sayi2").value);

    var oprt=document.getElementById("islem").value;

   /* if (oprt=="+") {
        sonuc=sayi1 + sayi2;
        document.getElementById("islem").value;
    }
    else if (oprt=="-") {
        sonuc=sayi1-sayi2;
        document.getElementById("islem").value;
        
    }
    else if (oprt=="*") {
        sonuc=sayi1*sayi2;
        document.getElementById("islem").value;
        
    }
    else if (oprt=="/") {
        sonuc=sayi1/sayi2;
        document.getElementById("islem").value;
        
    }
    else{
        document.getElementById("sonuc").innerText="Seçilen İşlem geçersiz"
    }
*/
   // var sonuc= Number(sayi1)+ Number(sayi2);

   switch (oprt) {
    case value:
        
        break;
   
    default:
        break;
   }

    document.getElementById("sonuc").innerText= "Toplama Sonuç= "+sonuc;
}

function notOrtalaması(){
    var vize= Number(document.getElementById("vize").value);
    var final= Number(document.getElementById("final").value);

    var ortalama=(vize*0.4) + (final*0.6);

    //not<45 kaldı
    //not<65 orta
    //not<85 iyi
    //not>85 süper
var sonuc;
    if(ortalama<45){
sonuc="Kaldı. Not: "+ ortalama;
    }
    else if(ortalama<65) 
    sonuc="Orta. Not: "+ortalama;
    else if(ortalama<85) 
    sonuc="İyi. Not: "+ortalama;
    else if(ortalama>=85) 
    sonuc="Süper. Not: "+ortalama;

    document.getElementById("notsonuc").innerText=sonuc;
}

// karar yapıları
// if else 


//DÖNGÜLER 

// For - foreach - while - do while
// var deger="";

// for(var i=0; i<10; i++){
//     deger+=" JavaScript";

// }
// alert(deger);

function fHesaplama(){
var deger= Number(document.getElementById("value").value);
var sonuc=1;
for (let index = 1; index <= deger; index++) {
    sonuc*=index;
    
}
alert(sonuc);
}

function whileLoop(){
    var i=0;
    var deger="";
    wwhile(i<10);{
        deger+="Merhaba";
        i++;
    }
alert(deger);
}

function teksayilar(){
    var sayi=15;
    var deger="";

    for (var i = 1; i <= sayi; i++) {
if (i%2==0) 
    continue; // sart saglandıgında continue codu oldugu yerden keser ve yukarı çıkar
if (i==13)
break; // sart sağlandıgında döngü devam etmez ve sonlanır
    deger+=i+ " ";

        
    }
    alert(deger);
}

function whileExample(){
var sayi1=5;
var sayi2=10;


var deger= "";

while(sonuc(sayi1, sayi2)){// true oldugunda sonsuz döngü olacak
    
deger+="Tuba";
    sayi1 ++; // sayi arttıgında sayi1  sayi2 den yüksek olacağı için sonuç false olacak döngü bitecek
}
alert(deger);
}

function sonuc(value1, value2){
var result= value1<value2;
return result;
}

function hesapla(){
    
    var boy= Number(document.getElementById("boy").value)/100;
    var kilo=Number(document.getElementById("kilo").value);
    var cinsiyet=document.getElementById("cinsiyet").value;

    var endex= kilo/(boy*boy);

    var result;

    switch(cinsiyet){
        case "Kadın":
            endex=endex*1.1;
            break;
    }

    if(endex<18.5){
        result="Zayıf. Endex= " +endex;
    }
    else if(endex<24.9){
        result="Normal. Endex= "+endex;
    }
    else if(endex<29.9){
        result="Obez. Endex= "+endex;
    }
    else if(endex<=39.9){
        result="Obez. Endex= "+endex;
    }
    else if(endex>39.9){
        result="Morbid Obez.. Endex= "+endex;
    }

   

}

function doWhileExample(){
    var i=5;
    var deger="";

    do{
deger+=" Erhan";
i++;
    }
    while(i<6)

    alert(deger);
}

promp

function prompToplama(){
    var sayi1=prompt("sayi 1 Giriniz");
    var sayi2=prompt("sayi 2 Giriniz");

    var sonuc= Number(sayi1)+ Number(sayi2);

    alert(sonuc);
}
// DİZİLER - array

var dersler= new Array("Matematik", "Türkçe", "Fizik", "Kimya" );

// alert (dersler[0]); //0. indexteki değeri yazdırır.
// alert(dersler); //Bütün dizeyi yazar
// alert(ders.length);

dersler.push("Teknik resim");
dersler.push(25);// Dizinin sonuna yeni eleman ekler

dersler.pop(); //dizinin son elemanını siler

dersler.unshift("Fizik"); // Secilen elemanı başa alır. kopyasını
dersler.unshift(dersler[2]); 

dersler.splice(2, 1);//Kacıncı diziden başlayacak kaçtane silecek


dersler.splice(3,0,"Fatih");

console.log(dersler);
