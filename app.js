
//beden Kitle İndexi
let kılo = Number(prompt("Kilonuzu Giriniz?(kg) :"));
let boy = Number(prompt("Boyunuzu Giriniz(m):"))

let sonuc = kılo / (boy * boy);

if (sonuc < 18.5) {
    alert("İdeal Kilonun Altındasınız");
} else if (sonuc >= 18.5 && sonuc <= 24) {
    alert("İdeal Kilonun AZ altındasınız");
} else if (sonuc >= 25 && sonuc <= 29.9) {
    alert("İdeal Aralıktasınız")
} else if (sonuc >= 30 && sonuc <= 39.9) {
    alert("İdeal Kilonun Üzerindesiniz");
} else if (sonuc >= 40) {
    alert("İdeal Kilonun Baya ÜZERİNDESİNİZ.");
}else{
    alert("M cinsinden veya KG cinsinden değer giriniz.")
}