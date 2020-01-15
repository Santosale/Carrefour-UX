import React from 'react';

class ProductNutritionalInformation extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        // change state
    }

    public render() {
        return (
            <div className="nutrition" id="nutrition">
                <h3>Información nutricional</h3>
                <p className="nutrition-txt">Valores medios por  100 gr</p>
                <div id="grafico" data-kj="3768.12" data-cal="900" data-g="100" data-h="0" data-p="0" data-s="0" data-f="" className="svggraph">
                    <p>
                        Valor energético
                    <br />
                        <span id="kj">x</span>
                        <span className="kj">kJ</span>
                        <br />
                        <span id="kcal">x</span>
                        <span className="kcal">Kcal</span>
                    </p>
                    <svg width="100%" height="100%">
                        <path id="arc1" fill="none" stroke="#F6F6F6" strokeWidth="45" d="M 67.9060301978499 10.036550378854258 A 60 60 0 1 0 70 10"></path>
                        <path id="arc2" fill="none" stroke="#CBF3D7" strokeWidth="45" d="M 129.98684100849073 68.74345480699854 A 60 60 0 0 0 116.23079456654733 31.75456061507858"></path><path id="arc3" fill="none" stroke="#FCE4C0" stroke-width="45" d="M 116.23079456654733 31.75456061507858 A 60 60 0 0 0 82.47470144906552 11.311143955971652"></path>
                        <path id="arc4" fill="none" stroke="#F1C3C3" strokeWidth="45" d="M 82.47470144906552 11.311143955971652 A 60 60 0 1 0 70 130"></path><path id="arc5" fill="none" stroke="#D9ECFF" stroke-width="45" d="M 82.47470144906552 11.311143955971652 A 60 60 0 1 0 70 130"></path>
                        <path id="arc6" fill="none" stroke="#0051A1" strokeWidth="45" d="M 82.47470144906552 11.311143955971652 A 60 60 0 1 0 70 130"></path><animate xlinkHref="#arc1" attributeName="stroke-width" from="0" to="45" dur="1s" begin="0s" fill="freeze" />
                        <animate xlinkHref="#arc2" attributeName="stroke-width" from="0" to="45" dur="1s" begin="0s" fill="freeze" /><animate xlinkHref="#arc3" attributeName="stroke-width" from="0" to="45" dur="1s" begin="0s" fill="freeze" />
                        <animate xlinkHref="#arc4" attributeName="stroke-width" from="0" to="45" dur="1s" begin="0s" fill="freeze" /><animate xlinkHref="#arc5" attributeName="stroke-width" from="0" to="45" dur="1s" begin="0s" fill="freeze" />
                        <animate xlinkHref="#arc6" attributeName="stroke-width" from="0" to="45" dur="1s" begin="0s" fill="freeze" />
                    </svg>
                </div>
                <div className="nutrition-box"><p className="valor"><span className="leyend c1"></span>Grasas<span className="fright">100 g</span></p>
                    <p className="subvalor">de las cuales  Saturadas<span className="fright">13 g</span></p>
                    <p className="valor"><span className="leyend c2"></span>Hidratos de carbono<span className="fright">0 g</span></p>
                    <p className="subvalor">de los cuales  Azúcares<span className="fright">0 g</span></p>
                    <p className="valor"><span className="leyend c4"></span>Proteínas<span className="fright">0 g</span></p> <p className="valor"><span className="leyend c5"></span>Sal<span className="fright">0 g</span></p>
                </div>
            </div>

        );
    }
}

export default ProductNutritionalInformation;