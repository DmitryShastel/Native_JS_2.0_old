import React, {ChangeEvent} from 'react';


type  SettingsType = {
    title: string
    value: number
    callback: (e: ChangeEvent<HTMLInputElement>) => void
}



export const Input = (props: SettingsType) => {

    return (
        <div >
            <div className="setting-row">
                <h3 className="setting-label">{props.title}</h3>

                <input
                    type={'number'}
                    className="setting-input input-center"
                    value={props.value}
                    onChange={props.callback}
                />
            </div>
        </div>
    );
};