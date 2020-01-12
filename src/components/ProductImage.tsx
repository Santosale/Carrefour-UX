import React from 'react';

class ProductImage extends React.Component< {} , {}> {
    constructor (props: {} ){
        super (props);
        // change state
    }

    public render (){
        return(
            <>
            <header className="title-inner title-product">
                <h1 id="product-01" className="title-03">
                Aceite de oliva virgen extra Dcoop 1 l.</h1>
                <div className="promotions">
                <p className="promo-tag"> 3x2</p>
                <a id="verPromo" href="#" className="promo-link">Ver promoción</a>
                </div>
            </header>
            <div className="detalle-producto mb-20">
            <div className="img-product">
            <div className="gallery">
            <div className="images">
            <div id="carr1" className="owl-carousel owl-theme" >
            <a href="#" data-standard="https://static.carrefour.es/hd_280x_/img_pim_food/958684_00_1.jpg" data-srcset="https://static.carrefour.es/hd_560x_/img_pim_food/958684_00_1.jpg 2x">
            <img alt="Aceite de oliva virgen extra Dcoop 1 l." src="https://static.carrefour.es/hd_560x_/img_pim_food/958684_00_1.jpg" srcSet="https://static.carrefour.es/hd_280x_/img_pim_food/958684_00_1.jpg 660w, https://static.carrefour.es/hd_560x_/img_pim_food/958684_00_1.jpg"/>
            </a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </>
        );
    }

}

export default ProductImage;