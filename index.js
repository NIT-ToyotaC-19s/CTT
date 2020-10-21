const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');


app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post('/api', (req, res) => {
    const isCorrectAnswer = function (question, user_answer) {
        return new Promise((resolve, reject) => {
            const error = new ReferenceError();
            const AnswerData = JSON.parse(fs.readFileSync('data/answers.json')); // 解答のファイルパスを渡す(json)

            if (AnswerData.answers[question]) { //渡されたインデックスの問題があるか確認する
                resolve(AnswerData.answers[question] === user_answer); //正答ならtrue、誤答ならfalseを渡して実行する
            } else {//そんな問題はない
                error.message = `Question ${question} does not exists.`;
                throw error;
            }
        });
    }
    isCorrectAnswer(req.body.question, req.body.user_answer)
        .then((judgeResult) => {
            var responceJson = { // responce template
                err: "",
                isCorrect: false,
                url_snippet: ""
            }
            console.log(judgeResult);
            if (judgeResult) {// 正解の時だけjsonを加工する
                responceJson.isCorrect = true;
            }
            return responceJson;
        })
        .then((responceJson) => {
            res.json(JSON.stringify(responceJson));
        })
        .catch((err) => {
            console.error(err.message);
            if (err instanceof ReferenceError) {
                res.status(404).send(err.message);
            }
        });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
