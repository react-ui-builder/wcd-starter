import React, { useState } from 'react';
import { SampleFunctionComponentProps, SampleFunctionComponentTypes } from './SampleFunctionComponent.props';

/**
 * This is a sample component, it shows how to create function wrappers.
 */
const SampleFunctionComponent = (props: SampleFunctionComponentProps) => {

    const [valueLocal, setValueLocal] = useState<number>(props.value!);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        const value: number = valueLocal! + 1;
        setValueLocal(value);
        if (props.onIncrease) {
            props.onIncrease({ value });
        }
    };

    return (
        <button style={{ padding: '1em' }} disabled={props.disabled} onClick={handleClick}>
            Value:&nbsp;{valueLocal}&nbsp;|&nbsp;{props.label}
        </button>
    );
};

SampleFunctionComponent.propTypes = SampleFunctionComponentTypes;

SampleFunctionComponent.defaultProps = {
    label: 'Click to increase',
    value: 0
};

export default SampleFunctionComponent;
