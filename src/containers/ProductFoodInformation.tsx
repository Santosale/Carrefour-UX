import {connect} from 'react-redux';
import ProductFoodInformation from '../components/ProductFoodInformation';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({measures_product_food_information: state.measures_product_food_information, 
            datas_of_product: state.datas_of_product,
            nutrients: state.nutrients,
            brand_values: state.brand_values,
            title_food_information: state.title_food_information})
}
export default connect(mapStateToProps)(ProductFoodInformation);