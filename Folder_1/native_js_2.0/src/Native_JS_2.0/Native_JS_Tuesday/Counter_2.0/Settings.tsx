import React, {ChangeEvent, useState} from 'react';

export const Settings = () => {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = Number(e.currentTarget.value)
        setMaxValue(maxValue)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue = Number(e.currentTarget.value)
        setStartValue(startValue)
    }

    return (
        <div className="settings-container">
            <div className="setting-row">
                <h3 className="setting-label">max value:</h3>

                <input
                    type={'number'}
                    className="setting-input input-center"
                    value={maxValue}
                    onChange={onChangeMaxValue}
                />

            </div>
            <div className="setting-row">
                <h3 className="setting-label">start value:</h3>
                <input
                    type={'number'}
                    className="setting-input input-center"
                    value={startValue}
                    onChange={onChangeStartValue}
                />
            </div>
        </div>
    );
};