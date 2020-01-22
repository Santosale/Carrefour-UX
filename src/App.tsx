import React from 'react';
import ProductImage from './containers/ProductImage';
import ProductPrice from './containers/ProductPrice';
import ProductNutritionalInformation from './containers/ProductNutritionalInformation';
import ProductIngredients from './containers/ProductIngredients';
import ProductMoreInformation from './containers/ProductMoreInformation';
import ProductOfferAndPromotion from './components/ProductOfferAndPromotion';
import ProductFoodInformation from './containers/ProductFoodInformation';
import ProductIngredientInformation from './components/ProductIngredientInformation';
import IGlobalState, { initialState } from './state/globalState';
import { Action, createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state: IGlobalState = initialState, action: Action) => {
        return state;
  }
const store = createStore(reducer, initialState);

class App extends React.Component<{}, {}> {
    
    public render() {
        return(
        <section className="content-inner">
            <Provider store={store}>
            <ProductImage />
            <ProductPrice/>
            <ProductNutritionalInformation />
            <ProductIngredients />
            <ProductMoreInformation />
            <ProductOfferAndPromotion />
            <ProductFoodInformation />
            <ProductIngredientInformation />
            </Provider>
            <div className="clear">&nbsp;</div>
        </section>
        );
    }
}

export default App;