import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage(props) {
  useEffect(() => {
    setTimeout(() => {
      setFade("endDetailPage");
    }, 100);

    setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      setFade("");
    };
  }, []);

  let { id } = useParams();
  let product = props.shoseData.find((item) => item.id == id);
  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState(0);
  let imagePaths =
    "https://codingapple1.github.io/shop/shoes" + (product.id + 1) + ".jpg";
  let [fade, setFade] = useState("");

  useEffect(() => {
    let str = inputData;
    let checkNumber = /^[0-9]*$/;

    if (!checkNumber.test(str)) {
      window.alert("숫자를 입력하세요.");
    }
  }, [inputData]);

  return (
    <div className={"container startDetailPage " + fade}>
      {alert ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img src={imagePaths} width="100%" alt="신발" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        <input
          id="inputText"
          onChange={() => {
            setInputData(document.getElementById("inputText").value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default DetailPage;
