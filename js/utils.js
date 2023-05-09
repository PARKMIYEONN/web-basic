//return X, parameter X
function hi(){
    // alert("Hi!!!!!!!!!!!!!");
    console.log("Hi!!!!!!!!!!!!!!");
    console.log();
}

//로그가 출력해 주는 것
function sum(x, y){
    let result = x + y;
    console.log(result);
}

//콘솔창 자체에서 결과가 나오는 것
function total(x, y){
    return x + y;
}

function name(){
    let y=prompt("이름");
    while(y === null || y === ""){
        alert("입력해주세요");
        y=prompt("이름");
        
    }
        console.log(y);
        alert(y+"님 안녕하세요");
    
}