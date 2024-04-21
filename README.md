# 레포지토리 전략
| Level 1   | Level 2      | Level 3         | Level 4             |
|-----------|--------------|-----------------|---------------------|
| project   |              |                 |                     |
|           |── apps       |                 |                     |
|           |              |── next-admin    |                     |
|           |              |── react-admin   |                     |
|           |── packages   |                 |                     |
|           |              |── config        |                     |
|           |              |                 |── tsconfig          |
|           |              |                 |── storybook         |
|           |              |── ui            |                     |
|           |              |                 |── emotion           |
|           |              |                 |── design-system     |
|           |              |                 |── reset             |
|           |              |── common        |                     |
|           |              |                 |── utils             |
 
   
     
# 패키지 매니저  
[https://yarnpkg.com/getting-started]  
yarn berry  
  
   
# 실행
yarn run dev:next  
yarn run dev:react  

### 모든 작업공간 업데이트
yarn up



# 체크사항
Node 18 이상  
Corepack을 활성화  


# spec
코어: React, TypeScript, Next.js  
상태 관리: React-Query, Zustand  
스타일링: Emotion  
