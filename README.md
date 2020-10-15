# CTT
Capture The Toyota(for 2020s Koyo Fes)

## API
/(GET) ページを返す  
/api (POST) 正誤判定

## リクエスト形式
```
{
    "question":"1",      //一般、情報ともに重複しない通し番号
    "user_answer":"12345",  //ユーザーの答え
}
```

## レスポンス形式 
### Status code 200
```
{
    "Error":"",  //そもそもリクエストがエラーになったかどうか 成功なら空文字
    "isCorrect":"True",  //問題に正解したか
    "url_snippet":"https://www"     //最終URLの断片
}
```
### Other Status code(error)
```
{
    "Error":"AttributeError: Request needs 2 attributes,but 1 sent.",
    "isCorrect":"False",
    "url_snippet":""
}
```