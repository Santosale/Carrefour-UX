import React from 'react';

class ProductFoodInformation extends React.Component<{}, {}> {
    
    public render() {
        return (<div className="open-html-content">
            <h3>Información Alimentaria</h3>
            <p><br /><b>Medidas:</b><br />Cantidad neta del alimento:1000 Mililitros<br /><b>Datos del producto:</b><br />Denominación del alimento:Aceite de oliva virgen extra<br />Nombre del operador de la empresa alimentaria:Carrefour<br />Nombre del importador:MERCAOLEO, SL<br />Dirección del operador/importador:CR DE CORDOBA, 29200, MALAGA<br /><b>Nutrientes:</b><br />Valor Energético<br />900 Kcal<br />Valor Energético<br />3768.12 kJ<br />Grasas<br />100 g<br />Saturadas<br />13 g<br />Hidratos de carbono<br />0 g<br />Azúcares<br />0 g<br />Proteínas<br />0 g<br />Sal<br />0 g<br /><b>Marcas:</b><br />DCOOP</p>
        </div>);
    }
}

export default ProductFoodInformation;