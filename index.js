const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'static')));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');
const { resolveAny } = require('dns');

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post('/', (req, res) => {
    const isCorrectAnswer = function (queston, user_answer) {
        return Promise.resolve(() => {
            const error = new Error();
            const AnswerData = JSON.parse(fs.readFileSync('')); // set answer file as json

            if (AnswerData[queston] !== void 0) { //check the question exists(void 0 always return undefind)
                if (AnswerData[queston] === user_answer) {//correct
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            } else {
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
