import classes from './bookItem.module.scss'
import {Link} from 'react-router-dom';
import defaultBook from '../../assets/defaultBook.png'

const BookItem = ({id,image,title,category,info}) => {
    function showShort (value,count) {
        if(value) {
            if (typeof(value) === 'object') value = value.join();
            if (value.length <= count) return value;
            else return value.substring(0, count) + "..."
        }
        else return '';
    }
    return(
        <Link to={`/book/${id}`}>
            <div className={classes.wrapper}>
                <div className={classes.imageWrapper}>
                    <img src={image ? image : defaultBook} alt="Icon"  className={classes.imageItem}/>
                </div>
                <div className={classes.infoWrapper}>
                    <span className={classes.category}>{category ? category:'No category'}</span>
                    <h4 className={classes.title}>{showShort(title, 30)}</h4>
                    <p className={classes.mainInfo}>{showShort(info,20)}</p>
                </div>
            </div>
        </Link>
    )
}
export default BookItem;