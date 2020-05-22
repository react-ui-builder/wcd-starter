import PropTypes from 'prop-types';

export interface SampleFunctionComponentProps {
    disabled?: boolean;
    label?: string;
    value?: number;
    onIncrease: (options: { value?: number }) => void;
}

export const SampleFunctionComponentTypes: PropTypes.InferProps<SampleFunctionComponentProps> = {
    /**
     * If true, the control will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The text to be used in an enclosing label element.
     */
    label: PropTypes.string,
    /**
     * The value of the component.
     */
    value: PropTypes.number,
    /*
     * Fired when the user clicks on the button.
     * Signature: `(options: { value?: number }) => void`
     */
    onIncrease: PropTypes.func
};
