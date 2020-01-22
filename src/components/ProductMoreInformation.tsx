import React from 'react';

interface IProductMoreInformationProps {
    brand_value: string;
    measure_value: string;
    product_datas_values: string[];
}

class ProductMoreInformation extends React.Component<IProductMoreInformationProps, {}> {
    // eslint-disable-next-line
    constructor(props: IProductMoreInformationProps) {
        super(props);
        // change state
    }
    public render() {
        return (<div className="more-info">
            <p className="title-07">Más información</p>
            <div className="info-box">  <p className="info-title">Marca</p><p className="info-txt">{this.props.brand_value}</p>  <p className="info-title">Datos del producto</p><p className="info-txt">    {this.props.product_datas_values[0]}
        <br />{this.props.product_datas_values[1]} <br />{this.props.product_datas_values[2]}<br />    {this.props.product_datas_values[3]}<br /> </p>
                <p className="info-title">Medidas</p><p className="info-txt">    {this.props.measure_value} <br /> </p>  <script> svg_circle2(0,0,1,2,4,4,2); </script>
            </div>
        </div>);
    }
}

export default ProductMoreInformation;