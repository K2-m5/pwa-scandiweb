import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './StepsBar.style';

/** @namespace PwaScandiweb/Component/StepsBar/Component/StepsBarComponent */
export class StepsBarComponent extends PureComponent {
    static propTypes = {
        steps: PropTypes.instanceOf(Array).isRequired,
        currentStep: PropTypes.number.isRequired
    };

    renderSteps() {
        const { steps, currentStep } = this.props;
        return (
            steps.map((index) => {
                let progress = 'progress-done';
                if (index > currentStep) {
                    progress = '';
                }

                return (
                    <div block="StepsBar-item">
                        <div block="StepsBar-item-container">
                            <div block={ `StepsBar-item-icon ${ progress }` }>{ index }</div>
                            <div block={ `StepsBar-line ${ progress }` }> </div>
                        </div>
                    </div>
                );
            })
        );
    }

    render() {
        return (
            <div block="StepsBar">
                <div block="StepsBar-line progress-done"> </div>
               { this.renderSteps() }
            </div>
        );
    }
}

export default StepsBarComponent;
