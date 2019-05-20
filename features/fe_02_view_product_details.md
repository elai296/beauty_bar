# User can view the details of a product.

### Figma

The Figma for this feature can be found [here](https://www.figma.com/file/BKByCT0h5swDTLY1XHGibRRr/wicked-sales?node-id=3%3A104).

### Task List

- [x] Create a figma that includes a `ProductDetails` component.
- [ ] Check out a branch from `dev` named `view-details-front-end`.
- [ ] Define a stateful `ProductDetails` component in `client/components/product-details.jsx` with an initial state that includes a `product` set to `null` and an initial render method that returns `null`.
- [ ] Add a `componentDidMount` method to `ProductDetails` that retrieves the details of a specific product by `id` from the server with a `GET` request. _e.g._ `"/api/products?id=1"`
- [ ] Complete the implementation of `ProductDetails`'s render method to conditionally render a view of the product's details (as soon as the details are loaded from the server).
- [ ] Add a property to `App`'s initial state named `view` that is an `Object` with two properties; `name` and `params`. `name` is a `String` set to `"catalog"` and `params` is an empty `Object`. _i.e._ `{ view: 'catalog', params: {} }`
- [ ] Define a `setView` method in `App` that takes two parameters; `name` and `params`. `setView` updates `App`'s `view` state to the new `name String` and `params Object`.
- [ ] Pass `App`'s `setView` method into `ProductList` via props so that when a user clicks on a `ProductListItem`, `App`'s `view` state gets updated to `{ name: 'details', params: { id: product.id } }`
- [ ] Modify `App`'s render method to conditionally render either the `ProductList` or the `ProductDetails` based on whether `App`'s current `view.name` state is `"catalog"` or `"details"`. If the `ProductDetails` component is being rendered, pass it `App`'s `view.params` state via props as well as `App`'s `setView` method.
- [ ] Modify `ProductList`'s `componentDidMount` method to request product details based on the props it now receives from `App`.
- [ ] Ensure that when the user clicks "Back to catalog" in `ProductDetails`, `App`'s `setView` callback gets called with `"catalog"` and an empty `Object` to switch the user back to the `ProductList` view.
- [ ] Push all commits to `origin view-details-front-end`.
- [ ] Open a Pull Request from `view-details-front-end` to `dev`.
