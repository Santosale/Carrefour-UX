import {connect} from 'react-redux';
import ProductImage from '../components/ProductImage';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({url_image_small: state.url_image_small, 
            url_image_big: state.url_image_big,
            name_product: state.name_product})
}
export default connect(mapStateToProps)(ProductImage);