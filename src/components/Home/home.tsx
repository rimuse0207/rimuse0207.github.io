import React from "react";
import "./styles.scss";
//@ts-ignore
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skill from "../Skill/skill";
import { BsFillEnvelopeFill } from "react-icons/bs";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="Home">
      <div className="top">
        <div className="black__box">
          <text className="span">SJ</text>
        </div>
      </div>
      <div
        style={{
          height: "167px",
        }}
      />
      <div className="my__name">
        <Fade left cascade>
          <div className="short_line"></div>
          <span className="name">Yoo sungjae</span>
        </Fade>
      </div>
      <div
        style={{
          height: "80px",
        }}
      />
      <div className="introduce__me">
        <Fade left cascade>
          <p className="three">誰かと一緒に</p>
          <p className="one">０から１まで開発するのが楽しい</p>
        </Fade>
      </div>
      <div className="under__introduce__me" />
      {/* <Fade bottom cascade> */}
      <div className="big__image">
        <img src={require("../../assets/jpana.jpg")} alt="" />
      </div>
      {/* </Fade> */}
      <div
        style={{
          height: "180px",
        }}
      />
      <div className="my__name">
        {/* <Fade left cascade> */}
        <div className="short_line"></div>
        <span className="name">Who I am?</span>
        {/* </Fade> */}
      </div>
      <div
        style={{
          height: "40px",
        }}
      />
      {/* <Fade left cascade> */}
      <p className="middle__big__text">ユソンジェとは</p>
      {/* </Fade> */}
      <div
        style={{
          height: "80px",
        }}
      />
      {/* <Fade bottom cascade> */}
      <div className="plane__text__container">
        <p className="plane__text">
          「グッドリスナーユソンジェ」
          　私は人間関係において自分の意見を言うよりも先に、相手の意見を聞くことを心がけています。
          　大学のプロジェクトを進行している際に自分の意見を言えない消極的な学生がいました。
        </p>
        <p className="plane__text">
          私はリーダーとしてその学生の小さな声にも耳を傾けて、その学生が自分の意見を言えるように手助けをしました。
          一つの目標のために毎回議論し、異見がある時は相手の意見を先に聞き入れて適切な結論を出せるように努力しました。
          その結果プロジェクトを最後までやり遂げることができました。
        </p>
        <p className="plane__text">
          このように小さな意見が集まった時にシナジー効果を得ることができるとわかり、リスナーの役割がチームプロジェクトに最も重要なものであると感じました。
          故に、自分の意見を表現するのも重要ですが、それよりもさらに他の人の意見を聞くことが重要だと学びました。
          私は多くの人が軽視しがちな小さな声にも耳を傾けて反応するグッドリスナーユソンジェです。
        </p>
        <div
          style={{
            height: "40px",
          }}
        />

        <div
          style={{
            height: "40px",
          }}
        />
        <p className="plane__text"></p>
      </div>

      <div style={{ height: "280px" }} />

      <div className="my__name">
        <div className="short_line"></div>
        <span className="name">My skills</span>
      </div>
      <div style={{ height: "40px" }} />
      <p className="middle__big__text">まだ不足な部分が多いですが</p>
      <p className="middle__big__text">誰よりも頑張ります。</p>
      <div className={"under__skills"} />
      <div className={"slider__container"}>
        <Slider {...settings}>
          <div>
            <Skill
              title={"Java"}
              contents={
                "Java reduces costs, shortens developer timeframes, drives innovation, and improves application services as the programming language of choice for enterprise architecture, finance, and HR. Java is used in many industries including manufacturing, automotive, insurance, and public sector. Javaは、コストを削減し、開発者の時間枠を短縮し、イノベーションを促進し、エンタープライズアーキテクチャ、財務、およびHRに最適なプログラミング言語としてアプリケーションサービスを改善します。 Javaは、製造、自動車、保険、公共部門などの多くの業界で使用されています。"
              }
            />
          </div>
          <div>
            <Skill
              title={"Javascript"}
              contents={
                "JavaScript はウェブページにて複雑な機能をできるようにするプログラミング言語です —ウェブページが読み込まれるたびに、単にあなたが見ている静的な情報を表示する以上のことをしています— 更新されたコンテンツの定期表示や、インタラクティブな地図や、2D/3D グラフィックのアニメーションや、ビデオジュークボックスのスクロールなど — たぶん JavaScript が組み込まれています。ウェブ技術をケーキだとするとこれは 3 つ目の層で、他の 2 つ (HTML と CSS) は学習エリアの他の部分でもっと詳しく扱ってきました。"
              }
            />
          </div>
          <div>
            <Skill
              title={"React"}
              contents={`React (リアクト) は、Facebookとコミュニティによって開発されているユーザインタフェース構築のためのJavaScriptライブラリである。React.jsまたはReactJSの名称でも知られている。Reactはシングルページアプリケーションやモバイルアプリケーションの開発におけるベースとして使用することができる。複雑なReactアプリケーションでは通常、状態管理（英語版）・ルーティング・APIとの対話のための追加のライブラリが必要となる。`}
            />
          </div>
          <div>
            <Skill
              title={"Node.js"}
              contents={`Node.js はV8 JavaScriptエンジン上に構築されたJavaScript実行環境の1つである。イベント化された入出力を扱うサーバーサイドJavaScript環境であり、Webサーバなどのスケーラブルなネットワークプログラムの記述を意図している。ライアン・ダールによって2009年に作成され、ダールを雇用しているJoyentの支援により成長している`}
            />
          </div>
          <div>
            <Skill
              title={"Redux"}
              contents={
                "Reduxは、ReactJSが扱うUIのstate(状態)を管理をするためのフレームワークです。Reactではstateの管理するデータフローにFluxを提案していますが、ReduxはFluxの概念を拡張してより扱いやすく設計されています。Reduxはstateを管理するためのライブラリーなので、React以外にもAngularJSやjQueryなどと併せて使用することもできますが、Reactと使用するのが一番相性がいいです。"
              }
            />
          </div>
          <div>
            <Skill
              title={"Express"}
              contents={`Node.jsのMVCフレームワークとして人気なExpressとは何なのか、Expressをインストールする流れを紹介しているので、ぜひ知っておきましょう。
              Node.jsを使う企業ではExpressをフレームワークとして使っているケースも多いので、Node.jsのエンジニアになりたい人は実際にインストールして使ってみると良いでしょう。`}
            />
          </div>
          <div>
            <Skill
              title={"C言語"}
              contents={`C言語（シーげんご、英: C programming language）は、1972年にAT&Tベル研究所のデニス・リッチーが主体となって開発した汎用プログラミング言語である。英語圏では「C language」または単に「C」と呼ばれることが多い。日本でも文書や文脈によっては同様に「C」と呼ぶことがある。制御構文などに高水準言語の特徴を持ちながら、ハードウェア寄りの記述も可能な低水準言語の特徴も併せ持つ。基幹系システムや、動作環境の資源制約が厳しい、あるいは実行速度性能が要求されるソフトウェアの開発に用いられることが多い。後発のC++やJava、C#など、「C系」と呼ばれる派生言語の始祖でもある。ANSI、ISO、またJISにより言語仕様が標準規格化されている。`}
            />
          </div>
          <div>
            <Skill
              title={"MySql"}
              contents={
                "MySQL（まい・えすきゅーえる）は、オープンソースのリレーショナルデータベース管理システム(RDBMS)である。その名前は、共同設立者のMichael Wideniusの娘の名前である「My」と、Structured Query Languageの略称である「SQL」を組み合わせたものである。MySQLは、GNU General Public Licenseの条件に基づいたフリーでオープンソースのソフトウェアであり、さまざまなプロプライエタリライセンスでも利用可能である。MySQLは、サン・マイクロシステムズ(現在のオラクル)に買収されたスウェーデンの企業MySQL ABが所有、出資していた。2010年にオラクルがサンを買収したとき、WideniusはオープンソースのMySQLプロジェクトをフォークしてMariaDBを作った。MySQLは、LAMP Webアプリケーションソフトウェアスタック（LAMPは、Linux、Apache、MySQL、Perl/PHP/Pythonの頭字語）のコンポーネントである。MySQLは、Drupal、Joomla、phpBB、WordPressなど、多くのデータベース駆動型Webアプリケーションで使用されている。MySQLは、Facebook、Flickr、MediaWiki、Twitter、YouTubeなど、多くの人気Webサイトでも使用されている。"
              }
            />
          </div>
          <div>
            <Skill
              title={"Mongodb"}
              contents={
                "MongoDBはRDBMSではなく、いわゆるNoSQLと呼ばれるデータベースに分類されるものである。RDBMSのようにレコードをテーブルに格納するのではなく、「ドキュメント」と呼ばれる構造的データをJSONライクな形式で表現し、そのドキュメントの集合を「コレクション」として管理する（このデータの物理的な格納はBSONと呼ばれるJSONのバイナリ版といえる形式で行われる）。コレクションはRDBMSのような固定的なスキーマを持たない。ドキュメントには複雑な階層構造を持たせることもでき、それらの構造に含まれるフィールドを指定したクエリやインデクス生成も簡単な指定によって行える。RDBMSのように高度な結合操作を効率的に行うことはできないが、データの追加・更新・削除・クエリは高速に行うことができる。また、アプリケーションは自身の構造やデータ型に合った自然な形でデータを格納することができるため、扱うデータの特性によっては、RDBMSよりも容易かつ迅速に開発を行える可能性がある。"
              }
            />
          </div>
        </Slider>
      </div>

      {/* </Fade> */}
      <div
        style={{
          height: "340px",
        }}
      />
      <div className="recent_projects__container">
        <div className="left">
          <div className="top">
            <div className="my__name">
              <div className="short_line"></div>
              <span className="name">Recent projects</span>
            </div>
            <div style={{ height: "40px" }} />
            <p className="middle__big__text">Thoughtfully designed,</p>
            <p className="middle__big__text">confidently crafted.</p>
          </div>
          <div
            style={{
              height: "40px",
            }}
          />
          <div className="image__card__container" onClick={goToBibleBot}>
            <div className="image__container">
              <img id={"image1"} src={require("../../assets/flower.jpg")} />
              <div className="text__container2">
                <span>この花は</span>
                <span>何？</span>
              </div>
            </div>
            <div className="text__container">
              <div className="inner__container">
                <p className="title">この花は何？</p>
                <p className="text">
                  React.js, Redux, Node.js, Hooks, MongoDB, Redux-Thunk, Express
                  を使用して作ったプロジェクトです。
                  花の情報や花道を教えてくれます。
                </p>
              </div>
            </div>
          </div>
          <div className="second__card" onClick={goToTredulerTodo}>
            <div className="image__container">
              <img src={require("../../assets/note.jpg")} alt="" />
              <div className="text__container__in__image__container">
                <span>TODO</span>
                <span>LIST</span>
              </div>
            </div>
            <div className="text__container">
              <div className="inner__container">
                <p className="title">TODO List</p>
                <p className="text">
                  React.js を使用して作ったプロジェクトです。
                  簡単にTODOListを書くことができるプロジェクトです。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "80px" }} />
        <div className="right">
          <div className="image__container" onClick={goToAppStore}>
            <img src={require("../../assets/net.jpg")} alt="" />
            <div className="text__in__container">
              <span>NetFlix</span>
              <span>Clone</span>
            </div>
          </div>
          <div className="text__container" onClick={goToAppStore}>
            <div className="inner__container">
              <p className="title">NetFlix Clone</p>
              <p className="text">
                React.js を使用して作ったプロジェクトです。
                映画の情報やプレビューを見ることができるプロジェクトです。
              </p>
            </div>
          </div>
          <div className="second__card">
            <div className="image__container">
              <img src={require("../../assets/image4.jpg")} alt="" />
              <div className="text__container__in__image__container">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="text__container">
              <div className="inner__container">
                <p className="title"></p>
                <p className="text">まだ考えています。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "280px" }} />

      <div className="school">
        <div className="my__name">
          <div className="short_line"></div>
          <span className="name">University</span>
        </div>
        <div style={{ height: "40px" }} />
        <p className="middle__big__text">Small,</p>
        <p className="middle__big__text">but strong</p>
        <div style={{ height: "100px" }} />
        <div className="container">
          <div className="left">
            <div className="text__container">
              <p>
                Korea Bible University is a university located in Nowon-Gu Seoul
                si. Computer software major’s history is not long however
                produced a lot of great developers so I’m very proud of my
                university
              </p>
            </div>
          </div>
          <div style={{ width: "40px" }} />
          <div className="right">
            <img src={require("../../assets/kbu.jpg")} alt="" />
            <div onClick={goToKBUSite} className="text__container">
              <p>KOREA</p>
              <p>BIBLE</p>
              <p>University</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "350px" }} />
      <div className="my__name">
        <div className="short_line"></div>
        <span className="name">Other sites</span>
      </div>
      <div style={{ height: "40px" }} />
      <p className="middle__big__text">もっと見るためには</p>
      <p className="middle__big__text">こちらを参考してください</p>

      <div className="introduce__youtube">
        <div className="title">Github</div>
        <div onClick={goToGitHub} className="youtube__popular__post__container">
          <div className="me__container">
            <div className="profile__image__container">
              <img
                src="https://avatars1.githubusercontent.com/u/34573243?s=460&u=f4ac4eb7988c7d89fcfa84738baebcbe7e1fcb61&v=4"
                alt="medium donggyu profile image"
              />
            </div>
            <div className="my__info__container">
              <div className="name__container">
                <p>Yoo Sung Jae</p>
              </div>
              <div className="date__container">
                <p className="date">Yoo Sung Jae</p>
                <span>·</span>
                <p className="read">2020年</p>
              </div>
            </div>
          </div>
          <div className="post__image__container">
            <img src={require("../../assets/github.png")} alt="image" />
          </div>
          <div className="title">
            <p>My Github</p>
          </div>
          <div className="contents">
            <p>You can check my github here!!!</p>
          </div>
        </div>
      </div>

      <div
        onClick={composingEmail}
        className="button__to__send__email__to__me__container"
      >
        <BsFillEnvelopeFill className={"email__icon"} />
        <span>S</span>
        <span>E</span>
        <span>N</span>
        <span>D</span>
      </div>
    </div>
  );

  function goToGitHub() {
    window.open("https://github.com/rimuse0207");
  }

  function goToTredulerTodo() {
    window.open("https://rimuse0207.github.io/TodoList");
  }

  function goToKBUSite() {
    window.open("https://www.bible.ac.kr/");
  }

  function composingEmail() {
    window.open("https://mail.google.com/");
  }

  function goToAppStore() {
    window.open("https://rimuse0207.github.io/netflixClone/");
  }

  function goToBibleBot() {
    window.open("https://github.com/rimuse0207/reflowerFrontEnd");
  }
}

export default Home;
