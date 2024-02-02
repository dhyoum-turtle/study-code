시간복잡도
========

> 최초 작성일 : 2024.02.01   
기술스택 : -
> 

면접 준비와 코딩 테스트 준비를 하며 이것저것 찾아보던 날, 코딩 테스트를 할 때 문제풀이에서 끝내지 말고 시간복잡도 계산을 하는 것도 좋다는 글이 있었다.

⛏️ 자료구조와 함께 따라오는 이 시간복잡도는 무엇이며, 그 중 하나인 빅오표기법은 무엇인지 파보았다. 

**시간 복잡도**
---

시간복잡도란, 문제를 해결하는데 걸리는 시간과 입력의 함수 관계를 가리킨다. 

알고리즘에 적용한다면, 컴퓨터가 해당 함수가 작동하는데 걸리는 시간을 정량화 하는 것이다. 

즉, 자신이 짠 코드가 입출력에 따라 얼마나 오래걸리는 지를 단순히 ‘이건 오래걸립니다.’ 라고 할 수 없어서 수학적으로 표현하게 되는 것이다.

시간복잡도를 표현할 때는 크게 3가지의 표기법을 사용한다.

- Big-O 표기법 : 최악(worst)의 경우를 표현
- Big-Ω 표기법 : 최상(best)의 경우를 표현
- Big-θ 표기법 : Big-O 표기법과 Big-Ω 표기법의 중간

**빅오(Big-O)표기법**
---

3가지 표기법 중 가장 대중적으로 쓰이며, 최악의 실행 시간을 표기한다. 함수의 극한처럼 입력값이 무한대로 향할 때 알고리즘의 실행 시간을 n으로 표기할 수 있다. 

이때 ‘최악’이란 워딩 때문에 다소 부정적으로 생각될 지도 모른다. 그러나 ‘최악’이 아닌 ‘최대’라는 단어로 치환해서 생각하면 이해가 빨리된다. ‘이 알고리즘은 실행하는데 **최소 0.001초** 걸립니다.’ 보단 ‘이 알고리즘은 실행하는데 **최대 1초**가 걸립니다.’ 가 더 의미있는 지표인 것 처럼 말이다.

빅오표기법의 특징으론 2가지가 있다.

1. 오로지 최고차항만 생각한다.
2. 계수나 상수는 무시한다.

최악의 실행 시간을 보기 때문에 결과에 영향을 거의 미치지 않는 사소한 인자(계수or상수 등)들은 무시하게 된다.

**효율성 순서**

<img src="https://github.com/dhyoum-turtle/study-code/assets/125673596/730d7089-6b9a-441e-99b2-a9f0b5c9bc3a" width="400" />   

###### 출처: [위키피디아](https://en.wikipedia.org/wiki/Time_complexity)

```jsx
O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)
```

당연하게도 상수함수가 가장 효율이 좋고, 지수함수가 가장 효율이 나쁘다. 

**빅오표기법 계산 예시**
---

1. 본인 코드에서 컴퓨터가 연산을 수행해야하는 부분이 총 몇 번 있는지 정리한다. 
2. 정리된 식에서 상수와 계수를 제거한다.
3. 제거된 식에서 최고차항만 남긴다.

#### 예시1) 

```jsx
for (var i = 0; i < array.length; i++){
...
}
```

```jsx
array.length = 1 일 때 → 1번 실행

array.length = 2 일 때 → 2번 실행

array.length = 3 일 때 → 3번 실행

...

array.length = n 일 때 → n번 실행
```

즉, `array.length` 라는 변수에 따라 해당 함수는 무조건 `array.length` 번을 실행하게 된다. 해당 함수를 식으로 정리하다면 `n`이 될 것이다.

해당 식엔 제거할 상수와 계수가 없으므로 빅오표기법으로 표현하면 시간복잡도는 `O(n)`이다.

#### 예시2)

```jsx
for (var i = 0; i < array.length; i++){
    for (var j = 0; j < array.length; j++){
        ...
    }
}
```

```jsx
array.length = 1 일 때 → 1번 실행 

array.length = 2 일 때 → 4번 실행

array.length = 3 일 때 → 9번 실행

...

array.length = n 일 때 → n^2번 실행
```

즉, `array.length` 라는 변수에 따라 해당 함수는 무조건 `array.length^2` 번을 실행하게 된다. 해당 함수를 식으로 정리하다면 `n^2`이 될 것이다.

해당 식엔 제거할 상수와 계수가 없으므로 빅오표기법으로 표현하면 시간복잡도는 `O(n^2)`이다.

#### 예시3)

```jsx
for (var i = 0; i < array.length; i++){
...
}

for (var i = 0; i < array.length; i++){
    for (var j = 0; j < array.length; j++){
        ...
    }
}
```

```jsx
array.length = 1 일 때 → 1+1번 실행 

array.length = 2 일 때 → 2+4번 실행

array.length = 3 일 때 → 3+9번 실행

...

array.length = n 일 때 → n+n^2번 실행
```

즉, `array.length` 라는 변수에 따라 해당 함수는 무조건 `array.length + array.length^2` 번을 실행하게 된다. 해당 함수를 식으로 정리하다면 `n + n^2`이 될 것이다.

해당 식엔 제거할 상수와 계수가 없지만, 최고차항만 남겨야 하므로 빅오표기법으로 표현하면 시간복잡도는 `O(n^2)`이다.

**기타**
---

- map, foreach등 고차함수들도 for문과 같은 O(n)의 복잡도를 갖지만 개개인의 실행속도는 약간의 차이가 있다.
- 자료구조 및 탐색 알고리즘이나 정렬 알고리즘은 이미 시간복잡도가 정리된 게 많다.

**참고자료**
---

- [시간복잡도란](https://ko.wikipedia.org/wiki/%EC%8B%9C%EA%B0%84_%EB%B3%B5%EC%9E%A1%EB%8F%84)
        
- [빅오표기법에 대해 1](https://www.freecodecamp.org/korean/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/)

- [빅오표기법에 대해 2](https://noahlogs.tistory.com/27)
    
- [알고리즘 별 시간복잡도](https://dingrr.com/blog/post/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%8B%9C%EA%B0%84%EB%B3%B5%EC%9E%A1%EB%8F%84-big-o)
    