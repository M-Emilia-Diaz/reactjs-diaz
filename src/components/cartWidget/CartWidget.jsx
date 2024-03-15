import { GiShoppingCart } from "react-icons/gi"
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({counter}) => {
    return (
    <div style={{display:'flex'}}>
        <Badge bg="danger">{counter}</Badge>
        <GiShoppingCart color='violet' fontSize={'1.5rem'}/>
    
    </div>
    )
}

export default CartWidget