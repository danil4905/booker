import { useDispatch,useSelector } from "react-redux"
import { Paginate,paginateStart } from "../../redux/actions"
import Preloader from "../preloader/Preloader";

const Pagination = ({count,totalCount,content,url}) => {
    const  dispatch = useDispatch();
    const isFetching = useSelector(state => state.content.isPaginating);
    function handleClick () {
        dispatch(paginateStart());
        dispatch(Paginate(count,content,url))
    }
     
    if(count< totalCount) {
    return (
        <div className='pagination'>
            <button className='pagination__button' onClick={handleClick}>{isFetching ? <Preloader /> :'Load more'}</button>
        </div>
    )
    }
    else return (
        ''
    )
}
export default Pagination;