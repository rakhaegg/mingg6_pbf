
import body_1 from './images/photo_1.jpg';
import body_2 from './images/photo_2.jpg';
import body_3 from './images/photo_3.jpg';
import body_4 from './images/photo_4.jpg';
import body_5 from './images/photo_5.jpg';
import body_6 from './images/photo_6.jpg';

import React from 'react';
import LeftBox from './leftbox';
import RightBox from './rightbox';

import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
    useLocation,
    Navigate,
    useNavigate,
    Outlet
} from "react-router-dom";



function CategoryAction(){
    const {actionId} = useParams();

    console.log(actionId);
    
}
const ContentActionAdventure = (props) => {
    const {categporyID } = useParams();
    
    console.log("**");
    return (
        <div id='body'>
            <div className="inner">
                <Link to="test1">
                    <LeftBox judul="Test" harga="12.000" availability="Yes" image={body_1} />
                </Link>
                <Link to="test2">
                    <RightBox judul="Test 2" harga="12.000" availability="Yes" image={body_2} />
                    
                </Link>

                <div class="clear br"></div>
            </div>
        </div>
    );
}

export default ContentActionAdventure;