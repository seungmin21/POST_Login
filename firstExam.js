// 1. id는 소문자와 대문자가 포함되지 않으면 동작하지 않게 처리

//a // 소문자
//A // 대문자

// 만약 소문자 그리고 대문자가 같이 있으면 참 없으면 거짓

if (["a-z"] && ["A-Z"]) {
  console.log("참")
} else {
  console.log("거짓")
}



for (let i = 'a'; i <= 'z'; i++) {
  console.log(i)
}