import ContentWrapper from 'Component/ContentWrapper';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

import StepBar from '../../component/StepsBar';

/** @namespace PwaScandiweb/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    renderStepBar() {
        const { checkoutStep } = this.props;
        const arraySteps = Object.keys(this.stepMap);
        return <StepBar steps={ arraySteps } checkoutStep={ checkoutStep } />;
    }

    render() {
        return (
            <main block="Checkout">
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderStepBar() }
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
