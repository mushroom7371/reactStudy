import "./App.css";
import { useState } from "react";

function App() {
  let [titleOfPost, setTitleOfPosst] = useState([
    "남자 코트 추천",
    "강남 짬뽕 맛집",
    "잠심 짜장면 맛집",
  ]);
  let [likeCount, setLikeCount] = useState([0, 0, 0]);
  let [date, setDate] = useState([
    "2024년 4월 6일",
    "2024년 4월 6일",
    "2024년 4월 6일",
  ]);
  let [titleIndex, setTitleIndex] = useState(0);
  let [title, setTitle] = useState("");
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
                onClick={(e) => {
                  e.stopPropagation();
                  let countCopy = [...likeCount];
                  countCopy[i]++;
                  setLikeCount(countCopy);
                }}
              >
                👍
              </span>
              {likeCount[i]}
            </h4>
            <p>{date[i]}</p>
            <button
              onClick={() => {
                let copy = [...titleOfPost];
                copy.splice(i, 1);
                setTitleOfPosst(copy);
                let copyLike = [...likeCount];
                copyLike.splice(i, 1);
                setLikeCount(copyLike);
                let copyDate = [...date];
                copyDate.splice(i, 1);
                setDate(copyDate);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (title === "") {
            alert("제목을 입력해주세요");
            return;
          }
          let copy = [...titleOfPost];
          copy.unshift(title);
          setTitleOfPosst(copy);
          let copyLike = [...likeCount];
          copyLike.unshift(0);
          setLikeCount(copyLike);
          let copyDate = [...date];
          let currentDate = new Date();
          let year = currentDate.getFullYear();
          let month = currentDate.getMonth() + 1;
          let day = currentDate.getDate();
          copyDate.unshift(year + "년 " + month + "월 " + day + "일");
          setDate(copyDate);
        }}
      >
        글발행
      </button>

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
