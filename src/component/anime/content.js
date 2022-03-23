
import body_1 from './images/photo_1.jpg';
import body_2 from './images/photo_2.jpg';


import React from 'react';
import LeftBox from './leftbox';
import RightBox from './rightbox';

const ContentAnime = (props) => {
    return (
        <div id='body'>
            <div className="inner">
                
                <LeftBox judul="Test" harga="12.000" availability="Yes" image={body_1} />
                <RightBox judul="Test 2" harga="12.000" availability="Yes" image={body_2} />
                <div class="clear br"></div>

            </div>
        </div>
    );

}
export default ContentAnime;