import {connect} from 'react-redux';
import ProductMoreInformation from '../components/ProductMoreInformation';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({brand_value: state.brand_value, 
        measure_value: state.measure_value,
        product_datas_values: state.product_datas_values,
        more_information_title: state.more_information_title})
}
export default connect(mapStateToProps)(ProductMoreInformation);