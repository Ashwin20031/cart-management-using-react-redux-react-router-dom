import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increase, decrease, calculateTotals, clearCart, removelast } from "../../features/cartslice.js";
import styles from "./index.module.css";


function Cart() {
    const { cartItems, amount, total } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(calculateTotals())

    }, [amount, total, dispatch])


    console.log(cartItems)
    return (
        <div className={styles.container}>
            <h1 className={styles.page}>Your cart</h1>

            {cartItems.map((item, index) => {
                return (
                    <div key={index} className={styles.box}>
                        <div>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div>
                            <p className={styles.price}> Price: ${item.price}</p>
                            <button className={styles.btn} onClick={() => {
                                dispatch(removeItem(item.id))
                            }}>Remove</button>
                            <div style={{ display: "flex", marginTop: "1rem" }}>

                                <button className={styles.sbtn} onClick={() => {
                                    if (item.amount === 1) {

                                        dispatch(removelast(item));
                                        return;
                                    }
                                    dispatch(decrease(item.id))
                                }}>-</button>
                                <p style={{ padding: "0rem 1rem" }}>{item.amount}</p>
                                <button className={styles.sbtn} onClick={() => {
                                    dispatch(increase(item.id))
                                }}>
                                    +
                                </button>

                            </div>
                        </div>

                    </div>
                )
            })}
            {(total === 0)
                ? (<div className={styles.ecartdetail}><h1 style={{color:"black"}}>Cart is empty</h1>
                    <Link to="/" className={styles.btn}>Shop now</Link>
                </div>)
                : (<div className={styles.cartdetail}><h2>Items: {amount}  <h2>Total: Rs.{total}</h2></h2>
                    <button className={styles.btn} onClick={() => { dispatch(clearCart()) }}>Clear cart</button>
                </div>)}
        </div>
    );

}

export default Cart