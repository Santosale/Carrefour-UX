import React from 'react';

interface IProductOffer {
    image_big: string;
    image_median: string;
    image_small: string;
    name: string;
    price: string;
    new_price: string;
    is_3_x_2: boolean;
    price_with_volume: string;

}

class ProductOffer extends React.Component<IProductOffer, {}> {
    // eslint-disable-next-line
    constructor(props: IProductOffer) {
        super(props);
        // change state
    }
    
    public render() {
        return (<article className="product-card-item">
        <div className="right-side">
            {this.props.is_3_x_2 ? 
            <div className="bg-promocion-copy">
                <p className="promocion-copy">3x2</p>
            </div>:<></>}

            <div className="photo">
                <a className="js-gap-product-click-super"
                    data-productId="617301580" title={this.props.name} href="/supermercado/aceite-de-oliva-virgen-carbonell-1-l-carbonell/R-617301580/p?ic_campaign=es_2020101_3x2-en-mas-de-4000-articulos_food&ic_content=portal-home&ic_medium=banners-carousel&ic_source=portal-y-corporativo"
                    data-special-campaign="promof1720008_3x2"
                    data-product-discount="">
                    <img aria-describedby="product-617301580" alt={this.props.name} src={this.props.image_median} sizes="(max-width: 280px) 80px,(max-width: 490px) 100px, (max-width: 768px) 560px, (max-width: 991px) 280px, (max-width: 1280px) 560px" width="100%" />
                </a>
            </div>
        </div>
        <div className="text">
            <div className="promo-mobile">
                &nbsp;
</div>
            <div className="price-container">
                {this.props.new_price === 'null' ?
                <span className="price">{this.props.price}</span> :
                <>
                <span className="strike-price">
                <span style={{ textDecoration: 'line-through' }}>
                {this.props.price}</span>
                </span>
                <span className="price-less">
                {this.props.new_price}</span></>}

                <p className="format-price">
                {this.props.price_with_volume}</p>
            </div>
            <div className="brand">
                <a className="js-gap-product-click-super" title="Ir a Aceite de oliva virgen Carbonell 1 l." href="/supermercado/aceite-de-oliva-virgen-carbonell-1-l-carbonell/R-617301580/p?ic_campaign=es_2020101_3x2-en-mas-de-4000-articulos_food&ic_content=portal-home&ic_medium=banners-carousel&ic_source=portal-y-corporativo"
                    data-special-campaign="promof1720008_3x2"
                    data-product-discount="">
                    <p className="title-product">
                    {this.props.name}</p>
                </a>
            </div>
            <div className="product-type">
            </div>
            <div className="promo-link">
                &nbsp;
</div>
        </div>
        <div className="container-anadir">
            <div>
            </div>
            <div className="container-anadirBTN js-get-data-add-to-cart "
                data-price="3.99"
                data-quantity="0"
                data-google=""
                data-ci-id=""
                data-product-id="617301580"
                data-sku-id="6593650000"
                data-dataLayer='{"event":"ecommerce-add-to-cart","ecommerce":{"currencyCode":"EUR","add":{"products":[{"id":"[8410010262343]","category":"cat20001-la-despensa/cat20009-alimentacion/cat20066-aceites-y-vinagres","name":"aceite-de-oliva-virgen-carbonell-1-l","brand":"carbonell","productDimensions":{"ecPageFacet":"nn","ecProductInternalId":"617301580","ecProductStock":"stock-z","ecSpecialCampaign":"nn","ecProductSMS":"659365","ecPageType":"nn"},"coupon":"nn","variant":"1-l","productMetrics":{"ecProductDiscount":"0.00"}}]}}}'
                data-special-campaign="promof1720008_3x2"
                data-product-discount="">
                <button className="anadirBTN" data-texto="Añadir" >Añadir</button>
                <div className="num-item js-num-item hide">
                    <span className="js-anadirBTN less-units">
                        <img src="https://static.carrefour.es/supermercado/static/style/css/css-files/gfx/papelera.png" alt="imagen" className="js-ico-menos" />
                    </span>
                    <input type="num" value="0" min="1" maxLength={2} data-text-required="Este campo es obligatorio." data-text-number="Por favor, escribe un número válido." className="sel-units js-sel-units" />
                    <span className="js-anadirBTN more-units">
                        <img src="https://static.carrefour.es/supermercado/static/style/css/css-files/gfx/mas.png" alt="imagen"/>
                    </span>
                </div>
            </div>
        </div>
    </article>);
    }
}

export default ProductOffer;