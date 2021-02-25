import { PureComponent } from 'react';

import './StepsBar.style';

/** @namespace PwaScandiweb/Component/StepsBar/Component/StepsBarComponent */
export class StepsBarComponent extends PureComponent {
    render() {
        return (
            <div block="StepsBar">
                <div block="StepsBar-line progress-done"> </div>
                <div block="StepsBar-item">
                    <div block="StepsBar-item-container">
                        <div block="StepsBar-item-icon progress-done">1</div>
                        <div block="StepsBar-line"> </div>
                    </div>
                </div>
                <div block="StepsBar-item">
                    <div block="StepsBar-item-container">
                        <div block="StepsBar-item-icon">
                            <span block="StepsBar-icon">2</span>
                        </div>
                        <div block="StepsBar-line"> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepsBarComponent;
