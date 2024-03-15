//esto es un hook

import { useState } from "react";

export function useCounter(stock){      //se puede exportar desde aca, o con el export default
    const [count, setCount] = useState(1)

    const restar = () => {
        if(count > 0){
            setCount(count -1)
        }
    }
    const sumar = () => {
        if(count < stock){
            setCount(count +1)
        }
    }
    return {count, restar, sumar}
}