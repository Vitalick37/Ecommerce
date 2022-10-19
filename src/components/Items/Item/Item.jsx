
import styles from './Item.module.css';

const Item = (props) => {
    return (
        <div className={styles.item}>
            <img src={"./img/" + props.item.img} alt="furniture"/>
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <p>{props.item.price}$</p>
            <div className={styles.add_to_card} onClick={() => props.onAdd(props.item)}>+</div>   
        </div>
    )
}




export default Item;

