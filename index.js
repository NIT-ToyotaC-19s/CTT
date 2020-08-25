const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');


app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post('/', (req, res) => {
    const isCorrectAnswer = function (queston, user_answer) {
        return Promise.resolve(() => {
            const error = new Error();
            const AnswerData = JSON.parse(fs.readFileSync('')); // 解答のファイルパスを渡す(json)

            if (AnswerData[queston] !== void 0) { //渡されたインデックスの問題があるか確認する(void 0 は常にundefindを返す)
                if (AnswerData[queston] === user_answer) {//正答
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            } else {//そんな問題はない
                error.message = `Question ${queston} does not exists.`;
                throw error;
            }
        });
    }
    isCorrectAnswer(req.body.question, req.body.user_name)
        .then((judgeResult) => {
            var responceJson = { // responce template
                err: "",
                isCorrect: false,
                url_snippet: ""
            }

            if (judgeResult) {// 正解の時だけjsonを加工する
                const UrlData = JSON.parse(fs.readFileSync('')); //URLのデータが入ってるjsonファイルを渡す
                responceJson.isCorrect = true;
                responceJson.url_snippet = UrlData[req.body.question];
            }
            return responceJson;
        })
        .then((responceJson) => {
            res.json(JSON.stringify(responceJson));
        })
        .catch((err) => {
            console.error(err.message);
            res.status(500).send(err); //とりあえず全部500返します(後で考えます)
        });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
