import React from 'react';

function Botton(props) {
    const { btnText } = props;


    return (

        <button className="btn btn-primary btn-large" onClick={props.action}>{btnText}</button>

    )
}

export default Botton