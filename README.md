# Grip 기업 과제

영화 검색, 즐겨찾기를 등록할 수 있는 영화 앱입니다(반응형).
가로 크기 375~1024에서 봐주세요

- moive open APi 는 https://developers.themoviedb.org 의 API를 참조 했습니다. (한국어 지원)

> **themoviedbAPI** 결과에 type 속성이 없어서 genre로 대처했습니다. (/search/movie/ 에서 값을 가져오기 때문에 분류 값이 response에 없습니다.)

## 기술 스택
TypeScript, Recoil, React 18.1, Sass

## 배포 사이트
배포는 gh-pages 사용했습니다.

https://silent10z.github.io/grip_movie_app


## 파일 구조
```cmd

├─assets
│  ├─fontawsome
│  ├─images
│  └─svgs
├─atom
├─components
│  ├─Box
│  ├─Modals
│  ├─Search
│  └─SEO
├─hooks
│  ├─moives
│  └─worker
├─layouts
│  └─Moive
│      ├─footer
│      ├─header
│      └─main
├─routes
│  └─Movie
├─services
├─styles
│  ├─base
│  ├─constants
│  └─mixins
├─types
└─utils
```
- assets : 사용할 폰트, 이미지, svgs 보관
- atom : recoil (상태관리)
- components : 컴포넌트
- hooks: 커스텀 hook
- layout: 기본 뼈대를 구성하는 tsx 파일
- routes: router page 
- servies: axios API 호출 코드
- styles: scss 사용될 기본 세팅
- types: typescript interface 
- utils: 기타 코드

## API 설명

> 영화 API에 장르 ID 값만 존재함으로 장르 API 따로 호출 하여 매칭

### 공통
- 버전 3
- REST프로토콜 형식 GET메서드
- 기본 URL: https://api.themoviedb.org/3
- response 400: "state_code" : 7 -> API KEY  에러

- response 404: "status_code": 34 -> 요청한 리소스를 찾을 수 없는 경우
### 1. 영화 검색 호출 API


```ts

    // 영화 호출 코드
    export const getMovieAPI = (params: Params) =>
    axios.get<Imoive>(`${MOVIE_BASE_URL}/search/movie/`, {
    params: {
      ...params,
      api_key: API_KEY,
      language: 'ko-KR',
      include_adult: 'false',
    },
  })

```
> **APIKey는 https://www.themoviedb.org/ 에서 받을 수 있습니다.**



- 필수 요청 파라미터 : api_key(string), query(string)
- 선택 요청 파라미터 : language(string), page(Intger) ,include_adult(Boolean), region(string), year(Intger), primary_release_year(Intger)

- response 200:  page, total_page, total_results, 
results(영화 데이터) 


예시: 검색어 아이언맨 2페이지 한국어 성인물x (API_KEY 개인 재산이라 따로!)

https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=ko-KR&query=아이언맨&page=2&include_adult=false

> 참조 https://developers.themoviedb.org/3/search/search-movies


### 2. 영화 장르 호출 API

```ts

    // 영화 장르 코드
  export const getMovieGenreAPI = () =>
  axios.get<IGenreRsult>(`${MOVIE_BASE_URL}/genre/movie/list`, {
    params: {
      api_key: API_KEY,
      language: 'ko-KR',
    },
  })

  // selector 
  export const movieGenreListSate = selector<IGenreRsult>({
  key: '#movieGenreList',
  get: async () => {
    try {
      const response = await getMovieGenreAPI()
      return response.data
    } catch (error) {
      throw new Error(`Error in 'axiosGetJsonData()': ${error}`)
    }
  },
})
```
- 필수 요청 파라미터 : api_key(string)
- 선택 요청 파라미터 : language(string)

- response 200:  genres -> {id, name}

예시:
https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=ko-KR
> 참조 https://developers.themoviedb.org/3/genres/get-movie-list 


### 3. 이미지 호출

https://image.tmdb.org/t/p/w500 + 영화 호출 결과 posterURL

예시
https://image.tmdb.org/t/p/w300_and_h450_bestv2/318YNPBDdt4VU1nsJDdImGc8Gek.jpg


## 기능 구현

- [ x ] 

- 검색, 즐겨찾기 하단 탭 구성 &#x2611;
- 상단 입력/버튼 하단 검색 결과 화면 &#x2611;
- 첫 검색 결과 영역 "검색 결과가 없습니다." 노출 &#x2611;

- 검색어 입력 후 버튼 클릭 
    - 아래 검색결과 노출 &#x2611;
    - 검색 박스 고정 &#x2611;
    - 왼쪽 영화 포스터 이미지, 오른쪽 영화 제목, 연도, 타입(저는 장르) 표시 &#x2611;
    - 검색결과 x "검색 결과가 없습니다." 노출 &#x2611;

- 검색 결과 중 영화 클릭


