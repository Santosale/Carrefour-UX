import React from 'react';

interface IProductFoodInformation {
    measures_product_food_information: string[];
    datas_of_product: string[];
    nutrients: string[];
    brand_values: string[];
}

class ProductFoodInformation extends React.Component<IProductFoodInformation, {}> {
    // eslint-disable-next-line 
    constructor(props: IProductFoodInformation) {
        super(props);
        // change state
    }
    
    public render() {
        return (<div className="open-html-content">
            <h3>Información Alimentaria</h3>
            <p><br /><b>Medidas:</b><br />
            {this.props.measures_product_food_information.map(function(element,index){
                return(<> {element} <br/> </>);
            })}
            <b>Datos del producto:</b><br />
            {this.props.datas_of_product.map(function(element,index){
                return(<> {element} <br/> </>);
            })}
            <b>Nutrientes:</b><br />
            {this.props.nutrients.map(function(element,index){
                return(<> {element} <br/> </>);
            })}
            <b>Marcas:</b><br />
            {this.props.brand_values.map(function(element,index){
                return(<> {element} <br/> </>);
            })} 
            </p>
        </div>);
    }
}

export default ProductFoodInformation;