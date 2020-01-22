import React from 'react';
import ProductOffer from './ProductOffer';

class ProductOfferAndPromotion extends React.Component<{}, {}> {
    
    public render() {
        return (
            <div className="richRelevanceData">
                <div id="recommendedProductsSlotBloque1">
                    <div className="content-product">
                        <div className="content-product-inner cards-container">
                            <div className="title-inner">
                                <h2 className="title-03"> Productos en oferta y promoción</h2>
                            </div>
                            <div id="carr2" className="item-page owl-carousel owl-theme">

                                <ProductOffer image_big="https://static.carrefour.es/hd_560x_/img_pim_food/659365_00_1.jpg" image_median="https://static.carrefour.es/hd_280x_/img_pim_food/659365_00_1.jpg" image_small="https://static.carrefour.es/hd_100x_/img_pim_food/659365_00_1.jpg" name="Aceite de oliva virgen Carbonell 1 l." price="3.99€" new_price='null' is_3_x_2={true} price_with_volume="1 L. | 3,99 €/l" />
                                <ProductOffer image_big="https://static.carrefour.es/hd_560x_/img_pim_food/543824_00_1.jpg" image_median="https://static.carrefour.es/hd_280x_/img_pim_food/543824_00_1.jpg" image_small="https://static.carrefour.es/hd_100x_/img_pim_food/543824_00_1.jpg" name="Aceite de oliva virgen extra hojiblanca Coosur 1 l." price="4.86€" new_price='null' is_3_x_2={true} price_with_volume="1 L. | 4,86 €/l" />
                                <ProductOffer image_big="https://static.carrefour.es/hd_560x_/img_pim_food/071945_00_1.jpg" image_median="https://static.carrefour.es/hd_280x_/img_pim_food/071945_00_1.jpg" image_small="https://static.carrefour.es/hd_100x_/img_pim_food/071945_00_1.jpg" name="Aceite de oliva virgen extra ecológico Carbonell botella vidrio 750 ml." price="5.59€" new_price='4.49€' is_3_x_2={true} price_with_volume="750 Ml. | 6,65 €/l" />
                                <ProductOffer image_big="https://static.carrefour.es/hd_560x_/img_pim_food/029195_00_1.jpg" image_median="https://static.carrefour.es/hd_280x_/img_pim_food/029195_00_1.jpg" image_small="https://static.carrefour.es/hd_100x_/img_pim_food/029195_00_1.jpg" name="Aceite de orujo suave Capicua 1 l." price="1.98€" new_price='1.89€' is_3_x_2={false} price_with_volume="1 L. | 1,89 €/l" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductOfferAndPromotion;