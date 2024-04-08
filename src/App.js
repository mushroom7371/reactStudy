import "./App.css";
import { useState } from "react";

function App() {
  let [titleOfPost, setTitleOfPosst] = useState([
    "남자 코트 추천",
    "강남 짬뽕 맛집",
    "잠심 짜장면 맛집",
  ]);
  let [likeCount, setLikeCount] = useState([0, 0, 0]);
  let [titleIndex, setTitleIndex] = useState(0);
  let [modal, setModal] = useState(false);
  let changeTitle = () => {
    let copy = [...titleOfPost];
    copy[0] = "여자 코트 추천";
    setTitleOfPosst(copy);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button
        onClick={() => {
          changeTitle();
        }}
      >
        첫번째 글 제목 바뀌는 버튼
      </button>
      <button
        onClick={() => {
          let arrayCopy = [...titleOfPost];
          arrayCopy.sort();
          setTitleOfPosst(arrayCopy);
        }}
      >
        제목 정렬 버튼
      </button>
      {titleOfPost.map(function (title, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setTitleIndex(i);
                setModal(!modal);
              }}
            >
              {titleOfPost[i]}
              <span
                onClick={() => {
                  let countCopy = [...likeCount];
                  countCopy[i]++;
                  setLikeCount(countCopy);
                }}
              >
                👍
              </span>
              {likeCount[i]}
            </h4>
            <p>2024월 04월 06일 발생</p>
          </div>
        );
      })}

      {modal ? (
        <Modal
          titleOfPost={titleOfPost}
          changeTitle={changeTitle}
          titleIndex={titleIndex}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.titleOfPost[props.titleIndex]}</h2>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={props.changeTitle}>글수정</button>
    </div>
  );
}

export default App;
