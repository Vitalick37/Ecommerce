
import styles from './Items.module.css';
import Item from '@components/Items/Item';

const Items = (props) => {
    return (
        <main>
            {props.items.map(el => (
                <Item  key={el.id} item={el} onAdd={props.onAdd} />
            ))}
        </main>
    )
}




export default Items;

