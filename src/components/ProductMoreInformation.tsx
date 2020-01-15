import React from 'react';

class ProductMoreInformation extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        // change state
    }

    public render() {
        return (<div className="more-info">
            <p className="title-07">Más información</p>
            <div className="info-box">  <p className="info-title">Marca</p><p className="info-txt">DCOOP</p>  <p className="info-title">Datos del producto</p><p className="info-txt">    Nombre del operador de la empresa alimentaria:  Carrefour
        <br />Denominación del alimento:  Aceite de oliva virgen extra <br />Dirección del operador/importador:  CR DE CORDOBA, 29200, MALAGA<br />    Nombre del importador:  MERCAOLEO, SL<br /> </p>
                <p className="info-title">Medidas</p><p className="info-txt">    Cantidad neta del alimento:  1000. <br /> </p>  <script> svg_circle2(0,0,1,2,4,4,2); </script>
            </div>
        </div>);
    }
}

export default ProductMoreInformation;