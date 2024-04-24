import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../store";

function Cart() {
  let product = useSelector((state) => {
    return state.product;
  });

  let name = useSelector((state) => {
    return state.user;
  });

  return (
    <div>
      <h1>{name}의 장바구니</h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, i) => {
            return <TableRow key={i} product={product} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

function TableRow(product) {
  let dispatch = useDispatch();
  return (
    <tr>
      <td>1</td>
      <td>{product.product.name}</td>
      <td>{product.product.count}</td>
      <td>
        <button
          onClick={() => {
            dispatch(setCount({ id: product.product.id, count: 1 }));
          }}
        >
          수량+
        </button>
      </td>
    </tr>
  );
}

export default Cart;
