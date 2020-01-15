import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import HeaderNav from './components/HeaderNav';
import HeaderPostal from './components/HeaderPostal';
import Crumbs from './components/Crumbs';
import ProductImage from './components/ProductImage';
import ProductPrice from './components/ProductPrice';
import ProductNutritionalInformation from './components/ProductNutritionalInformation';
import ProductIngredients from './components/ProductIngredients';
import ProductMoreInformation from './components/ProductMoreInformation';
import ProductOfferAndPromotion from './components/ProductOfferAndPromotion';
import ProductFoodInformation from './components/ProductFoodInformation';
import ProductIngredientInformation from './components/ProductIngredientInformation';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HeaderNav />, document.getElementById('componente1'));
ReactDOM.render(<HeaderPostal />, document.getElementById('componente2'));
ReactDOM.render(<Crumbs />, document.getElementById('componente3'));
ReactDOM.render(<ProductImage />, document.getElementById('componente4'));
ReactDOM.render(<ProductPrice />, document.getElementById('componente5'));
ReactDOM.render(<ProductNutritionalInformation />, document.getElementById('componente6'));
ReactDOM.render(<ProductIngredients />, document.getElementById('componente7'));
ReactDOM.render(<ProductMoreInformation />, document.getElementById('componente8'));
ReactDOM.render(<ProductOfferAndPromotion />, document.getElementById('componente9'));
ReactDOM.render(<ProductFoodInformation />, document.getElementById('componente10'));
ReactDOM.render(<ProductIngredientInformation />, document.getElementById('componente11'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
