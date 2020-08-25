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
    var responceJson = { // responce template
        err: "",
        isCorrect: false,
        url_snippet: ""
    }

    const isCorrectAnswer = function (queston, user_answer) {
        const AnswerData = JSON.parse(fs.readFileSync('')); // set answer file as json

        if (AnswerData[queston] !== void 0) { //check the question exists(void 0 always return undefind)
            if (AnswerData[queston] === user_answer) {//correct
                return true;
            }
            else {
                return false;
            }
        } else {
            throw new Error(`Question ${queston} does not exists.`);
        }
    }


    const IsCorrect = isCorrectAnswer(req.body.question, req.body.user_name);

    if (IsCorrect) {
        const UrlData = JSON.parse(fs.readFileSync('')); //URLのデータが入ってるjsonファイルを渡す
        responceJson.isCorrect = true;
        responceJson.url_snippet = UrlData[req.body.question];
    }
    //不正解ならテンプレートのまま返す
    res.json(responceJson);

});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
