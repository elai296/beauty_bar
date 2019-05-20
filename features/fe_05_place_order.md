# User can place an order.

### Figma

The Figma for this feature can be found [here](https://www.figma.com/file/BKByCT0h5swDTLY1XHGibRRr/wicked-sales?node-id=17%3A0).

### Task List

- [x] Create a figma that includes a modified `CartSummary` component and a `CheckoutForm` component.
- [ ] Define a method in the `App` component named `placeOrder` that takes an `Object` with `name`, `creditCard`, and `shippingAddress` properties, combines them with the `App`'s `cart` state, and sends a `POST` request to `"/api/orders.php"` before resetting `App`'s `cart` state to an empty `Array`. `placeOrder` should also change the `App`'s `view` state back to `{ name: 'catalog', params: {} }`
- [ ] Define a stateful `CheckoutForm` component with two inputs for the user's name and credit card number, along with a text area for the user's shipping address.
- [ ] Modify `CartSummary` to include a button that changes the `App`'s `view` state to `{ name: 'checkout', params: {} }` (if the user has added any items to their cart).
- [ ] Modify `App`'s render method to conditionally render the `CheckoutForm`, depending on whether the `App`'s `view.name` is `"checkout"`. `App` should pass `placeOrder` to `CheckoutForm` via props.
