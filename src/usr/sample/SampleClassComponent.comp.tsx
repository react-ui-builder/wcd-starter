import React from 'react';
import PropTypes from 'prop-types';
import { SampleClassComponentProps, SampleClassComponentTypes } from './SampleClassComponent.props';

interface SampleClassComponentState {
    valueLocal?: number;
}

/**
 * This is a sample component, it shows how to create class wrappers.
 */
class SampleClassComponent extends React.Component<SampleClassComponentProps, SampleClassComponentState> {

    static propTypes: PropTypes.InferProps<SampleClassComponentProps>;
    static defaultProps: PropTypes.InferProps<SampleClassComponentProps>;

    constructor(props: SampleClassComponentProps) {
        super(props);
        this.state = {
            valueLocal: props.value || 0
        }
    }

    componentDidUpdate(prevProps: Readonly<SampleClassComponentProps>, prevState: Readonly<SampleClassComponentState>): void {
        const { value } = this.props;
        if (value !== prevProps.value && value !== prevState.valueLocal) {
            this.setState({ valueLocal: value });
        }
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        const value: number = this.state.valueLocal! + 1;
        this.setState({
            valueLocal: value
        });
        if (this.props.onIncrease) {
            this.props.onIncrease({ value });
        }
    };

    render(): JSX.Element {
        const { disabled, label } = this.props;
        const { valueLocal } = this.state;
        return (
            <button style={{ padding: '1em' }} disabled={disabled} onClick={this.handleClick}>
                Value:&nbsp;{valueLocal}&nbsp;|&nbsp;{label}
            </button>
        );
    }
}

SampleClassComponent.propTypes = SampleClassComponentTypes;

SampleClassComponent.defaultProps = {
    label: 'Click to increase',
    value: 0
};

export default SampleClassComponent;
