import React from 'react';

class HeaderPostal extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        // change state
    }

    public render() {
        return (
            <div className="js-postalCode-header">
                <div id="subheader-direccion">
                    <div className="subheader-inner">
                        <div className="info-cp">
                            <span className="icon-location"></span>
                            <input type="hidden" id="caseNumber" value="1" />
                            Comprando para el código postal <span className="semibold">28020</span>.&nbsp;
            <a href="#" title="Modificar" data-modal-toggle="modal" data-modal-remote="https://www.carrefour.es/supermercado/ajax/PostalCodeChange?case=1&originalRequestURL=https://www.carrefour.es/supermercado/aceite-de-oliva-virgen-extra-dcoop-1-l-dcoop/R-824301999/p">Modificar</a>
                            <div className="horario">
                                <a title="Abrir modal horarios de entrega" className="icon-time" href="#" data-modal-toggle="modal" data-modal-remote="https://www.carrefour.es/supermercado/global/gadgets/popUpTimeSlot.jsp?orderId=o759566981" data-modal-type="centered">
                                    Horarios de entrega</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default HeaderPostal;

