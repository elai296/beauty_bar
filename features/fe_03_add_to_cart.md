# User can add a product to their cart.

### Figma

The Figma for this feature can be found [here](https://www.figma.com/file/BKByCT0h5swDTLY1XHGibRRr/wicked-sales?node-id=11%3A13).

### Task List

- [x] Create a figma that includes an "Add to Cart" button in the `ProductDetails` component and a shopping cart icon in the `Header` component.
- [ ] Check out a branch from `dev` named `add-to-cart-front-end`.
- [ ] Add an initial state property to `App` named `cart` set to an empty `Array`.
- [ ] Define a method in `App` named `getCartItems` that retrieves the user's cart items with a `GET` request to `"/api/cart.php"`
- [ ] Load all of the user's cart items from the server by calling `getCartItems` in `App`'s `componentDidMount` method.
- [ ] Modify `Header` to receive a `cartItemCount` prop that is the number of items in `App`'s `cart` state. `Header` should display a shopping cart icon with the number of items in the user's cart.
- [ ] Define a method in `App` named `addToCart` with one parameter, `product`, which is a product `Object`. `addToCart` should `POST` the product to `"/api/cart.php"` before adding it to the `App`'s `cart` state.
- [ ] Modify `ProductDetails` to include an "Add to Cart" button.
- [ ] In `App`'s render method, pass `App`'s `addToCart` method to `ProductDetails` via props so that when a user clicks the "Add to Cart" button, the product is added to the cart.
- [ ] Push all commits to `origin add-to-cart-front-end`.
- [ ] Open a Pull Request from `add-to-cart-front-end` to `dev`.
