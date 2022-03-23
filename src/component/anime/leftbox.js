
const LeftBox = (props) => {
    return (
        <div class="leftbox">
            <h3>{props.judul}</h3>
            <img src={props.image} width="93" height="95" alt="photo 1" class="left" />
            <p><b>Price:</b> <b>{props.harga}</b> &amp; eligible for FREE Super Saver Shipping on orders over <b>$195</b>.</p>
            <p><b>Availability:</b>{props.availability}</p>
            <p class="readmore"><a href="#">BUY <b>NOW</b></a></p>
            <div class="clear"></div>
        </div>
    );
}




export default LeftBox;