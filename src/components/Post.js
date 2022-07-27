import { Link } from 'react-router-dom'

export default function Post(props) {
    
    function buildHeader() {
        let resHeader;

        if (!props.hideLink) {
            resHeader = (
                <Link to={"/Car/" + props.post.id}>
                    { props.post.name }
                </Link>
            )
        } else {
            resHeader = (
                <>{ props.post.name } 
                </>
            )
        }

        return resHeader
    }

    return (
        <div className="card card-item">
            <h2>
                { buildHeader() }
            </h2>
            <p>Year: { props.post.year } Price: ${ props.post.selling_price} Driven: { props.post.km_driven} KM Fuel: { props.post.fuel} SellerType: { props.post.seller_type} Transmission: { props.post.transmission}   Owner: { props.post.owner} Milage:{ props.post.mileage} Engine:{ props.post.engine} MaxPower: { props.post.max_power} Tourque: { props.post.torque} Seats:{ props.post.seats}</p>
        </div>
    )
}