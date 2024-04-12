import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage(props) {
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  });

  let { id } = useParams();
  let product = props.shoseData.find((item) => item.id == id);
  let [alert, setAlert] = useState(true);

  return (
    <div className="container">
      {alert ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}

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
