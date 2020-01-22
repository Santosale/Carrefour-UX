import React from 'react';
import ProductImage from './components/ProductImage';
import ProductPrice from './components/ProductPrice';
import ProductNutritionalInformation from './components/ProductNutritionalInformation';
import ProductIngredients from './components/ProductIngredients';
import ProductMoreInformation from './components/ProductMoreInformation';
import ProductOfferAndPromotion from './components/ProductOfferAndPromotion';
import ProductFoodInformation from './components/ProductFoodInformation';
import ProductIngredientInformation from './components/ProductIngredientInformation';

class App extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        // change state
    }

    public render() {
        return(
        <section className="content-inner">
            <ProductImage />
            <ProductPrice />
            <ProductNutritionalInformation />
            <ProductIngredients />
            <ProductMoreInformation />
            <ProductOfferAndPromotion />
            <ProductFoodInformation />
            <ProductIngredientInformation />
            <div className="clear">&nbsp;</div>
        </section>
        );
    }
}

export default App;