import { ReactComponent as StarFull} from 'Assets/img/starFull.svg'
import { ReactComponent as StarHalf} from 'Assets/img/starMid.svg'
import { ReactComponent as StarEmpty} from 'Assets/img/starDefault.svg'
import './style.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;