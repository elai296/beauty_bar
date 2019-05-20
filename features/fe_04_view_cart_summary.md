# User can view their cart summary.

### Figma

The Figma for this feature can be found [here](https://www.figma.com/file/BKByCT0h5swDTLY1XHGibRRr/wicked-sales?node-id=11%3A36).

### Task List

- [x] Create a figma that includes a `CartSummaryItem` component and a `CartSummary` component.
- [ ] Check out a branch from `dev` named `view-cart-summary-front-end`.
- [ ] Define a stateless `CartSummaryItem` component that takes a cart `item` via props and displays the `item`'s image, name, price, and short description.
- [ ] Define a stateless `CartSummary` component that takes an `Array` of cart items via props and renders a list of `CartSummaryItems`. `CartSummary` should also have a heading for the list and display the total price of all cart items. If there are no items in the cart, then `CartSummary` should display a message to the user.
- [ ] Add `CartSummary` to `App`'s render method, passing it `App`'s `cart` state via props. `CartSummary` should be conditionally rendered depending on whether `App`'s `view.name` state is `"cart"`.
- [ ] In `App`'s render method, pass `setView` to `Header` so that when the user clicks the shopping cart icon, the `App`'s view state changes to `{ name: "cart", params: {} }`.
- [ ] Allow the user to return to the catalog view from their shopping cart summary by clicking "< Back to catalog".
- [ ] Push all commits to `origin view-cart-summary-front-end`.
- [ ] Open a Pull Request from `view-cart-summary-front-end` to `dev`.
