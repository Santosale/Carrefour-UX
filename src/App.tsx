import React from 'react';
import ProductImage from './containers/ProductImage';
import ProductNutritionalInformation from './containers/ProductNutritionalInformation';
import ProductMoreInformation from './containers/ProductMoreInformation';
import ProductOfferAndPromotion from './components/ProductOfferAndPromotion';
import ProductFoodInformation from './containers/ProductFoodInformation';
import ProductIngredientsInformation from './containers/ProductIngredientsInformation';
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
            <ProductFoodInformation />
            <ProductIngredientsInformation />
            <ProductNutritionalInformation />
            <ProductMoreInformation />
            <ProductOfferAndPromotion />
            </Provider>
            <div className="clear">&nbsp;</div>
        </section>
        );
    }
}

export default App;