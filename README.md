## 스택 구성
```
Nest.js
Mysql
typeORM
Swagger
```

## API 명세
서버 실행 후에 http://localhost:3000/api-docs 로 접속하면 아래와 같은 UI를 보실 수 있습니다.
![image](https://github.com/dlsxody1/wayne--assignment-server/assets/62875596/d85d49bb-c933-4a40-9aff-aca4faa66045)

## 실행 방법

### 1 .env 파일을 루트 경로에 만든 후, 
```
AWS_ACCESS_KEY
AWS_SECRET_KEY
AWS_S3_BUCKET
```
아래와 같은 property를 추가하고, S3 버킷을 만들어줍니다

### 2. 명령어 입력
```
npm install
npm run start
```
위의 단계를 모두 거치면, 서버가 실행됩니다.
주의할 점은 src/configs/typeorm.config.ts의 username과 password를 본인의 db와 맞게 바꿔주어야 합니다.
