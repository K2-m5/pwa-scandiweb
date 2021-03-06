import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './StepsBar.style';

/** @namespace PwaScandiweb/Component/StepsBar/Component/StepsBarComponent */
export class StepsBarComponent extends PureComponent {
    static propTypes = {
        steps: PropTypes.instanceOf(Array).isRequired,
        checkoutStep: PropTypes.string.isRequired
    };

    renderSteps() {
        const { steps, checkoutStep } = this.props;
        const currentStep = steps.indexOf(checkoutStep);
        return steps.map((item, index) => {
            const isProgressDone = index > currentStep ? '' : 'progress-done';
            const circleValue = index >= currentStep ? index + 1 : '\u2713';
            return (
                <div block="StepsBar-item" key={ item }>
                    <div block="StepsBar-item-container">
                        <div block="StepsBar-line">
                            <div block={ `StepsBar-line-progress ${ isProgressDone }` } />
                        </div>
                        <div block={ `StepsBar-item-icon ${ isProgressDone }` }>{ circleValue }</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        const steps = this.renderSteps();
        return (
            <div block="StepsBar">
               { steps }
               <div block="StepsBar-line"> </div>
            </div>
        );
    }
}

export default StepsBarComponent;
