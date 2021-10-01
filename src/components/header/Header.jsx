import classes from './header.module.scss'
import { OPTIONS } from '../../api/constants';
import { useSelector } from 'react-redux';
import { changeInputs, searchBooks, startFetching } from '../../redux/actions';
import { ReactComponent as Search } from '../../assets/icons8-search.svg';
import { useHistory } from 'react-router';

const Header = (props) => {
    const input = useSelector(state => state.controls.input);
    const category = useSelector(state => state.controls.category);
    const sortingType = useSelector(state => state.controls.sortingType);
    let history = useHistory();
    function write (name,value) {
        props.dispatch(changeInputs(name,value))
    }
    function search (e) {
        e.preventDefault();
        history.push('/')
        props.dispatch(startFetching())
        props.dispatch(searchBooks(input, category, sortingType))
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search(event)
        }
    }

    return (
        <header className={classes.header} onKeyDown={handleKeyDown}>
            <div className={classes.titleWrapper}>
                <h1 className={classes.title}>Search for books</h1>
            </div>
            <div className={classes.controlsWrapper}>
                <div className={classes.serachWrapper}>
                    <form onSubmit={(e) => search(e)} >
                        <input type="text" className={classes.input} value={input} onChange={(el) => write('input', el.target.value)} autoFocus={true} onKeyDown={handleKeyDown}/>
                        <button className={classes.searchButton} type='submit' disabled={input?false:true}><Search /></button>
                    </form>
                </div>
                <div className={classes.sortingWrapper}>
                    <label htmlFor="">Categories</label>
                    <select className={classes.select} value={category} onChange={(el) => write('category', el.target.value)}>
                        {OPTIONS.map((element) => <option value={element} key={Math.random(100)}>{element}</option>)}
                    </select>
                    <label htmlFor="sorting">Sorting by</label>
                    <select name="sorting" id="sorting" value={sortingType} onChange={(el) => write('sortingType', el.target.value)}>
                        <option value="relevance">relevance</option>
                        <option value="newest">newest</option>
                    </select>
                </div>
            </div>
        </header>
    )
}
export default Header;