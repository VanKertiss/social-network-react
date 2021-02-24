import React from 'react';
import HS from './Dialogs.module.css';
import AddMessageContainer from './AddMessage/AddMessageContainer';

const Dialogs = (props) => {


    

    return (
        <div className={HS.dialogs}>
           
                <AddMessageContainer />
            
            
        </div>
    )
}

export default Dialogs;