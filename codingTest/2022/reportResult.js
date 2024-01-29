/**
 *
 * 문제출처: https://programmers.co.kr/learn/courses/30/lessons/92334
 * 코드 작성일: 2022년 초
 *
 */

function solution(id_list, report, k) {
  var answer = [];
  answer = sendEmailCount(id_list, report, k);
  return answer;
}

// 1. report 중복 제거
function deleteOverlap(report) {
  var deduplicationReport = [];
  report.map((value) => {
    !deduplicationReport.includes(value) && deduplicationReport.push(value);
  });
  return deduplicationReport;
}

// 2. 정지되는 유저 : id_list 별로 count + k값 자르기
function countDeclaration(id_list, report, k) {
  var report = deleteOverlap(report);
  var blockedUserList = [];

  id_list.map((i) => {
    var count = 0;
    report.map((j) => {
      i.includes(j.split(" ")[1]) && count++;
    });
    count >= k && blockedUserList.push(i);
  });

  return blockedUserList;
}

// 3. 신고자 기준 소팅
function sendEmailCount(id_list, report, k) {
  var blockedUserList = countDeclaration(id_list, report, k);
  var sendEmailCountList = [];

  id_list.map((i) => {
    var count = 0;
    report.map((j) => {
      i == j.split(" ")[0] &&
        blockedUserList.includes(j.split(" ")[1]) &&
        count++;
    });
    sendEmailCountList.push(count);
  });
  return sendEmailCountList;
}
