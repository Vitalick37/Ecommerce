import styles from "./Order.module.css";

const Order = (props) => {
    return (
    <div className={styles.item}>
        <img src={"./img/" + props.item.img} alt="furniture" />
        <h2>{props.item.title}</h2>
        <p>{props.item.price}$</p>
    </div>
    );
};

export default Order;
