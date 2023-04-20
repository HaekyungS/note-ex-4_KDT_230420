function exampleOne(first, second, dataType){
  if(typeof(first)!==dataType && typeof(second)!==dataType){
    return new Error(`매개변수 first, second는 모두 ${dataType} 타입이어야 합니다.`)
  }
}

function arrayLengthEven(array){
  if(array.length%2===0){
    return true;
  }else{
    return false;
  }
}

function isExampleTwo(first,second){
  exampleOne(first, second);

  let booleanResult;

  if(first < second){
    booleanResult = true;
  }else{
    booleanResult = false;
  }

  if(typeof(booleanResult)==='boolean'){
    return booleanResult;
  }else{
    return new Error("조건식이 boolean이 아니어서 리턴 하지 못했습니다.")
  }
}

let basicData = [4,6,23,5,94,35,44,66]

function exampleThree(array, functionOne, functionTwo){
  let arrayResult = [[null,null],[null,null],[null,null],[null,null]];

  return arrayResult;
}

console.log(exampleThree(basicData,exampleOne,isExampleTwo))