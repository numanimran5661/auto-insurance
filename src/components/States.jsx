import React from "react";
import { State } from 'country-state-city';
import { Link } from "react-router-dom";
import ZipCode from "./ZipCode";
const States = () => {
    const states = State.getStatesOfCountry('US')
    return (<>
    <div>
        <ZipCode />
    </div>
        <h1>USA, States</h1>
        <div>
            <div className="grid">
                {states.map((i, index) =>
                (<div key={index}>
                    <Link to={`/${i.isoCode}`} className="box">{i.name}</Link>
                </div>)
                )}
            </div>
        </div>

    </>);
}

export default States;