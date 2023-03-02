# Git 전략

## Reference
1. https://zakelstorm.tistory.com/32  
: git으로 프로젝트 관리

2. https://gmlwjd9405.github.io/2018/05/11/types-of-git-branch.html  
: Git Branch Strategy  

3. https://toramko.tistory.com/entry/git-%EA%B9%83-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0-development-master-%EB%B8%8C%EB%9E%9C%EC%B9%98  
: github 브랜치 생성 및 설정  

4. https://nodingco.tistory.com/3  
: vscode + git 명령어  
```
git remote update
-----> git 서버의 저장소의 상태를 업데이트합니다.

git checkout origin/(branch명)
----->  git 서버에 있는 branch를 내 로컬 git으로 가져오면서 그 branch를 선택합니다.

git merge (branch명)
-----> 현재 보고 있는 branch에 입력한 branch를 병합합니다. 충돌이 발생할 수 있습니다.

```

## Remote
1. main
2. develop  
: default

## Local
1. main 
2. develop
: default

## FLOW  
: 나같은 경우에는 main branch만 갖고 시작함  
: github에서 develop branch를 추가로 생성하고 develop을 default로 설정함  
: 원래 보통 main, develop branch는 개발자에게 push권한이 없다 (담당자 제외)
: 나같은 경우 local/develop에서 git merge (feature branch) 했으나 원래는  
local/develop branch에서 git remote update, git pull하고 
git checkout (feature branch) 가서 거기에서 git merge develop 해서 맞추고  
해당 feature branch를 git push 해서 github에 업로드하는 것이 일반적이다



```
git status
--> git 서버의 상태 확인  
git remote update
--> git 서버의 저장소의 상태를 업데이트합니다.
git checkout origin/develop
-->  git 서버에 있는 branch를 내 로컬 git으로 가져오면서 그 branch를 선택  
git checkout issue2LoadingMenu  
--> local에 issue2LoadingMenu branch (feature branch) 생성
: 여기서 개발 작업 진행
git commit -m "issue2LoadingMenu"
: issue2LoadingMenu local branch에서 commit

git remote update
--> 서버 저장소의 변경사항을 update
git checkout develop
--> 내 작업을 업로드할 develop branch로 변경
git pull
--> 서버저장소에서 develop branch의 최신 상태를 가져옵니다.
git merge issue2LoadingMenu
--> develop 브랜치에서 feature 브랜치를 merge
git push
--> origin/develop으로 push

git checkout develop
--> main branch로 변경
git pull
--> 서버저장소에서 main branch의 최신 상태를 가져옵니다.
git merge develop
git push
--> origin/main으로 push


```


























