import styles from "./Order.module.css";
import { FaTrashRestoreAlt } from 'react-icons/fa';

const Order = (props) => {
    return (
    <div className={styles.item}>
        <img src={"./img/" + props.item.img} alt="furniture" />
        <h2>{props.item.title}</h2>
        <p>{props.item.price}$</p>
        <FaTrashRestoreAlt className={styles.delete} onClick={() => props.onDelete(props.item.id)}/>
    </div>
    );
};

export default Order;
