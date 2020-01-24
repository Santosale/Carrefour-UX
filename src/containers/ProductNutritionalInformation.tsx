import {connect} from 'react-redux';
import ProductNutritionalInformation from '../components/ProductNutritionalInformation';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({value_kj: state.value_kj, 
            value_kcal: state.value_kcal,
            measure_map: state.measure_map,
            nutritional_information_title: state.nutritional_information_title})
}
export default connect(mapStateToProps)(ProductNutritionalInformation);