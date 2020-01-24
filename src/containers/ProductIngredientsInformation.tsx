import {connect} from 'react-redux';
import ProductIngredientInformation from '../components/ProductIngredientInformation';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({description_ingredients: state.description_ingredients,
        title_ingredient_information: state.title_ingredient_information});
}
export default connect(mapStateToProps)(ProductIngredientInformation);