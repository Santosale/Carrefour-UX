import React from 'react';

interface IProductMoreInformationProps {
    brand_value: string;
    measure_value: string;
    product_datas_values: string[];
    more_information_title: string;
}

interface IProductMoreInformationState {
    showed: boolean;
}

class ProductMoreInformation extends React.Component<IProductMoreInformationProps, IProductMoreInformationState> {
    // eslint-disable-next-line
    constructor(props: IProductMoreInformationProps) {
        super(props);
        this.state = {showed: false}
        // change state
    }

    public toggleShowed = () => {
        this.setState( {showed: !!!this.state.showed});
    }

    public render() {
        return (<div className="more-info">
            <p id="more-information-element" className="title-07" onClick={this.toggleShowed}>{this.props.more_information_title}</p>
            {this.state.showed ?
            <div className="info-box">  <p className="info-title">Marca</p><p className="info-txt">{this.props.brand_value}</p>  <p className="info-title">Datos del producto</p><p className="info-txt">    {this.props.product_datas_values[0]}
        <br />{this.props.product_datas_values[1]} <br />{this.props.product_datas_values[2]}<br />    {this.props.product_datas_values[3]}<br /> </p>
                <p className="info-title">Medidas</p><p className="info-txt">    {this.props.measure_value} <br /> </p>  <script> svg_circle2(0,0,1,2,4,4,2); </script>
            </div>:<></>} 
        </div>);
    }
}

export default ProductMoreInformation;