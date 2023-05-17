import React from "react";

import Carousels from "./Carousels";
import About from "./About";
import Services from "./Services";
import Promotions from "./Promotions";
import Reviews from "./Reviews";
import Contacts from "./Contacts";
import WidgetCallBack from "./WidgetCallBack";

function Main() {

    return(
        <div>
            <Carousels/>
            <About/>
            <Services/>
            <Promotions/>
            <Reviews/>
            <Contacts/>
            <WidgetCallBack/>
        </div>
    )
}
export default Main;
