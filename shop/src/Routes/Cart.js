import {Table} from 'react-bootstrap';

function Cart() {
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
                    <tr>
                        <th>1</th>
                        <th>안녕</th>
                        <th>하세</th>
                        <th>요</th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default Cart;