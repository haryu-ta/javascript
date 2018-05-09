function asyncFunc(num){
    return new Promise(function(resolve,reject){
        if( num == 1 ){
            setTimeout(function(){
                resolve(num * 2);
            },1000);
        }else{
            setTimeout(function(){
                reject(num * 3);
            },1000);
        }
        console.log(4);
    });
}

function successFunc(num){
    console.log(num);
}

function errorFunc(num){
    console.log(num);
}

asyncFunc(2)
    .then(successFunc,errorFunc);
