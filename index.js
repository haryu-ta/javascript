//=========================変数宣言=========================
// letは再宣言不可
// varは再宣言可能
// constは再宣言、再代入不可

/*注意
   let,constは{}内でのローカル変数となる
   このため、以下のソースは問題にならない。
*/
let var1 = 'itamura';
//console.log(var1);

try{
    let var1 = 'itamura2';
    //console.log(var1);
    // このコメントアウトを外すとNG
    //let var1 = 'itamura2';
    //console.log(var1);
}catch(e){
    console.log(e);
}

//=========================アロー関数=========================
const allowfunc = (par1,par2) => {
    return par1 + par2;
}
//console.log(allowfunc(1,2));

// 従来型
//document.write('<script type="text/javascript" src="normalfunc.js"></script>');

// アロー関数型
//document.write('<script type="text/javascript" src="allowfunc.js"></script>');

//=========================Class構文=========================
//document.write('<script type="text/javascript" src="class.js"></script>');


//=========================分割代入========================
const horse = {
    name : 'ディープインパクト',
    country : 'JP'
};

const {name,country} = horse;

function loadfunc(){
    document.getElementById('horsename').innerHTML = name;
    document.getElementById('horsecountry').innerHTML = country;
};

/*
function parmfunc({val1,val2}){
    console.log(val1,val2);
};

parmfunc({val1: name , val2 : country});
*/
//=========================テンプレート文字列========================
/*
const names = 'itason';

console.log(`My Name is
    ${names}`);
*/

//=========================スプレッド演算子========================
//document.write('<script type="text/javascript" src="spreadCalcu.js"></script>');

//=========================繰り返し構文========================
/*
const rptarray = [100,200,300,400];
for(var index in rptarray){
    console.log(index);
    console.log(rptarray[index]);
    console.log('□■□■□■□■□■□■□■□■');
}

for (var value of rptarray){
    console.log(value);
}

*/

/*
const json = { name : '100' , country : '200'}

for(const key in json){
    console.log(json[key]);
}
*/

/* これはNG
for(const key of json){
    console.log(key);
}
*/

//=========================非同期処理========================
document.write('<script type="text/javascript" src="async.js"></script>');
