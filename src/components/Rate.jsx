import {useState} from "react";
import { Rating, ThinStar } from '@smastrom/react-rating';

const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#47eddb',
    inactiveFillColor: '#cef5f1'
}

function getRating(rating) {
    switch (rating) {
        case 1:
            return 'Terrible :(';
        case 2:
            return 'Bad';
        case 3:
            return 'Average';
        case 4:
            return 'Good';
        case 5:
            return 'Excellent :)';
        default:
            return 'N/A';
    }
}

export default function Rate() {
    const [rating, setRating] = useState(0)
    return (
        <>
            <Rating style={{maxWidth: 200}}
                    value={rating}
                    onChange={setRating}
                    itemStyles={myStyles}/>
            <div>
                <div>{`Selected: ${getRating(rating)}`}</div>
            </div>
            <br/>
            <button onClick={() => setRating(0)}>
                Reset
            </button>
        </>
    );
}
