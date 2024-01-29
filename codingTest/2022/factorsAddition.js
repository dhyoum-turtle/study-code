/**
 *
 * 문제출처: https://programmers.co.kr/learn/courses/30/lessons/77884#
 * 코드 작성일: 2022년 초
 *
 */

function solution(left, right) {
  var answer = secondResult(left, right);
  return answer;
}

// 약수가 홀수인 경우는 그 수가 제곱수의 경우 밖에 없다. 를 알고한다면
function firstResult(left, right) {
  var result = 0;
  for (i = left; i <= right; i++) {
    Number.isInteger(Math.sqrt(i)) ? (result -= i) : (result += i);
  }
  return result;
}

// 모른다면
function secondResult(left, right) {
  var result = 0;
  var measureList = [];

  for (i = left; i <= right; i++) {
    for (j = 1; j <= i; j++) {
      if (i % j == 0) {
        measureList.push(j);
      }
    }
    measureList.length % 2 == 0 ? (result += i) : (result -= i);
    measureList = [];
  }
  return result;
}
