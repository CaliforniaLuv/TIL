
# Host와 Container의 연결

```
docker run -p 8888:80 -v ~/Desktop/htdocs:/usr/local/apache2/htdocs/ Image명
```

해석: 8888이라는 Port는 Host의 것이고 내 컴퓨터의 VSCODE 에디터를 활용해서 작성한 내용을 index.html 파일이라고 지정하였다.
```-v``` 명령어 뒤 ~/Desktop/htdocs는 내 로컬 주소이며 ```:``` 뒤 /usr/local/apache2/htdocs/는 container의 index.html 파일이 있는 주소이다.
다시 말해서 내가 VSCODE에 작성한 내용들을 저장하고 위 명령어를 입력하면 Container의 index.html도 똑같이 변경된다.

이를 통해 굳이 Container의 CLI 환경에서의 nano 에디터로 불편하게 작업할 필요도 없이 호스트(내 컴퓨터)에서 바로 즉각 변경이 가능해 매우 효율적이다.
