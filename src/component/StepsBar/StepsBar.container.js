import { PureComponent } from 'react';

import StepsBarComponent from './StepsBar.component';

/** @namespace PwaScandiweb/Component/StepsBar/Container/StepsBarContainer */
export class StepsBarContainer extends PureComponent {
    array = ['1', '2', '3'];

    currentStep = 1;

    render() {
        return (<StepsBarComponent steps={ this.array } currentStep={ this.currentStep } />);
    }
}

export default StepsBarContainer;
