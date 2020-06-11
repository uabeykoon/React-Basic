import React from 'react';

const Validation = (props) => {

    let validationMessage = 'Text long enough';

    if(props.count<5){
        validationMessage = 'Text too short..!';

    }

    return(
        <div>
           <p>{validationMessage}</p>
        </div>
    );
}; 

export default Validation;