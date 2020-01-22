import {connect} from 'react-redux';
import ProductIngredients from '../components/ProductIngredients';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({description_ingredients: state.description_ingredients});
}
export default connect(mapStateToProps)(ProductIngredients);