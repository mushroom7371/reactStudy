import './App.css';
import { useState } from 'react';

function App() {

  let [titleOfPost, setTitleOfPosst] = useState([
    "남자 코트 추천",
    "강남 짬뽕 맛집",
    "잠심 짜장면 맛집"
  ]);
  let [likeCount, setLikeCount] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
     <div className="black-nav">
      <h4>블로그임</h4> <button onClick={() => {
        let copy = [...titleOfPost];
        copy[0] = '여자 코트 추천';
        setTitleOfPosst(copy);
      }}>첫번째 글 제목 바뀌는 버튼</button>
     </div>
     <button onClick={() =>{
      let arrayCopy = [...titleOfPost];
      arrayCopy.sort();
      setTitleOfPosst(arrayCopy);
     }}>제목 정렬 버튼</button>
     <div className='list'>
      <h4>{titleOfPost[0]}
        <span onClick={() => {setLikeCount(likeCount + 1)}}> 👍 </span> { likeCount }
      </h4>
      <p>2024월 04월 06일 발생</p>
     </div>
     <div className='list'>
      <h4>{titleOfPost[1]}</h4>
      <p>2024월 04월 06일 발생</p>
     </div>
     <div className='list'>
      <h4 onClick={() =>{setModal(!modal)}}>{titleOfPost[2]}</h4>
      <p>2024월 04월 06일 발생</p>
     </div>

     {
      modal ? <Modal></Modal> : null
     }

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
     <h2>제목</h2>
     <p>날짜</p>
     <p>상세 내용</p>
    </div>
  )
}

export default App;
