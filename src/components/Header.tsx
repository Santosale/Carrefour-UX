import React from 'react';

class Header extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    // change state
  }

  public render() {

    return (<body><header id="header" className="header">



      <div className="header-top" data-scroll-listener="target: body; outViewClass: semi-scrolled; inViewClass: ;">
        <a className="header-top-link" href="https://www.game.es/tiendas" title="Tiendas de Videojuegos, PC Gaming y Accesorios GAME">
          <span className="iconGame u-align-middle ig-shop"></span>
          Tiendas
      </a>
        <a id="btnModalDownloadDigital" className="header-top-link is-digital" href="javascript:void(0)" title="Comprar juegos en GAME Digital">
          <span className="iconGame u-align-middle ig-plat2_digi"></span>
          GAME Digital
      </a>
        <a className="header-top-link is-app" href="https://www.game.es/app" title="App GAME">
          <span className="iconGame u-align-middle ig-plat2_digi"></span>
          GAME App
      </a>
        <a className="header-top-link" href="https://www.game.es/atencion-al-cliente" title="Atención al cliente de GAME">
          <span className="iconGame u-align-middle ig-auriculares"></span>
          Atención al cliente
      </a>

        <span className="header-top-advice header-top-advice-sunday">
          <span id="sunday-delivery"></span>
        </span>

        <span className="header-top-advice header-top-advice-shipping is-free filtered-by-send-free" style={{ display: 'none', }} data-filter-by-send-free="true">
          <span className="iconGame ig-truck-left u-align-middle"></span>
          <span className="iconGame fa-check u-align-middle"></span>
          Envío gratis
      </span>
        <span className="header-top-advice header-top-advice-shipping" data-filter-by-send-free="false">
          <span className="iconGame ig-truck-left u-align-middle"></span>
          Envío gratis a partir de 30€
      </span>

      </div>

      <div className="header-wrap">

        <a id="header-wrap-core-toggler" className="header-wrap-core-toggler" href="javascript:void(0)" data-toggler="class: show-header; target: #menuWrap,#header-core-toggler,body,html" data-togglers-binded="true">
        </a>


        <div className="header-core">

          <a id="header-core-toggler" className="header-core-toggler" href="javascript:void(0)" data-toggler="class: show-header; target: #menuWrap,#header-core-toggler,body,html" data-togglers-binded="true">
            <span className="header-core-toggler-anim"></span>
          </a>

          <h1 className="header-core-logo"><a href="https://www.game.es/" className="iconGame">GAME</a></h1>

          <form className="header-core-search" id="searchBox" data-binded="true">

            <div id="header-core-search-drop" className="header-core-search-drop navigation-item is-parent do-parent" data-binded="true">
              <ul className="navigation is-2nd">
                <li className="navigation-item is-highlight">
                  <a className="navigation-item-link" data-search-adder="Url: /" data-search-adder-binded="true">Todas las secciones</a>
                </li>
                <li className="navigation-item ">
                  <ul className="navigation is-3rd">

                    <li className="navigation-item is-highlight">
                      <a className="navigation-item-link" data-search-adder="ID: 0000000001; Type: 1; Source: GIDS; Url: /cine-comics/peliculas-series" data-search-adder-binded="true">Cine - Tv</a>
                    </li>

                  </ul>
                  <a className="navigation-item-link" data-search-adder="ID: 0000000001; Type: 1; Source: GIDS; Url: /cine-comics/peliculas-series" data-search-adder-binded="true">Cine - Tv</a>
                </li>
                <li className="navigation-item ">
                  <ul className="navigation is-3rd">

                    <li className="navigation-item is-highlight">
                      <a className="navigation-item-link" data-search-adder="ID: 0000000004; Type: 1; Source: GIDS; Url: /electronica" data-search-adder-binded="true">Electrónica</a>
                    </li>

                  </ul>
                  <a className="navigation-item-link" data-search-adder="ID: 0000000004; Type: 1; Source: GIDS; Url: /electronica" data-search-adder-binded="true">Electrónica</a>
                </li>
                <li className="navigation-item ">
                  <ul className="navigation is-3rd">

                    <li className="navigation-item is-highlight">
                      <a className="navigation-item-link" data-search-adder="ID: 0000000003; Type: 1; Source: GIDS; Url: /cine-comics/comics" data-search-adder-binded="true">Libros y Papelería</a>
                    </li>

                  </ul>
                  <a className="navigation-item-link" data-search-adder="ID: 0000000003; Type: 1; Source: GIDS; Url: /cine-comics/comics" data-search-adder-binded="true">Libros y Papelería</a>
                </li>
                <li className="navigation-item ">
                  <ul className="navigation is-3rd">

                    <li className="navigation-item is-highlight">
                      <a className="navigation-item-link" data-search-adder="ID: 0000000005; Type: 1; Source: GIDS; Url: /merchan" data-search-adder-binded="true">Merchandising</a>
                    </li>

                  </ul>
                  <a className="navigation-item-link" data-search-adder="ID: 0000000005; Type: 1; Source: GIDS; Url: /merchan" data-search-adder-binded="true">Merchandising</a>
                </li>
                <li className="navigation-item ">
                  <ul className="navigation is-3rd">

                    <li className="navigation-item is-highlight">
                      <a className="navigation-item-link" data-search-adder="ID: 0000000802; Type: 1; Source: GIDS; Url: /pc-gaming" data-search-adder-binded="true">PC Hardware</a>
                    </li>

                  </ul>
                  <a className="navigation-item-link" data-search-adder="ID: 0000000802; Type: 1; Source: GIDS; Url: /pc-gaming" data-search-adder-binded="true">PC Hardware</a>
                </li>
                <li className="navigation-item ">
                  <ul className="navigation is-3rd">

                    <li className="navigation-item is-highlight">
                      <a className="navigation-item-link" data-search-adder="ID: 0000000011; Type: 1; Source: GIDS; Url: /digital" data-search-adder-binded="true">Servicios Digitales</a>
                    </li>

                  </ul>
                  <a className="navigation-item-link" data-search-adder="ID: 0000000011; Type: 1; Source: GIDS; Url: /digital" data-search-adder-binded="true">Servicios Digitales</a>
                </li>
                <li className="navigation-item ">
                  <ul className="navigation is-3rd">

                    <li className="navigation-item is-highlight">
                      <a className="navigation-item-link" data-search-adder="ID: 0000000006; Type: 1; Source: GIDS; Url: /" data-search-adder-binded="true">Videojuegos</a>
                    </li>

                  </ul>
                  <a className="navigation-item-link" data-search-adder="ID: 0000000006; Type: 1; Source: GIDS; Url: /" data-search-adder-binded="true">Videojuegos</a>
                </li>
              </ul>
              <a href="javascript:void(0)" className="navigation-item-link" data-binded="true">
                <span className="navigation-item-link-text" id="search-drop-button-text">Todas las secciones</span>
                <span className="iconGame ig-f-arrow-down"></span>
              </a>
            </div>
            <input id="searchinput" className="form-control ui-autocomplete-input" type="text" placeholder="¿Qué buscas?" autoComplete="off" />
            <div className="autocomplete"></div>
            <button id="submitsearch" type="button" className="btn btn-primary">
              <span className="iconGame mdi-search"></span>
            </button>
            <div className="header-core-search-autocomplete autocomplete"></div>
            <ul id="ui-id-1" tabIndex={0} className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style={{ display: 'none' }}></ul></form>
          <ul id="header-core-user" className="header-core-user navigation is-1st" data-binded="true">

            <li id="itemMember" className="header-core-user-login navigation-item is-parent do-parent" data-binded="true">

              <input name="__RequestVerificationToken" type="hidden" value="BbKUHzuucn-YDOSG2gEgz08ByWY-4itTFECxT5sORD2Fx783K2hDd4qrgHAOCWtfriXJ8YfaY5sj5oQ6Sc6Rsc9uTtJX965si7s08jp1JHM1" />

              <ul className="navigation is-2nd is-not-logged">
                <li className="navigation-item do-not-prevent">
                  <a href="javascript:void(0)" className="login navigation-item-link" title="Iniciar sesión">
                    <span className="navigation-item-link-figure is-icon iconGame fa-power-off"></span>
                    <span className="navigation-item-link-title">Iniciar sesión</span>
                  </a>
                </li>
              </ul>
              <a href="https://www.game.es/VIDEOJUEGOS/SURVIVAL-HORROR/PLAYSTATION-4/RESIDENT-EVIL-3-REMAKE/176417#header-login" className="header-core-user-login-link btn btn-white navigation-item-link" data-binded="true">
                <span className="iconGame mdi-person_outline"></span>
              </a>

            </li>
            <li className="header-core-user-cart navigation-item is-parent do-parent" data-binded="true">
              <div id="summaryCartHeader" className="navigation">

                <div className="tooltip-summary-basket is-empty">
                  <div className="header-section-home">
                    <span className="title-tooltip">Productos añadidos a tu cesta</span>
                  </div>
                  <div className="item-summary-basket">
                    <span className="txt-no-products"><span className="iconGame fa-warning"></span>No hay productos</span>
                  </div>
                </div>
                {/*<script>
    $(function () {
        game.ui.filter({ filterBy: "send-free", value: false});
        if(true) window['cartHeaderIcon'].classList.add('hide');
        else  window['cartHeaderIcon'].classList.remove('hide');        
    });
  </script>*/}
              </div>
              <a className="header-core-user-cart-link btn btn-white navigation-item-link" data-binded="true">
                <span className="iconGame ig-f-cart"></span>
                <span id="cartHeaderIcon" className="iconGame mdi-check header-core-user-cart-link-count hide"></span>
              </a>
            </li>
          </ul>

        </div>

      </div>

    </header>
    </body>);
  }
}

export default Header;