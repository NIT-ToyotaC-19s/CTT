(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(o=!1)}o&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},r={app:0},n=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e05":function(t,e,a){t.exports=a.p+"img/taikukan.d9b75c15.jpg"},"13e0":function(t,e,a){},"1c2b":function(t,e,a){t.exports=a.p+"img/nittc_question_map.6f3286b5.png"},"2b2f":function(t,e,a){"use strict";a("13e0")},"2bbd":function(t,e,a){t.exports=a.p+"img/toshokan.17f283a0.jpg"},3184:function(t,e,a){t.exports=a.p+"img/kikaikogakuka.cc5817c2.jpg"},"32f5":function(t,e,a){t.exports=a.p+"img/undraw_completed_ngx6.ddaa6166.svg"},"3a1c":function(t,e,a){},"41f5":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-card",{staticClass:"overflow-hidden",staticStyle:{"margin-top":"60px"}},[a("v-app-bar",{attrs:{color:"white",light:"",fixed:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),a("v-toolbar-title",[t._v("Capture The Toyota")])],1),a("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"primary--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.lists,(function(e){return a("v-list-item",{key:e.name,attrs:{to:e.link}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1)],1),a("router-view")],1)],1)},n=[],s={name:"App",data:function(){return{drawer:!1,group:null,lists:[{name:"Home",icon:"mdi-home",link:"/"},{name:"Catalog",icon:"mdi-file-question",link:"/catalog"},{name:"Score",icon:"mdi-counter",link:"/score"},{name:"Help",icon:"mdi-help-circle",link:"/help"},{name:"Map",icon:"mdi-map",link:"/map"}]}}},i=s,c=a("2877"),l=a("6544"),u=a.n(l),p=a("7496"),d=a("40dc"),v=a("5bc1"),m=a("b0af"),g=a("132d"),b=a("8860"),f=a("da13"),_=a("1baa"),h=a("34c3"),C=a("5d23"),y=a("f774"),S=a("2a7f"),k=Object(c["a"])(i,r,n,!1,null,null,null),x=k.exports;u()(k,{VApp:p["a"],VAppBar:d["a"],VAppBarNavIcon:v["a"],VCard:m["a"],VIcon:g["a"],VList:b["a"],VListItem:f["a"],VListItemGroup:_["a"],VListItemIcon:h["a"],VListItemTitle:C["a"],VNavigationDrawer:y["a"],VToolbarTitle:S["a"]});var $=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-parallax",{attrs:{dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h1",{staticClass:"display-1 font-weight-thin mb-4",attrs:{id:"title"}},[t._v(" 2I学科展 ")]),a("h3",{staticClass:"subheading"},[t._v(" Welcome to Capture The Toyota. ")])])],1)],1),t._m(0)],1)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"intro"}},[a("br"),a("p",[t._v("情報工学科2年へようこそ！")]),a("br"),a("p",[t._v("ここではCTTというクイズラリーができます")]),a("br"),a("p",[t._v("クイズには一般向け問題と情報向け問題の2種類があります")]),a("br"),a("p",[t._v("正答数に応じて景品をさしあげます")]),a("br"),a("p",[t._v("※ブラウザのシークレットモード(プライベートモード)を使用するとうまく動作しません")]),a("br"),a("br"),a("br")])}],T={name:"Home",props:{msg:String}},j=T,Q=(a("7374"),a("62ad")),B=a("8b9c"),V=a("0fd9"),O=Object(c["a"])(j,w,q,!1,null,"b6f9d3c4",null),I=O.exports;u()(O,{VCol:Q["a"],VParallax:B["a"],VRow:V["a"]});var A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{staticClass:"all"},[o("p",{staticClass:"title-border"},[t._v("General")]),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:1}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("2bbd")}}),t._v(" 問題1．図書館 "),o("br"),t._v(" : 難易度★☆☆ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:2}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("0e05")}}),t._v(" 問題2．第2体育館 "),o("br"),t._v(" : 難易度★★☆ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:3}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("5926")}}),t._v(" 問題3．情報棟ー創造工房棟間 "),o("br"),t._v(" : 難易度★☆☆ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:4}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("7528")}}),t._v(" 問題4．環境都市工学科前 "),o("br"),t._v(" : 難易度★☆☆ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:5}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("7cc2")}}),t._v(" 問題5．情報工学科 "),o("br"),t._v(" : 難易度★★☆ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:6}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("3184")}}),t._v(" 問題6．機械工学科 "),o("br"),t._v(" : 難易度★☆☆ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:7}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("83d1")}}),t._v(" 問題7．ICT教育センター "),o("br"),t._v(" : 難易度★★☆ "),o("br")])],1),o("p",{staticClass:"title-border"},[t._v("Academic")]),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:8}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("7cc2")}}),t._v(" 問題8．情報工学科 "),o("br"),t._v(" : 難易度★★☆ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:9}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("7528")}}),t._v(" 問題9．環境都市工学科前 "),o("br"),t._v(" : 難易度★★★ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:10}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("3184")}}),t._v(" 問題10．機械工学科 "),o("br"),t._v(" : 難易度★★★ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:11}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("651f")}}),t._v(" 問題11．専攻科 "),o("br"),t._v(" : 難易度★★☆ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:12}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("5926")}}),t._v(" 問題12．情報棟ー創造工房棟間 "),o("br"),t._v(" : 難易度★★★ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:13}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("2bbd")}}),t._v(" 問題13．図書館 "),o("br"),t._v(" : 難易度★★☆ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:14}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("83d1")}}),t._v(" 問題14．ICT教育センター "),o("br"),t._v(" : 難易度★★☆ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:15}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("651f")}}),t._v(" 問題15．専攻科 "),o("br"),t._v(" : 難易度★★☆ "),o("br")])],1),o("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Question",query:{id:16}}}},[o("v-card",{staticClass:"questions",attrs:{elevation:"7"}},[o("img",{attrs:{src:a("0e05")}}),t._v(" 問題16．第2体育館 "),o("br"),t._v(" : 難易度★☆☆ "),o("br")])],1)],1)},N=[],P={name:"Catalog",props:{msg:String}},D=P,E=(a("669c"),Object(c["a"])(D,A,N,!1,null,"7f0704d0",null)),G=E.exports;u()(E,{VApp:p["a"],VCard:m["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("br"),a("p",{staticClass:"title",attrs:{align:"center"}},[t._v("Question No. "+t._s(this.$route.query.id))]),a("p",{staticClass:"title-border"},[t._v("Choose")]),t._l(t.question_data[this.$route.query.id].choose,(function(e,o){return a("div",{key:e},[a("v-btn",{staticClass:"black--text",attrs:{color:"white",block:"",disabled:t.$localStorage.get("jadge"+t.id)},on:{click:function(e){return t.Save_Answer(o+1)}}},[a("span",{staticClass:"mgr-10"},[t._v(t._s(o+1)+".")]),t._v(" "+t._s(e))])],1)})),a("br"),a("p",{attrs:{align:"center"}},[t._v("あなたの選択肢："+t._s(t.user_answer))]),a("v-btn",{attrs:{disabled:t.$localStorage.get("jadge"+t.id)},on:{click:function(e){return t.Post_Question()}}},[t._v("送信(一度しかできません)")]),a("br"),t.loading?a("p",{attrs:{align:"center"}},[t._v("Now Judging...")]):t._e(),t.loading?a("vue-loading",{attrs:{type:"spiningDubbles",color:"#aaa",size:{width:"100px",height:"100px"}}}):t._e(),t.$localStorage.get("jadge"+t.id)?a("v-card",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"comment-card",attrs:{elevation:"6"}},[t.$localStorage.get("isCorrect"+t.id)?a("span",{staticClass:"comment-card"},[a("p",{staticClass:"result",attrs:{align:"center"}},[t._v("正解")]),a("p",[t._v("すごい！")]),t._v(" "+t._s(t.question_data[this.$route.query.id].comment)+" ")]):a("span",[a("p",{staticClass:"result",attrs:{align:"center"}},[t._v("不正解")]),a("p",[t._v("残念！")]),t._v(" "+t._s(t.question_data[this.$route.query.id].comment)+" ")])]):t._e(),a("br"),a("v-btn",{staticClass:"goto-catalog",on:{click:t.GoTo_Catalog}},[t._v("問題一覧へ")]),a("router-view")],2)},H=[],M={name:"Question",props:{msg:String},data:function(){return{id:this.$route.query.id,user_answer:"選択されていません",loading:!1,question_data:{1:{choose:["太田 稔彦(おおた としひこ)","豊田 章男(とよた　あきお)","田川 智彦(たがわ ともひこ)","河野 太郎(こうの　たろう)"],comment:"正解は3番の田川 智彦でした！\n太田 稔彦は豊田市長，豊田 章男はトヨタの社長，河野 太郎は政治家で現行革相です．ちなみに田川校長は化学工学者で名古屋大学名誉教授でもあります．"},2:{choose:["準学士","学士","修士","博士"],comment:"正解は1番の準学士でした！\n準学士は高専特有の学位で短大では短期大学士という名前です．実は準学士は厳密には学位ではなく称号と呼ばれるものなので，日本国内でしか通用しません:("},3:{choose:["3","4","5","6"],comment:"正解は3番の5でした！\n機械工学科，電気･電子システム工学科，情報工学科，環境都市工学科，建築学科の5つの学科が置かれています．それぞれの学科には特有の雰囲気や特徴があるので，         クラス展や学科展で比べてみてください．また専攻科は電子機械工学専攻，建築工学専攻，情報科学専攻の3つがあります．"},4:{choose:["５年","１０年","１２年","１５年"],comment:"正解は2番の10年でした！\n1学年2回まで在籍できますが，あまり良いことではありません．通常よりかなり長い期間在籍している人(つまり何度も留年している人)は「長老」と呼ばれることがあります．"},5:{choose:["1963年","1987年","1994年","2005年"],comment:"正解は2番の1987年でした！\n一番新しい学科ですが，なぜか建物がボロいです．情報工学科棟については自動販売機がない，移動が面倒などの苦情が寄せられています．"},6:{choose:["ある","ない","低学年のみある","専攻科のみある"],comment:"正解は2番のないでした！\n全国で半分くらいの高専は低学年のみ制服がありますが，豊田高専に制服はありません．ただし1年生はGWまで中学の制服で過ごすことになります．         GW後からは各々のファッションセンスが露呈します．"},7:{choose:["6","7","8","9"],comment:"正解は3番の8でした！\n男子寮が5棟、女子寮が1棟、男女高学年寮が1棟あります．さらに今建設中の国際寮(仮)があり，留学生と日本人学生の共同生活のためのシェアハウス型の寮を予定しているそうです．"},8:{choose:["豊橋技術科学大学","東京大学","名古屋大学","豊田工業大学"],comment:"正解は3番の名古屋大学でした！\nac.jpは日本を意味するJPドメインの種類の一つで、大学などの高等教育機関や学校法人などのためのドメインです．\n         また豊田高専では約5割の学生が大学や専攻科に進学します．東京大学や京都大学には数人に1人しか進学していません．毎年，豊橋技術科学大学や名古屋大学などへの進学者が多いです．"},9:{choose:["1.1.1.1","1.0.0.1","1.1.0.0","0.0.0.0"],comment:"正解は2番の1.0.0.1でした！\n「🐶＝犬＝鳴き声がワン＝ワン＝１」というなぞなぞのような解釈が必要でした．するとこの英文を日本語に直すと「1.1.1.1の代替DNSサーバのipv4は何？」となります．\n         この問題は「DNSサーバ」，「ipv4」の二つの専門用語の意味が分からないと解けません．単語の意味さえ分かれば，ググれば簡単に答えが分かる問題です．"},10:{choose:["google-public-dns-a.google.com","google-public-dns-b.google.com","google-public-dns-c.google.com","google-public-dns-d.google.com"],comment:"正解は1番のgoogle-public-dns-a.google.comでした！\n「bee＝蜂＝８」というなぞなぞ的な解釈が必要でした．また，「*4」があるため４倍にします(=8.8.8.8)．この問題分を日本語にすると「8.8.8.8のFQDNは何？」となります．\n         FQDNはFully Qualified Domain Name(完全修飾ドメイン名)の略です．あとは調べれば出てきます．"},11:{choose:["nittc{famima}","nittc{karagekun}","kosen{famima}","kosen{karagekun}"],comment:"正解は2番のnittc{karagekun}でした！\nkaragekunに特に意味はありません．\n         ところで豊田高専の近くにはファミリーマートがあり，特に寮生は買い物や荷物の受け取りなど頻繁に利用しています．"},12:{choose:["豊田工業高等専門学校","豊田市駅","麦笑らーめん","Felna"],comment:"正解は1番の豊田工業高等専門学校でした！\n難易度の高い問題でした．問題分に記されているのは日本測地系かつDMS形式なのでgoogle mapに適合させるために世界測地系かつDegree形式に変換する必要がありました．\n          変換にはとても面倒くさい計算が必要ですが，自動で計算して変換をしてくれるサイトがあるのでそれを利用して座標を求めます．すると地図の中央の方に豊田高専が映るはずです．"},13:{choose:["3","6","9","12"],comment:"正解は2番の6でした！\n計算自体は簡単ですが，表記がややこしい問題です．この表記はTeX記法といい，LaTeXなどで使用されるものです．\\frac{分子}{分母}は小数を表現しています．log_2 4 ×　πの近似値を選べば正解です．"},14:{choose:["こうせんはいいぞ","こうせんだいすき","とよたしさいこう","がりょうてんせい"],comment:"正解は1番のこうせんはいいぞでした！\nある文字コードとはASCIIのことです．ASCIIの表は調べればでてくるので，簡単に変換できます．"},15:{choose:["かめら","とよた","ゆうき","まうす"],comment:"正解は4番のまうすでした！\nシーザー暗号は最も単純で広く知られた暗号のひとつで，平文の各文字を辞書順に３文字ずつずらして復号します．"},16:{choose:["2","4","6","8"],comment:"正解は4番の8でした！\n情報工学の基本的な問題です．(本科一年生の前期の範囲です．)\n          なぜ8bit = 1byteになったのかというと処理する文字が英語の小文字大文字，特殊文字と増えていくにつれて4bitでは足りない...6bitでは足りない...となっていき7bit必要になりました．          さらに通信用のパリティビットを加えて8bitとなったのです．そもそも奇数では半分にできないので消去法で8となったそうです．へぇ～"}}}},methods:{Post_Question:function(){var t=this;this.$axios.post("/api",{question:this.id,user_answer:this.user_answer}).then((function(e){t.$localStorage.set("jadge"+String(t.id),!0),t.$localStorage.set("isCorrect"+String(t.id),JSON.parse(e.data).isCorrect),t.loading=!0,JSON.parse(e.data).err?(t.$localStorage.set("jadge"+String(t.id),!1),alert("エラーが発生しました．時間を置いて再度送信してください．解決しない場合は2I教室の学生に相談してください．")):setTimeout((function(){t.loading=!1}),3e3)})).catch((function(t){alert(t)}))},Save_Answer:function(t){this.user_answer=t},GoTo_Catalog:function(){this.$router.push("/catalog")},Btn_Disabled:function(){return"true"==this.$localStorage.get("jadge"+this.id)}}},J=M,L=(a("9a2c"),a("8336")),W=Object(c["a"])(J,F,H,!1,null,"2dfb6d1a",null),X=W.exports;u()(W,{VApp:p["a"],VBtn:L["a"],VCard:m["a"]});var z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"help"},[a("br"),a("p",{staticClass:"title-border"},[t._v("What's CTT ?")]),a("p",[t._v("Capture The Toyota(CTT)という名称はCapture The Flag(CTF)のパロディです．")]),a("p",[t._v("'''キャプチャー・ザ・フラッグ（Capture The Flag、略称: CTF）は、互いに相手陣地の旗を奪い合う騎馬戦や棒倒しに似た野外ゲームのことである。 また、そこから派生して、ファーストパーソン・シューティングゲームなどのeスポーツや、コンピュータセキュリティなどの分野でも用いられている。 特に、コンピュータセキュリティにおけるCTFは、しばしば「ハッカーコンテスト」などと意訳されて報じられる'''(引用: wikipedia)")]),a("p",[t._v("要はちょっと頭を使うクイズラリーみたいなものです．")]),a("p",{staticClass:"title-border"},[t._v("How to do CTT ?")]),a("p",[t._v("CTTでは校内に配置された問題(Question)を解いてもらいます．")]),a("p",[t._v("問題は4択で一度解答を送信するともう一度答えることはできなくなります．そのため慎重に解答をしてください．また解き方は様々で，インターネットなどの使用は自由です．")]),a("p",[t._v("まずCatalogページを開いてください．そこには一般向けの問題(General)と情報向けの問題(Academic)の一覧があります．")]),a("p",[t._v("情報向けの問題は専門的な内容を含むので，意欲のある方はぜひ挑戦してください！難易度が高い代わりに1問2点です！")]),a("p",[t._v("Scoreページに正解した問題の数が表示されます．")]),a("p",[t._v("Scoreを貯めて，受付(2Iの教室)にてそのページを見せていただくことで，正解数に応じた景品をお渡しします．")]),a("p",{staticClass:"title-border"},[t._v("When in trouble ...")]),a("p",[t._v("WebページやCTTの取り組み方について問題があった場合は2I教室にいる学生に訪ねてください．")]),a("p",[t._v("また，問題が難しくて分からないときは周りの学生に質問してみてください．")]),a("br")])}],Y={name:"Help",props:{msg:String},data:function(){return{}}},K=Y,U=(a("2b2f"),Object(c["a"])(K,z,R,!1,null,"f261a622",null)),Z=U.exports,tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"score"},[o("br"),o("img",{directives:[{name:"show",rawName:"v-show",value:t.$localStorage.get("complete"),expression:"$localStorage.get('complete')"}],attrs:{src:a("32f5")}}),o("br"),o("p",{staticClass:"title-border"},[t._v("Your Score")]),o("br"),o("h2",[t._v("Score(General)")]),o("br"),o("h1",[t._v(t._s(t.score1))]),o("br"),o("h2",[t._v("Score(Academic)")]),o("br"),o("h1",[t._v(t._s(t.score2))]),o("br"),o("h2",[t._v("Total Score")]),o("br"),o("h1",[t._v(t._s(t.score1+t.score2))]),o("br"),o("p",[t._v("Total Scoreが0,4,8以上になると景品と交換できます．")]),o("br"),o("p",[t._v("景品は4~7がお菓子，8~11がお菓子(小袋)，12~がジュースです．")]),o("br"),o("p",[t._v("景品の内容は予告なく変わることがあります．")]),o("br"),o("v-btn",{attrs:{disabled:t.$localStorage.get("complete")},on:{click:t.Comp_Confirm}},[t._v("completed!")]),o("p",[t._v("※このボタンを押すと景品交換済みとなります．受付の学生以外は操作しないでください")]),o("p",[t._v("この操作は取り消せません．")]),o("br"),o("br"),o("br"),o("v-btn",{on:{click:t.Get_Classroom}},[t._v("教室の人数を取得")]),o("br"),o("p",{staticClass:"number-of-people"},[t._v("教室内に"+t._s(t.people)+"人います")]),o("br"),o("p",[t._v("教室内に人が多い場合は時間をずらすなどして，3密を回避しましょう！")]),o("br"),o("p",[t._v("~ Avoid the three Cs ~")]),o("br")],1)},et=[],at=(a("4de4"),{name:"Home",props:{msg:String},data:function(){return{score1:[this.$localStorage.get("isCorrect1"),this.$localStorage.get("isCorrect2"),this.$localStorage.get("isCorrect3"),this.$localStorage.get("isCorrect4"),this.$localStorage.get("isCorrect5"),this.$localStorage.get("isCorrect6"),this.$localStorage.get("isCorrect7")].filter((function(t){return 1==t})).length,score2:2*[this.$localStorage.get("isCorrect8"),this.$localStorage.get("isCorrect9"),this.$localStorage.get("isCorrect10"),this.$localStorage.get("isCorrect11"),this.$localStorage.get("isCorrect12"),this.$localStorage.get("isCorrect13"),this.$localStorage.get("isCorrect14"),this.$localStorage.get("isCorrect15"),this.$localStorage.get("isCorrect16")].filter((function(t){return 1==t})).length,people:"???"}},methods:{Get_Classroom:function(){var t=this;this.$axios.get("https://koyosai-lisp.tk/api").then((function(e){t.people=e.data["number"]})).catch((function(t){alert(t)}))},Comp_Confirm:function(){confirm("CTTを終了し景品と交換しますか?\n※景品の交換は一度しかできません．この操作は取り消せません．受付の学生以外は操作しないでください．")&&(this.$localStorage.set("complete",!0),this.$router.push("/"))}}}),ot=at,rt=(a("ee8a"),Object(c["a"])(ot,tt,et,!1,null,"38ccd64b",null)),nt=rt.exports;u()(rt,{VBtn:L["a"]});var st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"map"},[o("br"),o("p",{staticClass:"title-border"},[t._v("Map")]),o("br"),o("br"),t._v(" 問題掲載場所を記した校内地図 "),o("img",{attrs:{src:a("1c2b")}}),o("br")])}],ct={name:"Home",props:{msg:String}},lt=ct,ut=(a("cc0e"),Object(c["a"])(lt,st,it,!1,null,"80470598",null)),pt=ut.exports;o["default"].use($["a"]);var dt=new $["a"]({mode:"history",routes:[{path:"/",component:I,name:"Home"},{path:"/catalog",component:G,name:"Catalog"},{path:"/question",component:X,name:"Question"},{path:"/help",component:Z,name:"Help"},{path:"/score",component:nt,name:"Score"},{path:"/map",component:pt,name:"Map"}]}),vt=dt,mt=a("c0d6"),gt=a.n(mt),bt=a("bc3a"),ft=a.n(bt),_t=a("f309");o["default"].use(_t["a"]);var ht=new _t["a"]({}),Ct=a("d523"),yt=a.n(Ct),St=a("ead5"),kt=a.n(St);o["default"].config.productionTip=!1,o["default"].prototype.$axios=ft.a,o["default"].use(yt.a),o["default"].use(kt.a),new o["default"]({router:vt,store:gt.a,vuetify:ht,render:function(t){return t(x)},localStorage:{jadge1:{type:Boolean,default:!1},isCorrect1:{type:Boolean,default:!1},isCorrect2:{type:Boolean,default:!1},isCorrect3:{type:Boolean,default:!1},isCorrect4:{type:Boolean,default:!1},isCorrect5:{type:Boolean,default:!1},isCorrect6:{type:Boolean,default:!1},isCorrect7:{type:Boolean,default:!1},isCorrect8:{type:Boolean,default:!1},isCorrect9:{type:Boolean,default:!1},isCorrect10:{type:Boolean,default:!1},isCorrect11:{type:Boolean,default:!1},isCorrect12:{type:Boolean,default:!1},isCorrect13:{type:Boolean,default:!1},isCorrect14:{type:Boolean,default:!1},isCorrect15:{type:Boolean,default:!1},isCorrect16:{type:Boolean,default:!1},complete:{type:Boolean,default:!1}}}).$mount("#app")},5926:function(t,e,a){t.exports=a.p+"img/joho-kobokan.c8b26c69.jpg"},"651f":function(t,e,a){t.exports=a.p+"img/senkoka.01121d3a.jpg"},"669c":function(t,e,a){"use strict";a("c6b3")},7374:function(t,e,a){"use strict";a("de05")},7528:function(t,e,a){t.exports=a.p+"img/kankyokamae.2ee423aa.jpg"},"7cc2":function(t,e,a){t.exports=a.p+"img/johokogakuka.9deddedc.jpg"},"83d1":function(t,e,a){t.exports=a.p+"img/ict-center.61e997b7.jpg"},"9a2c":function(t,e,a){"use strict";a("d7bb")},c0d6:function(t,e){},c6b3:function(t,e,a){},cc0e:function(t,e,a){"use strict";a("41f5")},d7bb:function(t,e,a){},de05:function(t,e,a){},ee8a:function(t,e,a){"use strict";a("3a1c")}});
//# sourceMappingURL=app.d38a9b1e.js.map