import { useParams } from "react-router-dom";
import styled from "styled-components";

let Btn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  padding: 10px;
`;

function DetailPage(props) {
  let { id } = useParams();
  let product = props.shoseData.find((item) => item.id == id);

  return (
    <div className="container">
      <Btn bg="blue">버튼</Btn>
      <Btn bg="yellow">버튼</Btn>
      <div className="row">
        <div className="col-md-6">
          <img src={props.shoseImage[product.id]} width="100%" alt="신발" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
