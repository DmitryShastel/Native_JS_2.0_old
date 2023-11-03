import React from 'react';

export const Settings = () => {
    return (
        <div className="settings-container">
           <div className="setting-row">
               <h3 className="setting-label">max value:</h3>
               <input type={'number'}  className="setting-input input-center"/>

           </div>
            <div className="setting-row">
                <h3 className="setting-label">start value:</h3>
                <input type={'number'} className="setting-input input-center" />
            </div>
        </div>
    );
};