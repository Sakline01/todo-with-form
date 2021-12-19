import React from 'react';

const Showcomplete = ({title,status,id,handleToggle,handleDelete,handleComplete,handleShow}) => {
    return (
        <div>
            <button onClick={()=>handleShow()}>SHOW COMPLETE</button>
        </div>
    );
}

export default Showcomplete;
