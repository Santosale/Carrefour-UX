import React from 'react';

interface IProductIngredientsProps {
    description_ingredients: string;
}

class ProductIngredients extends React.Component<IProductIngredientsProps, {}> {
    // eslint-disable-next-line
    constructor(props: IProductIngredientsProps) {
        super(props);
        // change state
    }

    public render() {
        return (<div className="box-ingredientes">
            <div id="ingredientes" className="ingredientes">
                <p className="title-07">Ingredientes</p>
                <p className="contenido-ingredientes">{this.props.description_ingredients}</p>
            </div>
        </div>);
    }
}

export default ProductIngredients;