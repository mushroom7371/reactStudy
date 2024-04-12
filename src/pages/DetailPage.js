import { useParams } from "react-router-dom";

function DetailPage(props) {
  let { id } = useParams();
  let product = props.shoseData.find((item) => item.id == id);

  return (
    <div className="container">
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
