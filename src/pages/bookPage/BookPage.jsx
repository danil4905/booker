import classes from './bookPage.module.scss'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getBook } from '../../redux/actions';
import defaultBook from '../../assets/defaultBook.png'
import Preloader from '../../components/preloader/Preloader';

const BookPage = (props) => {
    const dispatch = useDispatch();
    const book = useSelector(state => state.book.content)
    useEffect(() => {
        dispatch(getBook(props.match.params.id))
    }, []);
    console.log(book)
    if (book !==null) {
    return (
        <main className={classes.wrapper}>
        <section className={classes.imageWrapper}>
                <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : defaultBook} alt="book" />
        </section>
        <section className={classes.infoWrapper}>
            <div className={classes.categories}>
                    {book.volumeInfo.categories ? book.volumeInfo.categories.join():''}
            </div>
            <div className={classes.titleWrapper}>
                    <h2 className={classes.title}>{book.volumeInfo.title}</h2>
            </div>
            <div className={classes.authorWrapper}>
                    <span className={classes.author}>{book.volumeInfo.authors ? book.volumeInfo.authors:''}</span>
            </div>
            <div className={classes.descriptionWrapper}>
                <p className={classes.description}>
                        {book.volumeInfo.description ? book.volumeInfo.description:''}
                </p>
            </div>
        </section>  
        </main>
    )
    }
    else return (
        <div className={classes.preview}>
            <Preloader />
        </div>
    )
}

export default BookPage;