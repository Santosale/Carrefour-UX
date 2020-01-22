import {connect} from 'react-redux';
import ProductPrice from '../components/ProductPrice';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({old_price: state.old_price, 
            new_price: state.new_price,
            description_offert: state.description_offert})
}
export default connect(mapStateToProps)(ProductPrice);