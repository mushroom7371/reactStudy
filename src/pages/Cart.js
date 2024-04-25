import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCount, increaseAge } from "../store";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <h1>
        {state.user.name} {state.user.age}의 장바구니
      </h1>
      <Button
        onClick={() => {
          dispatch(increaseAge(1));
        }}
      >
        버튼
      </Button>
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
          {state.product.map((product, i) => {
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
      <td>{product.product.id}</td>
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
