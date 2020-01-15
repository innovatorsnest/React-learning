import React from 'react';


const Validate = (props)  => {
    
    let validationComment = null;

    const inputLength = props.inputLength;

    if(inputLength) {
        if(inputLength < 5) {
            validationComment =  (<p> Length too short</p>)
        } else {
            validationComment =  <p>Length too long</p>
        }
    }
       
  

    return (
        
        <div>
            {validationComment}
        </div>
    )

}

export default Validate;