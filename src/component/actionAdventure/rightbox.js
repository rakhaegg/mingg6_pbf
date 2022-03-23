
import './../../App.css';

const RightBox = (props) => {
    return (
        <div class="rightbox">
            <h3>{props.judul} </h3>
            <img src={props.image} width="107" height="91" alt="photo 4" class="left" />
            <p><b>Price:</b> <b>{props.harga}</b> &amp; eligible for FREE Super Saver Shipping on orders over <b>$105</b>.</p>
            <p><b>Availability:</b>{props.availability}</p>
            <p class="readmore"><a href="#">BUY <b>NOW</b></a></p>
            <div class="clear"></div>
        </div>
    );
}


export default RightBox;