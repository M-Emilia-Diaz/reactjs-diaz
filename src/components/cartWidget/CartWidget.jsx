import { GiShoppingCart } from "react-icons/gi"
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({counter}) => {
    const {cartQuantity} = useContext(CartContext)

    return (
    <div style={{display:'flex'}}>
        {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        <GiShoppingCart color='violet' fontSize={'1.5rem'}/>
    </div>
    )
}

export default CartWidget