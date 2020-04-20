import React from "react";
import ContainerHeader from "components/ContainerHeader";
import InitMessages from "util/IntlMessages";

const postTrip = ({match}) =>{

    return (
        <div className = "dashboard animated slideInUpTiny animation-duration-3">
            <ContainerHeader match = {match} title={< InitMessages id = "Search for Trip" />} />
        </div>
    );
}

export default postTrip;