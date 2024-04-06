import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "블로그 제목임";
  let [titleOfPost, setTitleOfPosst] = useState([
    "남자 코트 추천",
    "강남 짬뽕 맛집",
    "잠심 짜장면 맛집"
  ]);
  let [likeCount, setLikeCount] = useState(0);

  return (
    <div className="App">
     <div className="black-nav">
      <h4>
        블로그임
      </h4>
     </div>
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
      <h4>{titleOfPost[2]}</h4>
      <p>2024월 04월 06일 발생</p>
     </div>
    </div>
  );
}
export default App;
