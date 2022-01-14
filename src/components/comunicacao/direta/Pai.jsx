import React from "react";
import Filho from "./Filho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <div>
        {/* formas diferentes*/}
        <Filho {...props}>João</Filho>
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <Filho sobrenome="Silva">Pedro</Filho>
        
    </div>