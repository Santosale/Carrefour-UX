import React from 'react';

interface IProductPriceProps {
    value_kj: string;
    value_kcal: string;
    measure_map: string[];
    nutritional_information_title: string;
}

interface IProductNutritionalInformationState {
    showed: boolean;
}

class ProductNutritionalInformation extends React.Component<IProductPriceProps, IProductNutritionalInformationState> {
    // eslint-disable-next-line
    constructor(props: IProductPriceProps) {
        super(props);
        this.state = {showed: false}
        // change state
    }

    public toggleShowed = () => {
        this.setState( {showed: !!!this.state.showed});
    }

    public render() {
        return (
            <div className="nutrition" id="nutrition">
                <h3 id="nutritional-information-element" onClick={this.toggleShowed}>{this.props.nutritional_information_title}</h3>
                {this.state.showed ?
            <>
                <p className="nutrition-txt">Valores medios por  100 gr</p>
                <div id="grafico" data-kj={this.props.value_kj} data-cal={this.props.value_kcal} data-g="100" data-h="0" data-p="0" data-s="0" data-f="" className="svggraph">
                    <p>
                        Valor energético
                    <br />
                        <span id="kj">{this.props.value_kj}</span>
                        <span className="kj">kJ</span>
                        <br />
                        <span id="kcal">{this.props.value_kcal}</span>
                        <span className="kcal">Kcal</span>
                    </p>
                    <svg width="100%" height="100%">
                        <path id="arc1" fill="none" stroke="#F6F6F6" strokeWidth="45" d="M 124.82546716341017 25.000152308671233 A 100 100 0 1 0 125 25"></path>
                        <path id="arc2" fill="none" stroke="#CBF3D7" strokeWidth="45" d="M 124.99999999999999 25 A 100 100 0 1 0 125 25"></path><path id="arc3" fill="none" stroke="#FCE4C0" stroke-width="45" d="M 131.27905195293138 25.19732715717285 A 100 100 0 0 0 126.74524064372831 25.01523048436087"></path>
                        <path id="arc4" fill="none" stroke="#F1C3C3" strokeWidth="45" d="M 131.27905195293138 25.19732715717285 A 100 100 0 0 0 133.0198924328859 25.32211215437529"></path><path id="arc5" fill="none" stroke="#D9ECFF" stroke-width="45" d="M 137.53332335643043 25.788529868552217 A 100 100 0 0 0 133.0198924328859 25.32211215437529"></path>
                        <path id="arc6" fill="none" stroke="#0051A1" strokeWidth="45" d="M 143.7381314585726 26.77127492713116 A 100 100 0 0 0 139.26289337055124 26.02237690922111"></path><animate xlinkHref="#arc1" attributeName="stroke-width" from="0" to="45" dur="1s" begin="0s" fill="freeze" />
                        <animate xlinkHref="#arc2" attributeName="stroke-width" from="0" to="45" dur="1s" begin="0s" fill="freeze" /><animate xlinkHref="#arc3" attributeName="stroke-width" from="0" to="45" dur="1s" begin="0s" fill="freeze" />
                        <animate xlinkHref="#arc4" attributeName="stroke-width" from="0" to="45" dur="1s" begin="0s" fill="freeze" /><animate xlinkHref="#arc5" attributeName="stroke-width" from="0" to="45" dur="1s" begin="0s" fill="freeze" />
                        <animate xlinkHref="#arc6" attributeName="stroke-width" from="0" to="45" dur="1s" begin="0s" fill="freeze" />
                    </svg>
                </div>
                <div className="nutrition-box"><p className="valor"><span className="leyend c1"></span>Grasas<span className="fright">{this.props.measure_map[0]}</span></p>
                    <p className="subvalor">de las cuales  Saturadas<span className="fright">{this.props.measure_map[1]}</span></p>
                    <p className="valor"><span className="leyend c2"></span>Hidratos de carbono<span className="fright">{this.props.measure_map[2]}</span></p>
                    <p className="subvalor">de los cuales  Azúcares<span className="fright">{this.props.measure_map[3]}</span></p>
                    <p className="valor"><span className="leyend c4"></span>Proteínas<span className="fright">{this.props.measure_map[4]}</span></p> <p className="valor"><span className="leyend c5"></span>Sal<span className="fright">{this.props.measure_map[5]}</span></p>
                </div>
                </>:<></>}
            </div>

        );
    }
}

export default ProductNutritionalInformation;