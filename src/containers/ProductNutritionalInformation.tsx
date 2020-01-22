import {connect} from 'react-redux';
import ProductNutritionalInformation from '../components/ProductNutritionalInformation';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({value_kj: state.value_kj, 
            value_kcal: state.value_kcal,
            measure_map: state.measure_map})
}
export default connect(mapStateToProps)(ProductNutritionalInformation);