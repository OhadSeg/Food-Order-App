import { useContext, useEffect, useState } from "react"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-context"

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartctx = useContext(CartContext);
    const { items } = cartctx;
    
    const numberOfCartItems = items.reduce((currNumber,item)=> { 
        return currNumber + item.amount

    },0 );


    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
    useEffect(()=>{
        
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true)
        //we'll remove the bump css class animation after it was finish
        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false);
        },300);
        
        //Cleanup function
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return(
        <button className={btnClasses} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart </span>
            <span className={classes.badge}> {numberOfCartItems} </span>
        </button>
    )
}

export default HeaderCartButton;