import React from 'react';

interface IProductPriceProps {
    old_price: string;
    new_price: string;
    description_offert: string;
}

class ProductPrice extends React.Component<IProductPriceProps, {}> {
    // eslint-disable-next-line
    constructor(props: IProductPriceProps) {
        super(props);
        // change state
    }

    public render() {
        return (
            <div className="desktop-float">
                <div className="sticky">
                    <div className="col-add">
                        <div className="save-and-price">
                            <div className="prices">
                                <del className="price-kg-old">{this.props.old_price}/l</del>
                                <del className="price-old js-price-before-first">{this.props.old_price}</del>
                                <br />
                                <p className="price-kg">{this.props.new_price}/l</p>
                                <p className="price js-price">{this.props.new_price}</p>
                            </div>
                        </div>
                        <div className="form producto-seleccionar-unidades">
                            <div className="container-anadirBTN js-get-data-add-to-cart"
                                data-price="4,29"
                                data-quantity="0"
                                data-ci-id=""
                                data-product-id="824301999"
                                data-sku-id="9586840000"
                                data-datalayer='{"event":"ecommerce-add-to-cart","ecommerce":{"currencyCode":"EUR","add":{"products":[{"id":"[8435291300102]","category":"cat20001-la-despensa/cat20009-alimentacion/cat20066-aceites-y-vinagres","name":"aceite-de-oliva-virgen-extra-dcoop-1-l","brand":"dcoop","productDimensions":{"ecPageFacet":"nn","ecProductInternalId":"824301999","ecProductStock":"stock-z","ecSpecialCampaign":"nn","ecProductSMS":"958684","ecPageType":"nn"},"coupon":"nn","variant":"1-l","productMetrics":{"ecProductDiscount":"0.00"}}]}}}'
                                data-special-campaign="promof1720008_3x2"
                                data-product-discount="0,20">
                                <button className="anadirBTN" data-texto="Añadir" >Añadir</button>
                                <div className="num-item js-num-item hide">
                                    <span className="js-anadirBTN less-units">
                                        <img src="https://static.carrefour.es/supermercado/static/style/css/css-files/gfx/papelera.png" alt="imagen" className="js-ico-menos" />
                                    </span>
                                    <input type="num" defaultValue="0" min="1" maxLength={2} data-text-required="Este campo es obligatorio." data-text-number="Por favor, escribe un número válido." className="sel-units js-sel-units" />
                                    <span className="js-anadirBTN more-units">
                                        <img src="https://static.carrefour.es/supermercado/static/style/css/css-files/gfx/mas.png" alt="imagen" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="promoMobile" className="box-promotions">
                        <p className="title-07">Producto en promoción</p>
                        <div className="promobox">
                            <p className="text-promo">
                                <span className="tag-promo">3x2</span>
                                {this.props.description_offert}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductPrice;