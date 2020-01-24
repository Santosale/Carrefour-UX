import React from 'react';

interface IProductFoodInformation {
    measures_product_food_information: string[];
    datas_of_product: string[];
    nutrients: string[];
    brand_values: string[];
    title_food_information: string;
}

interface IProductFoodInformationState {
    showed: boolean;
}

class ProductFoodInformation extends React.Component<IProductFoodInformation, IProductFoodInformationState> {
    // eslint-disable-next-line 
    constructor(props: IProductFoodInformation) {
        super(props);
        this.state = {showed: true}
        // change state
    }

    public toggleShowed = () => {
        this.setState( {showed: !!!this.state.showed});
    }
    
    public render() {
        return (<div className="open-html-content">
            <h3 style={{marginTop:"0px", borderBottom: "1px solid #d8d8d8", cursor: "pointer"}} onClick={this.toggleShowed}>{this.props.title_food_information}</h3>
            {this.state.showed ?
            <>
            <b>Nutrientes:</b><br />
            {this.props.nutrients.map(function(element,index){
                if (index%2===0){
                return(
                    <b>{element}: </b> );
                }else{
                    return(
                        <>{element}, </>);
                }
                
            })}
            <br/><p><br /><b>Medidas:</b><br />
            {this.props.measures_product_food_information.map(function(element,index){
                return(<> {element} <br/> </>);
            })}
            <br/><b>Datos del producto:</b><br />
            {this.props.datas_of_product.map(function(element,index){
                if (index%2===0){
                    return(
                        <b>{element} </b> );
                    }else{
                        return(
                            <>{element}, </>);
                    }
            })}
            <br/><br/><b>Marcas:</b><br />
            {this.props.brand_values.map(function(element,index){
                return(<> {element} <br/> </>);
            })} 
            </p>
            </>:<></>}
        </div>);
    }
}

export default ProductFoodInformation;