import styles from './Header.module.css';
import { FaCartPlus } from "react-icons/fa";
import { useState } from 'react';
import Order from '@components/Order';

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(el => sum += Number.parseFloat(el.price))
    return (
        <>
        {props.orders.map(el => (
            <Order key={el.id} item={el} onDelete={props.onDelete}/>
            ))}
        <p className={styles.sum}>Итого: {new Intl.NumberFormat().format(sum)}$</p>
        </>
    )
}

const showNothing = () => {
    return (
        <div className={styles.empty}>
            <h2>Корзина пуста</h2>
        </div>
    )
}

const Header = (props) => {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div className={styles.nav}>
                <span className={styles.logo}>House Staff</span>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>About us</li>
                    <li className={styles.nav__item}>Contact</li>
                    <li className={styles.nav__item}>User</li>
                </ul>
                <FaCartPlus onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart ${cartOpen && 'active'}`}/>

                {cartOpen && (
                    <div className={styles.shop__cart}>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                        {/* {props.orders.map(el => (
                            <Order key={el.id} item={el}/>
                        ))} */}
                    </div>
                    
                )}
            </div>
            <div className={styles.presentation}></div>
        </header>
    )
}



export default Header;