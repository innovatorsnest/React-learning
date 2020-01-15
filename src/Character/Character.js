import React from 'react';


const Character = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        border: '1px solid #ecc',
        margin: '16px',
        cursor: 'pointer'
    }

    return (
        <div style={style}  onClick={props.click}>
            <p>{props.char}</p> 
        </div>
    )
}


export default Character;