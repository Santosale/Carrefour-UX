import React from 'react';

class Crumbs extends React.Component< {} , {}> {
    constructor (props: {} ){
        super (props);
        // change state
    }

    public render (){
        return(<div id="breadcrumbs-top">
        <ul>
        <li>
        <a href="https://www.carrefour.es/" target="_blank">Carrefour.es</a>
        </li>
        <li>
        <a title="Ir a Carrefour Supermercado" href="/supermercado/">Supermercado</a></li>
        <li>
        <a title="Ir a La Despensa" href="/supermercado/la-despensa/N-pa6q31/c">La Despensa</a></li>
        <li>
        <a title="Ir a Alimentación" href="/supermercado/la-despensa/alimentacion/N-qo15hf/c">Alimentación</a></li>
        <li>
        <a title="Aceites y vinagres" href="/supermercado/la-despensa/alimentacion/aceites-y-vinagres/N-1c4rm7v/c">Aceites y vinagres</a></li>
        <li>Aceite de oliva virgen extra Dcoop 1 l.</li>
        </ul>
        </div>);
    }
}

export default Crumbs;