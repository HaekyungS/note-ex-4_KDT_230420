function exampleOne(first, second, dataType) {
  if (typeof (first) !== dataType && typeof (second) !== dataType) {
    return new Error(`매개변수 first, second는 모두 ${dataType} 타입이어야 합니다.`)
  } else {
    return true
  }
}// 데이터 타입이 아닐 경우, 에러를 반환하는 함수


function arrayLengthEven(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}// 배열의 길이가 짝수면 true 를, 홀수면 false 를 반환하는 함수

function isExampleTwo(first, second) {

  // 타입검사 실행하고 타입이 실패하면 에러발생이라 하셨는데,
  // typeof 로는 integer를 할 순 없다. 그래서 number로 작성함.

  if(exampleOne(first, second, 'number')){


  let booleanResult;

  // 두 매개변수를 비교하여 첫번째가 작으면 true~
  if (first < second) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }

  // 위에 booleanReault 가 불리언이 이면 booleanReault을 반환,
  // 아니면 에러 반환
  if (typeof (booleanResult) === 'boolean') {
    return booleanResult;
  } else {
    return new Error("조건식이 boolean이 아니어서 리턴 하지 못했습니다.")
  }}else{
    exampleOne(first, second, 'number')
  }

}//

let basicData = [4, 6, 23, 5, 94, 35, 44, 66]

function exampleThree(array, functionOne, functionTwo) {
  let arrayResult = [[null, null], [null, null], [null, null], [null, null]];

  // 매개변수 중 함수 두개는 타입이 함수여야 한다.
  if (typeof (functionOne) === 'function' && typeof (functionTwo) === 'function') {

    // 새로알게된 메서드. array.every() -> 배열의 모든 요소가 괄호안의 조건과 일치하면 true 를 반환.
    if (array.every(Number.isInteger)) {

      // 배열의 길이가 짝수라면
      if (arrayLengthEven(array)) {

        // 카운트라는 변수를 하나 만듦
        let count = 1;
        for (let i = 0; i < arrayResult.length; i++) {
          if (functionTwo(array[i * 2], array[count])) {
            arrayResult[i][0] = array[i * 2];
            arrayResult[i][1] = array[count];
            count += 2;
          } else {
            arrayResult[i][0] = array[count];
            arrayResult[i][1] = array[i * 2];
            count += 2;
          }
        }
        return arrayResult;
      } else {
        array.push(10);
        let count = 1;
        for (let i = 0; i < arrayResult.length; i++) {
          if (functionTwo(array[i * 2], array[count])) {
            arrayResult[i][0] = array[i * 2];
            arrayResult[i][1] = array[count];
            count += 2;
          } else {
            arrayResult[i][0] = array[count];
            arrayResult[i][1] = array[i * 2];
            count += 2;
          }
        }
        return arrayResult;
      }
    } else {
      return new Error('배열에 정수가 아닌 값이 있습니다.');
    }
  } else {
    return new Error('매개변수에 함수가 아닌 것이 있습니다. 본 함수의 두번째, 세번째 매개변수는 함수로 작성하여주세요.')
  }
}

console.log(exampleThree(basicData, exampleOne, isExampleTwo))

