import React from "react";
import "./styles.scss";
//@ts-ignore
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skill from "../Skill/skill";
import { BsFillEnvelopeFill } from "react-icons/bs";

function Korea() {
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
          <p className="three">누군가와 같이</p>
          <p className="one">0 부터 1까지 개발 하는것이 즐겁다.</p>
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
      <p className="middle__big__text">유성재란</p>
      {/* </Fade> */}
      <div
        style={{
          height: "80px",
        }}
      />
      {/* <Fade bottom cascade> */}
      <div className="plane__text__container">
        [ 굿 리스너 유성재 ]
        <p className="plane__text">
          인간관계에 있어 저의 생각을 내세우기 보다는 상대방의 의견을 먼저
          듣고자 합니다. 대학 시절 프로젝트를 진행하던 중 자신의 의견을 선뜻
          밝히기 어려워하는 소극적인 학우가 있었습니다. 저는 조장으로써 그
          학우의 작은 목소리에 귀 기울이며 자신의 생각을 자유롭게 이야기할 수
          있도록 도왔습니다.
        </p>
        <p className="plane__text">
          하나의 목표를 위해 매번 토의하였고 이견이 있을 때는 상대방의 의견을
          먼저 경청하며 최적의 해결방안을 도출하기 위해 노력했습니다. 그 결과
          프로젝트를 성공적으로 완성할 수 있었습니다.
        </p>
        <p className="plane__text">
          이렇듯 쉽게 지나칠 수 있는 작은 의견들이 모여 시너지를 발산하는
          모습들을 통해 굿 리스너의 역할이 팀프로젝트에 매우 중요한 것임을
          확인할 수 있는 좋은 경험이 되었습니다. 그러므로 자신의 주장을 표현하는
          것도 중요하지만 그보다 중요한 것은 다른 이의 생각을 듣는 것이라
          생각합니다. 모두가 쉽게 지나치는 작은 목소리에도 귀 기울여 반응하는 굿
          리스너 유성재입니다.
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
      <p className="middle__big__text">아직 부족 하지만</p>
      <p className="middle__big__text">끈기있게 열심히 하고 있습니다.</p>
      <div className={"under__skills"} />
      <div className={"slider__container"}>
        <Slider {...settings}>
          <div>
            <Skill
              title={"Java"}
              contents={
                "자바(영어: Java, 문화어: 쟈바)는 썬 마이크로시스템즈의 제임스 고슬링(James Gosling)과 다른 연구원들이 개발한 객체 지향적 프로그래밍 언어이다. 1991년 그린 프로젝트(Green Project)라는 이름으로 시작해 1995년에 발표했다. 처음에는 가전제품 내에 탑재해 동작하는 프로그램을 위해 개발했지만 현재 웹 애플리케이션 개발에 가장 많이 사용하는 언어 가운데 하나이고, 모바일 기기용 소프트웨어 개발에도 널리 사용하고 있다. 현재 버전 10까지 출시했다.자바의 개발자들은 유닉스 기반의 배경을 가지고 있었기 때문에 문법적인 특성은 파스칼이 아닌 C++의 조상인 C 언어와 비슷하다. 자바를 다른 컴파일언어와 구분 짓는 가장 큰 특징은 컴파일된 코드가 플랫폼 독립적이라는 점이다. 자바 컴파일러는 자바 언어로 작성된 프로그램을 바이트코드라는 특수한 바이너리 형태로 변환한다. 바이트코드를 실행하기 위해서는 JVM(자바 가상 머신, Java Virtual Machine)이라는 특수한 가상 머신이 필요한데, 이 가상 머신은 자바 바이트코드를 어느 플랫폼에서나 동일한 형태로 실행시킨다. 때문에 자바로 개발된 프로그램은 CPU나 운영 체제의 종류에 관계없이 JVM을 설치할 수 있는 시스템에서는 어디서나 실행할 수 있으며, 이 점이 웹 애플리케이션의 특성과 맞아떨어져 폭발적인 인기를 끌게 되었다."
              }
            />
          </div>
          <div>
            <Skill
              title={"Javascript"}
              contents={
                "자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다. 자바스크립트는 본래 넷스케이프 커뮤니케이션즈 코퍼레이션의 브렌던 아이크(Brendan Eich)가 처음에는 모카(Mocha)라는 이름으로, 나중에는 라이브스크립트(LiveScript)라는 이름으로 개발하였으며, 최종적으로 자바스크립트가 되었다. 자바스크립트가 썬 마이크로시스템즈의 자바와 구문이 유사한 점도 있지만, 이는 사실 두 언어 모두 C 언어의 기본 구문에 바탕을 뒀기 때문이고, 자바와 자바스크립트는 직접적인 관련성이 없다. 이름과 구문 외에는 자바보다 셀프나 스킴과 유사성이 많다.2013년 1월 기준으로, 가장 최근 버전은 자바스크립트 1.8.5이고[3], 파이어폭스 3에서 지원된다. 표준 ECMA-262 3판에 대응하는 자바스크립트 버전은 1.5이다. ECMA스크립트는 쉽게 말해 자바스크립트의 표준화된 버전이다. 모질라 1.8 베타 1이 나오면서 XML에 대응하는 확장 언어인 E4X(ECMA-357)를 부분 지원하게 되었다. 자바스크립트는 브라우저마다 지원되는 버전이 다르다."
              }
            />
          </div>
          <div>
            <Skill
              title={"React"}
              contents={`컴퓨팅에서 리액트(React, React.js 또는 ReactJS)는 자바스크립트 라이브러리의 하나로서[2] 사용자 인터페이스를 만들기 위해 사용된다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다.

              리액트는 싱글 페이지나 모바일 애플리케이션의 개발 시 토대로 사용될 수 있다. 복잡한 리액트 애플리케이션들은 상태 관리, 라우팅, API와의 통신을 위한 추가 라이브러리의 사용이 일반적으로 요구된다.`}
            />
          </div>
          <div>
            <Skill
              title={"Node.js"}
              contents={`Node.js는 확장성 있는 네트워크 애플리케이션(특히 서버 사이드) 개발에 사용되는 소프트웨어 플랫폼이다. 작성 언어로 자바스크립트를 활용하며 Non-blocking I/O와 단일 스레드 이벤트 루프를 통한 높은 처리 성능을 가지고 있다.

              내장 HTTP 서버 라이브러리를 포함하고 있어 웹 서버에서 아파치 등의 별도의 소프트웨어 없이 동작하는 것이 가능하며 이를 통해 웹 서버의 동작에 있어 더 많은 통제를 가능케 한다.`}
            />
          </div>
          <div>
            <Skill
              title={"Redux"}
              contents={
                "Redux는 애플리케이션 상태를 관리하기위한 오픈 소스 JavaScript 라이브러리입니다. 사용자 인터페이스 구축을 위해 React 또는 Angular와 같은 라이브러리와 함께 가장 일반적으로 사용됩니다."
              }
            />
          </div>
          <div>
            <Skill
              title={"Express"}
              contents={`Express.js, 또는 간단히 익스프레스(Express)는 Node.js를 위한 웹 프레임워크의 하나로, MIT 허가서로 라이선스되는 자유-오픈 소스 소프트웨어로 출시되었다. 웹 애플리케이션, API 개발을 위해 설계되었다.[1] Node.js의 사실상의 표준 서버 프레임워크로 불리고 있다.

              원 제작자 TJ Holowaychuk는 이 소프트웨어를 시나트라에 영향을 받은 서버로 기술하고 있으며 이는 플러그인으로 이용 가능한 수많은 기능들을 갖추면서 크기는 상대적으로 최소한임을 의미한다. 익스프레스는 몽고DB 데이터베이스 소프트웨어, AngularJS 프론트엔드 프레임워크와 함께 MEAN 스택의 백엔드 구성 요소이다.`}
            />
          </div>
          <div>
            <Skill
              title={"C언어"}
              contents={`C는 1972년 켄 톰슨과 데니스 리치가 벨 연구소에서 일할 당시 새로 개발된 유닉스 운영 체제에서 사용하기 위해 개발한 프로그래밍 언어이다. 켄 톰슨은 BCPL언어를 필요에 맞추어 개조해서 "B"언어(언어를 개발한 벨 연구소의 B를 따서)라 명명했고, 데니스 리치가 이것을 개선하여 C 언어가 탄생했다. 유닉스 시스템의 바탕 프로그램은 모두 C로 작성되었고, 수많은 운영 체제의 커널 또한 C로 만들어졌다. 오늘날 많이 쓰이는 C++는 C에서 객체 지향형 언어로 발전된 것이다. 또 다른 다양한 최신 언어들도 그 뿌리를 C에 두고 있다.`}
            />
          </div>
          <div>
            <Skill
              title={"MySql"}
              contents={
                "MySQL은 세계에서 가장 많이 쓰이는 오픈 소스의 관계형 데이터베이스 관리 시스템(RDBMS)이다. 다중 스레드, 다중 사용자 형식의 구조질의어 형식의 데이터베이스 관리 시스템으로서 오라클이 관리 및 지원하고 있으며, Qt처럼 이중 라이선스가 적용된다. 하나의 옵션은 GPL이며, GPL 이외의 라이선스로 적용시키려는 경우 전통적인 지적재산권 라이선스의 적용을 받는다.위와 같은 지원 방식은 자유 소프트웨어 재단이 프로젝트에 저작권을 적용하는 방법과 비슷한 JBoss의 모델과 유사하다. 그러나 기반코드가 개인의 소유자에게 저작권이 있고 커뮤니티에 의해 개발되는 아파치 프로젝트와는 다르다.MySQL AB는 또한 MaxDB라고 불리는 MySQL AB와는 기반코드가 다른 데이터베이스 관리 시스템을 판매했으나 2007년 이래로 MaxDB는 SAP AG가 소유하고 있다."
              }
            />
          </div>
          <div>
            <Skill
              title={"Mongodb"}
              contents={
                "몽고DB(MongoDB←HUMONGOUS)는 크로스 플랫폼 도큐먼트 지향 데이터베이스 시스템이다. NoSQL 데이터베이스로 분류되는 몽고DB는 JSON과 같은 동적 스키마형 도큐먼트들(몽고DB는 이러한 포맷을 BSON이라 부름)을 선호함에 따라 전통적인 테이블 기반 관계형 데이터베이스 구조의 사용을 삼간다. 이로써 특정한 종류의 애플리케이션을 더 쉽고 더 빠르게 데이터 통합을 가능케 한다. 아페로 GPL과 아파치 라이선스를 결합하여 공개된 몽고DB는 자유-오픈 소스 소프트웨어이다.뉴욕시에 기반을 둔 회사인 10gen (현재의 몽고DB)에서 2007년 10월, 계획된 PaaS(서비스로서의 플랫폼) 제품의 구성 요소로 처음 개발하였으며 10gen이 상용 지원 및 기타 서비스를 제공한 2009년에 오픈 소스 개발 모델로 전향하였다. 그 뒤로 몽고DB는 크레이그리스트, 이베이, 포스퀘어, 소스포지, 뉴욕 타임즈, 구글, 페이스북와 같은 수많은 주요 웹사이트 및 서비스에 백엔드 소프트웨어로 채택되고 있다. 몽고DB는 가장 유명한 NoSQL 데이터베이스 시스템이다"
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
                <span>이꽃은</span>
                <span>뭐야?</span>
              </div>
            </div>
            <div className="text__container">
              <div className="inner__container">
                <p className="title">この花は何？</p>
                <p className="text">
                  React.js, Redux, Node.js, Hooks, MongoDB, Redux-Thunk, Express
                  를 사용해서 만든 홈페이지 입니다. 꽃의 정보나 꽃길을
                  알려줍니다,
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
                  React.js 를 사용해서 만든 홈페이지 입니다. 간단하게 TODOLSIT를
                  써서 보는것이 가능한 홈페이지 입니다.
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
                React.js 를 사용해서 만든 홈페이지 입니다. 영화의
                정보나미리보기를 볼수 있게 만든 프로젝트입니다.
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
                <p className="text">아직 개발중에 있습니다.</p>
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
      <p className="middle__big__text">조금더 보기 위해서는</p>
      <p className="middle__big__text">여기를 참조 해주시면 감사합니다.</p>

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

export default Korea;
