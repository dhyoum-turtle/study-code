SVG
===========

> 최초 작성일 : 2022.11.18  
> 기술스택 : react-native

앱 개발을 하다보면 아이콘 이미지를 사용해야할 때가 온다. 
회사에 따라 디자이너가 직접 디자인한 아이콘을 사용하기도 하지만, 구글에서 제공하는 아이콘(https://fonts.google.com/icons )도 다양하기 때문에 자주 사용해왔다.

<img src="https://github.com/dhyoum-turtle/study-code/assets/125673596/41e94b88-b451-4895-a2a1-2d54d46441a2" width='400' alt="google icons의 페이지" />   

###### google icons의 페이지. 원하는 아이콘을 클릭하고 다운받으면 된다.


이처럼 svg를 찾는 것도, 찾은 svg를 프로젝트에 적용하는 것도 매우 쉽다.   
하지만 svg란 무엇일까… 태그 속 알 수 없는 영어와 숫자들은 무엇일까…

⛏️ 따라서, svg를 파봤다.   

이미지 종류
-------------

이미지는 크게 래스터 이미지(raster image), 벡터 이미지(vector image)로 나뉜다.

- 래스터 이미지(혹은 비트맵 이미지)

  작은 점(pixel)으로 이루어진 이미지를 말한다. 이 작은 점들의 수에 따라 이미지의 해상도와 용량이 변화하며, 수정을 가할 시 계단현상과 같은 이미지 깨짐이 발생하며 품질이 떨어진다. 다만 사진과 같은 정교하고 복잡한 이미지를 표현할 때는 자주 쓰인다.

  흔히 알고 있는 JPG, JPEG, PNG, GIF 등의 파일이 이 형식에 포함된다.

- 벡터 이미지

  수학 함수(좌표)를 기반으로 하는 이미지를 말한다. 이미지를 구성하는 좌표면의 점과 같은 정보를 저장하기 때문에 이미지에 수정이 가해져도 품질에 변화가 없다. 

  AI, EPS, SVG, PDF 등의 파일이 이 형식에 포함된다.

SVG (Scalable Vector Graphics)
---

그렇다면 벡터 이미지 중 svg는 무엇일까?

XML 기반의 2차원 벡터 이미지다. 쉽게말해 웹 친화적인 벡터 파일인셈. 웹개발을 하면서 볼 수 있는 스크립트 형식으로 벡터 이미지를 표현할 수 있단 뜻이다.

<img src='https://github.com/dhyoum-turtle/study-code/assets/125673596/d092f1d8-cccb-43b7-b443-0f6c8955c5b0' width='100' />

```
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.4541 5.90784V13.9078C18.4541 14.4383 18.2434 14.947 17.8683 15.3221C17.4932 15.6971 16.9845 15.9078 16.4541 15.9078H11.4541L6.4541 19.9078V15.9078H4.4541C3.92367 15.9078 3.41496 15.6971 3.03989 15.3221C2.66482 14.947 2.4541 14.4383 2.4541 13.9078V5.90784C2.4541 5.3774 2.66482 4.8687 3.03989 4.49362C3.41496 4.11855 3.92367 3.90784 4.4541 3.90784H16.4541C16.9845 3.90784 17.4932 4.11855 17.8683 4.49362C18.2434 4.8687 18.4541 5.3774 18.4541 5.90784ZM7.4541 8.90784H5.4541V10.9078H7.4541V8.90784ZM9.4541 8.90784H11.4541V10.9078H9.4541V8.90784ZM15.4541 8.90784H13.4541V10.9078H15.4541V8.90784Z" fill="black"/>
</svg>
```
###### figma의 ‘Heroicons’ plugin을 사용하였다.

딱 봐도 익숙한 스크립트의 형식이다. 위와 같은 특징 덕분에 읽기가 쉽고, 개발자도 파일을 수정할 수 있다. 

하지만 여기서 이미지 왼쪽으로 90도 회전 시키고 싶으면 어딜 고쳐야할까? 다른 색으로 바꾸려면 어디를 바꿔야할까? 도대체 저 `<path>`는 무엇일까? 

SVG의 속성
---

- viewBox

  svg 하위 요소들이 렌더링되는 영역을 말한다. 

  `viewBox=“[min-x] [min-y] [width] [height]”`

  벡터 이미지는 좌표를 기반으로 한다. 왼쪽 상단이 (0,0)이며 우측으로 갈 수록 x값이 증가하고 아래로 갈 수록 y값이 증가한다. 즉, 예시의 svg는 원점에서 시작해서 가로세로 21의 공간에서 그려진다.

- height & width

  svg 자체 크기를 뜻한다. 다만 viewBox에 쓰이는 width, height와는 다르다. 따라서 크기를 지정해줘야한다면 해당 속성의 값을 바꿔주면 된다.

  <img src='https://github.com/dhyoum-turtle/study-code/assets/125673596/87aa569a-104b-4010-9bf9-da2a27fa712a' width='100' />
  
  ###### 좌측은 21, 우측은 42

- 하위요소와 viewBox의 크기
  
  <img src="https://github.com/dhyoum-turtle/study-code/assets/125673596/1c521948-627e-4032-b968-f04a181dc459" width="150" />
  
  ```jsx
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 30 30" fill="none">
  ```

  
  <img src="https://github.com/dhyoum-turtle/study-code/assets/125673596/4e5ce990-9c3d-4c49-8153-727d102cadf6" width="150" />
    
  ```jsx
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 10 10" fill="none">
  ```

  같은 `width="21" height="21"` 임에도 보이는 이미지는 다르다. 그 이유는 viewBox 때문인데, 이를 잘 이용한다면 같은 영역내에서 svg를 확대할 수 있다.

  예시:

  <img src="https://github.com/dhyoum-turtle/study-code/assets/125673596/72b73674-c08b-4890-89c9-c52b1d9cc677" width='200' />
  
  ```jsx
  좌측 :
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <circle cx="50" cy="50" r="50" fill="red"/>
  </svg>

  우측 :
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 50" fill="none">
  <circle cx="50" cy="50" r="50" fill="red"/>
  </svg>
  ```

  같은 `width="100" height="100"` 크기에 하위요소도 반지름 50인 원으로 동일하지만, 좌측은 viewBox가 100x100, 우측은 50x50이다.

  - viewBox의 크기 > 하위요소의 크기 : 축소된 이미지(전체)
  - viewBox의 크기 < 하위요소의 크기 : 확대된 이미지(일부)

SVG 하위요소 
---

자세히 알고 있지 않아도 되지만, 궁금했기에 자주 보아왔던 태그 몇가지를 찾아보았다.

- `<rect>, <circle>, <ellipse>, <line>, <polygon>`
    
    이름에서 알 수 있듯, 기본 도형(사각형, 원, 타원, 선, 폴리곤)을 그릴 수 있다.
    
- `<path>`
    
    기본 도형 외의 더 복잡한 도형을 그릴 수 있다. 아래는 속성들이다.
    
    - `d` : path의 경로를 정의하는 속성. 명령과 좌표값이 들어가있다.
        - moveTo(`m`)
        - lineTo(`l`, `h`, `v`)
        - closePath(`z`)
        - curve(`c`, `s`, `q`, `t`, `a`)
        - 알파벳 외 숫자들은 좌표값을 뜻한다.
    - `fill-rule` : 그려진 도형에 색을 채우는 방식을 나타낸다.
        - `evenodd` : 한 도형A 내부의 임의의 점에서 임의의 방향으로 무한한 직선을 그었을 때, 기존 도형의 선분과 맞닿는 점이 홀수개 존재한다면, 도형A에 색을 칠한다. ([더 나은 설명](https://stackoverflow.com/questions/46017839/how-does-fill-rule-evenodd-work-on-a-star-svg))
        - `nonzero` : 모든 도형을 채색.
    - `clip-rule`
        
        내부에 `<clipPath>`가 존재할 때, 클리핑(mask와 유사)하는 방식을 나타낸다. `fill-rule`과 동일한 속성을 갖는다. (`evenodd` / `nonzero`)
        
- `<defs>`
    
    나중에 사용할 그래픽 개체를 저장한다. 선언만으론 렌더링되지 않으며, `<use>`등에서 해당 개체를 참조해야만 렌더링된다.
    
- `<use>`
    
    사전에 정의된 개체를 가져온다. `href` 속성에 가져올 개체 `id`를 매핑하여 사용한다.
    
- `<g>`
    
    개체 그룹화
    

react native에서의 svg 
---

- 라이브러리
    
    많이 쓰는 라이브러리는 [react-native-svg](https://github.com/software-mansion/react-native-svg) 이다. 
    
    `<Icon width={24} height={24} fill="red" />`
    
    라이브러리 사용시 위와 같이 fill을 줬는데도 이미지의 색상이 변경되지 않는 경우가 있다. 이 경우 svg파일 내부의 fill을 모두 삭제해야만 수정한 color값으로 적용이 된다. ([관련 stack overflow](https://stackoverflow.com/questions/49660912/react-native-how-to-use-local-svg-file-and-color-it))
    
- svg 회전
    
    사실 회전된 이미지를 다시 다운받아서 추가하는 편이 빠르겠지만, svg 자체를 회전 시키고 싶다면  `transform=”rotate()”` 를 넣어준다.
    
    이때 주의할 점은 회전시킬 원점을 잘 지정하는 것이다. svg에서 원점(0,0)은 늘 왼쪽상단임을 잊지 말자. rotate(-90)만 넣었다가는 화면에서 이미지가 보이지 않게 되니 유의.
    
    ```jsx
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" transform="rotate(-90)">...</svg>
    or
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g transform="rotate(-90 12 12)">...</g></svg>
    ```
    

참고자료
---

- [svg 그래픽](https://a11y.gitbook.io/graphics-aria/svg-graphics)
    
- [mdn](https://developer.mozilla.org/en-US/docs/Web/SVG)
    
- [viewport vs viewBox](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844)
    
- [래스터 vs 벡터](https://www.shutterstock.com/ko/blog/raster-vs-vector-file-formats/?utm_campaign=CO%3DKR_LG%3DKO_BU%3DIMG_AD%3DDSA_TS%3Dlggeneric_RG%3DAPAC_AB%3DACQ_CH%3DSEM_OG%3DCONV_PB%3DGoogle&ds_cid=71700000017889857&ds_ag=FF%3Ddsa-search_AU%3DVisitors&gclsrc=aw.ds&ds_agid=58700005755289517&gclid=Cj0KCQiAqsitBhDlARIsAGMR1RgWXoN-sonLFuSXUbxerMvIbzeqVLKG6FJAThMkkjCjZkIGOQsmYMIaAuS1EALw_wcB&utm_medium=cpc&amp=1&gad_source=1&kw=&utm_source=GOOGLE&ds_eid=700000001520946)https://www.shutterstock.com/ko/blog/raster-vs-vector-file-formats/?utm_campaign=CO%3DKR_LG%3DKO_BU%3DIMG_AD%3DDSA_TS%3Dlggeneric_RG%3DAPAC_AB%3DACQ_CH%3DSEM_OG%3DCONV_PB%3DGoogle&ds_cid=71700000017889857&ds_ag=FF%3Ddsa-search_AU%3DVisitors&gclsrc=aw.ds&ds_agid=58700005755289517&gclid=Cj0KCQiAqsitBhDlARIsAGMR1RgWXoN-sonLFuSXUbxerMvIbzeqVLKG6FJAThMkkjCjZkIGOQsmYMIaAuS1EALw_wcB&utm_medium=cpc&amp=1&gad_source=1&kw=&utm_source=GOOGLE&ds_eid=700000001520946
    
    
    
