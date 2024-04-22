import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let product = useSelector((state) => {
    return state.product;
  });

  return (
    <div>
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
  return (
    <tr>
      <td>1</td>
      <td>{product.product.name}</td>
      <td>{product.product.count}</td>
      <td>hi~</td>
    </tr>
  );
}

export default Cart;
