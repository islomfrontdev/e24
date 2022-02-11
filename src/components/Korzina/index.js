import KorzinaWrapper from "./KorzinaWrapper";
import Header from "../../container/Header";

import React from "react";

function Korzina(props) {
  return (
    <KorzinaWrapper>
      <Header />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row d-flex flex-column justify-content-start align-items-center">
          <div className="col-lg-12">
            <h1>Корзина</h1>
          </div>
        </div>
      </div>
    </KorzinaWrapper>
  );
}

export default Korzina;
