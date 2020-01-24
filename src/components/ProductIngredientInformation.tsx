import React from 'react';

interface IProductIngredientsInformationProps {
    description_ingredients: string;
    title_ingredient_information: string;
}


interface IProductIngredientsInformationState {
    showed: boolean;
}

class ProductIngredientsInformation extends React.Component<IProductIngredientsInformationProps, IProductIngredientsInformationState> {
    constructor(props: IProductIngredientsInformationProps) {
        super(props);
        this.state = {showed: false}
        // change state
    }

    public toggleShowed = () => {
        this.setState( {showed: !!!this.state.showed}); 
    }
    
    public render() {
        return (
                <div className="box-ingredientes">
            <h3 id="ingredientes-title" className="title-07" onClick={this.toggleShowed}>{this.props.title_ingredient_information}</h3>
            {this.state.showed ?
            <>
            <div id="ingredientes" className="ingredientes">
                <p className="contenido-ingredientes">{this.props.description_ingredients}</p>
            </div>
        
                <div className="open-html-content">
                </div>
                <div style={{ clear: 'both' }}></div>
                <div className="mb-20">Aviso sobre nuestra <a data-modal-remote="https://www.carrefour.es/supermercado/disclaimer_producto" data-modal-toggle="modal" href="/supermercado" title="Informacion del producto">informaci&oacute;n de producto</a></div>
            </>: <></>}
                </div>
        );
    }
}

export default ProductIngredientsInformation;