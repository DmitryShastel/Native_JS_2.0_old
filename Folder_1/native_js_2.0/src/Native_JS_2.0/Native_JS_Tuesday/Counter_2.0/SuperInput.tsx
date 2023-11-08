import React, {ChangeEvent} from 'react';


type  SettingsType = {
    title: string
    value: number
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
}



export const SuperInput = (props: SettingsType) => {

    return (
        <div >
            <div className="setting-row">
                <h3 className="setting-label">{props.title}</h3>

                <input
                    type={'number'}
                    className={`setting-input input-center ${props.error}`}
                    value={props.value}
                    onChange={props.callback}
                />
            </div>
        </div>
    );
};