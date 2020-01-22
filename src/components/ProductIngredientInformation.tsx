import React from 'react';
import ProductIngredients from './ProductIngredients'

class ProductIngredientsInformation extends React.Component<{}, {}> {
    
    public render() {
        return (
            <>
                <ProductIngredients />
                <div className="open-html-content">
                </div>
                <div style={{ clear: 'both' }}></div>
                <div className="mb-20">Aviso sobre nuestra <a data-modal-remote="https://www.carrefour.es/supermercado/disclaimer_producto" data-modal-toggle="modal" href="/supermercado" title="Informacion del producto">informaci&oacute;n de producto</a></div>
            </>
        );
    }
}

export default ProductIngredientsInformation;