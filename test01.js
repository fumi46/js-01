var answer = prompt('数値を入力してください。');
if (answer > 0){
  alert('正の数');
} else if (answer < 0){
  alert('負の数');
} else {
  alert('数値を入力してくだいさい。');
}


var animals = ['パンダ','ライオン','キリン'];
var i = 0;

var answer = prompt('パンダ、ライオン、キリンのどれが１つ入力してくだいさい。');
if(answer == 'ライオン'){
    alert('ライオン');
} else {
while (i >= animals.length){
    break;
}
    alert('パンダ、ライオン、キリンのどれが１つ入力してくだいさい。');
    i++;
}


var animals2 = [{'name': 'パンダ', 'weight': '80kg'},{'name': 'ライオン', 'weight': '200kg'},{'name': 'キリン', 'weight': '300kg'}];
var answer = prompt('パンダとライオンとキリンのうちどの動物の体重が知りたいですか？');
switch(answer){
    case 'パンダ':
        alert('パンダの体重は80kgです。');
        break;
    case 'ライオン':
        alert('ライオンの体重は200kgです。');
        break;
    case 'キリン':
        alert('キリンの体重は300kgです。');
        break;
    default:
        alert('パンダとライオンとキリンのどれかを入力してくだいさい。');
}


function calc(r){return 3.14*r*r;}
var answer = prompt('面積を求めたい円の半径を入力してください。');
alert(calc(answer));
