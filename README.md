まだ制作途中ですが、質問があります。

## 郵便番号を入力すると住所を割り出してくれるアプリケーションです。

zipcloud という API を利用して住所を割り出しています。
途中の段階では、以下のようなコードが出ていました。
Access to XMLHttpRequest at 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=5650862' from origin 'http://localhost:3001' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

zipcode 以降は僕が入力したものですが、CORS という単語に目をつけて調べて行ったところ、クロスドメインという単語に当たりました。
そこで、以下のサイトを調べて読んでいたところ理解した点がこちらです。

#### 調べたサイト

1. [クロスオリジンリソース共有（CORS)と Access-Controll-Allow-Origin の関係性](https://qiita.com/eyexx/items/3341749e5dadcdf0e6ec)
2. [【CORS】クロスドメインによるエラーを解決する](https://developer.yukimonkey.com/article/20200227/)
3. [React で axios を使って JSONP のデータを取得する](https://qiita.com/nob3110/items/928c42a6481af85659d7)

#### 理解したこと

- ホストが異なるサーバーへのアクセスは基本的にできないようになっている。
- 2 によると API を叩く用のサーバーを作成する必要がある、？
- 1 によるとローカルの環境だけであれば機能する chrome の拡張機能がある。
- 3 によると題名の通り JSONP でクロスドメイン通信下？でも API を叩くことができる。

1 の[Access Control-Allow-Origin - Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related?hl=ja)を拡張機能として使えば僕のローカル環境では稼働しました。また、3 も実装したところ稼働はしました。
1 はローカル環境でしか起動しないので、今後は使えないなと思いました。

#### 気になったこと

- 新しくサーバーをたてて、API を叩く方法があるのでしょうか。
- クロスドメインについては「ホストが異なる場合はアクセスができないようになっている。」
  くらいの認識しかなく、もう少し勉強を続けますが、3 の解決方法でこれ以降も冒頭のようなエラーが出た場合はこの対処法で問題ないでしょうか。
