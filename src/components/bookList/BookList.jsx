import classes from './bookList.module.scss';
import BookItem from '../bookItem/BookItem';
import { useSelector } from 'react-redux';
import Preloader from '../preloader/Preloader';
import { useEffect } from 'react';
import Pagination from '../pagination/Pagination';

const BookList = (props) => {
    const content = useSelector(state => state.content.content)
    const isFetching = useSelector(state => state.content.isLoading)
    const totalCount = useSelector(state => state.content.totalCount)
    let url = useSelector((state) => state.content.link);
    useEffect(() => {

    }, [content]);
    if (content === null) {
        return (
            <main className={classes.wrapper}>
                <div className={classes.preview}>
                    {isFetching ? <Preloader /> : 'Write Title'}
                </div>
            </main>
        )
    }
    if (content === undefined || content.length === 0 ) {
        return (
            <main className={classes.wrapper}>
                <div className={classes.preview}>
                Found 0 results
                </div>
            </main>
        )
    }
    else {
        return (
            <main className={classes.wrapper}>
                {isFetching ? <div className={classes.preview}><Preloader /></div> : (<>
                    <div className={classes.count}>Found {totalCount} results</div>
                    <div className={classes.contentWrapper}>
                        {content.map((element) =>
                            <BookItem key={element.id*Math.random(100)}
                                id={element.id}
                                image={element.volumeInfo.imageLinks ? element.volumeInfo.imageLinks.thumbnail : ''}
                                title={element.volumeInfo.title}
                                category={element.volumeInfo.categories}
                                info={element.volumeInfo.authors} />)}
                    </div></>)
                    }
                <Pagination count={content.length} totalCount={totalCount} content={content} url={url}/>
            </main>
        )
    }
}

export default BookList;