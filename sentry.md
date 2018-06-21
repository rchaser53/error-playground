sentry
  - sourcemapはあるのでminifyも多分いける[要調査]
    - https://docs.sentry.io/clients/javascript/sourcemaps/#raven-js-sourcemaps  
    - おそらくurl指定の物を使う?
      - (例): https://developer.mozilla.org/ja/docs/Tools/Debugger/How_to/Use_a_source_map
  - 一般
    - IPアドレス
    - OS
    - ブラウザ
  - vue
    - vueのpluginある
    - methodとかならpluginを宣言するだけでOK
    - templateのエラーは駄目
    - どこのコンポーネントで落ちた、どのライフサイクルでとか分かる
  - エンドポイントが丸見え
    - https://docs.sentry.io/clients/javascript/#configuring-the-client
      - limit
  - 結構やれること多い
    - エラーの箇所に応じてエラーメッセージを送る先を変更できる[要調査]
      - https://docs.sentry.io/clients/javascript/#adding-context
    - filterとかでいらないエラーは取り除ける
    - パンくずリスト的なものでエラーが追える[要調査]
      - https://docs.sentry.io/clients/javascript/#breadcrumbs

  - ブラウザだいたいOK
    - https://docs.sentry.io/clients/javascript/#browser-compatibility
      - アプリの方を見る

  - お金
    - https://sentry.io/pricing/
      - limit調べる[要調査]
    
  - 全体にかける
    - 通信の失敗などは握り潰す 
    => 実装のミスが拾えるようになる