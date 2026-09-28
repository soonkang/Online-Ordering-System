import React from 'react';

class Paypal extends React.Component {
  paypalRef = React.createRef();
  paypalInitialized = false;

  componentDidMount() {
    if (!this.paypalInitialized) {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [
                {
                  description: 'Western Food',
                  amount: {
                    currency_code: 'SGD',
                    value: '19.00',
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
          },
          onError: err => {
            console.log(err);
          },
        })
        .render(this.paypalRef.current);

      this.paypalInitialized = true;
    }
  }

  render() {
    return (
      <div>
        <div ref={this.paypalRef}></div>
      </div>
    );
  }
}

export default Paypal;
