import React from 'react';
import ProductPrice from '../containers/ProductPrice';


interface IProductImageProps {
    url_image_small: string;
    url_image_big: string;
    name_product: string
}

class ProductImage extends React.Component<IProductImageProps, {}> {
    // eslint-disable-next-line
    constructor(props: IProductImageProps) {
        super(props);
        // change sta
    }

    public render() {
        return (
            <>
                <header id="titulo-header"className="title-inner title-product">
                    <h1 id="product-01" className="title-03">
                    {this.props.name_product}</h1>
                    <div className="promotions">
                        <p className="promo-tag"> 3x2</p>
                        <a id="verPromo" href="/supermercado" className="promo-link">Ver promoción</a>
                    </div>
                </header>
                <div id="contenedor-producto" className="detalle-producto mb-20">
                    <div className="img-product">
                        <div className="gallery">
                            <div className="images">
                                <div id="carr1" className="owl-carousel owl-theme" >
                                    <img id="image-product" alt={this.props.name_product} src={this.props.url_image_big} srcSet={this.props.url_image_small + " 660w, " + this.props.url_image_big} />
                                    <ProductPrice/>
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