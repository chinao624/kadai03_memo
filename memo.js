
$("main").fadeIn(1000);


// お誕生日セレクトボックス反復処理（年）
let str1 ="";
      for(let i=1995; i<2025; i++){
    str1 += `<option>${i}</option><br>`;
    }
$("#year").html(str1);
    
// お誕生日セレクトボックス反復処理（月）
    let str2 ="";
      for(let i=1; i<13; i++){
    str2 += `<option>${i}</option><br>`;
    }
$("#month").html(str2);

// おもさセレクトボックス反復処理

 let str3 ="";
 for(let i=0; i<60; i+=0.5){
    str3 +=`<option>${i+"Kg"}</option><br>`;
 }
$("#weight").html(str3);


//    カスタマイズ枠
// <!-- メモ帳のカラーを変更する -->
$("#color1").on("change",function(){
let color1 = $("#color1").val();
$("body").css("background-color",color1);     
});

$("#color2").on("change",function(){
let color2 = $("#color2").val();
$(".box").css("background-color",color2);
$("h1").css("color",color2);     
$("footer").css("background-color",color2);   
});

// ヘッダー画像を変更する
$("#dogs_img").on("change",function(){
let img = $("#dogs_img option:selected").val()
console.log(img);
if(img == "kot1"){
  console.log(img,"ifが通った")
  // ⇧「起きていることを可視化する！」
$("#header").attr("src","img/header1.jpg");
}else
if(img == "mame1"){
  console.log(img,"else ifが通った")
  $("#header").attr("src","img/mame1.jpg");
}else 
if(img == "kot2"){
  $("#header").attr("src","img/kot2.jpg");
}else
if(img == "mame2"){
   $("#header").attr("src","img/mame2.jpg");
}
});

//1.Save クリックイベント
// Objectを使って項目をひとまとまりに
let array = [];
$("#save").on("click", function(){
const data = {
A_name : $("#name") .val(),
B_breed : $("#breed").val(),
C_year : $("#year").val(),
D_month : $("#month").val(),
E_weight : $("#weight").val(),
F_doctor : $("#doctor").val(),
G_alergy : $("#alergy").val(),
}

// 配列に足していく（犬増えたら）
array.push(data); 
// console.dir(array);

// Objectの文字列のままローカルストレージに保存できるようにjson
const json = JSON.stringify(array);
localStorage.setItem("data" ,json);
alert("保存しました");
});

//2.clear クリックイベント
$("#clear").on("click", function(){
    const data = {
A_name : $("#name") .val(),
B_breed : $("#breed").val(),
C_year : $("#year").val(),
D_month : $("#month").val(),
E_weight : $("#weight").val(),
F_doctor : $("#doctor").val(),
G_alergy : $("#alergy").val(),
}
array.push(data); 
// console.dir(array);
// jsonで保存した文字列を消去
const json = JSON.stringify(array);　
localStorage.removeItem("data" ,json);

// 見えている画面のデータを初期値に
// $("#name").val(""); $("#breed").val("");
// $("#year").val(i=1995);$("#month").val(i=1);$("weight").val(i=0);
// ⇧全部指定するのがめんどくさかったのでやめ
location.reload();
});

//！！！要勉強／ ページ読み込み：json使うと読み込み方がわからない。。。

//         //3.ページ読み込み：保存データ取得表示
// if(localStorage.getItem("memo")){
//     const value =localStorage.getItem("memo");
//     $("#text_area").val(value);

// }



//ロード時に表示
//※こんなこともできる例
