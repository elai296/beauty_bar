# User can view the products for sale.

### Figma

The figma for this feature can be found [here](https://www.figma.com/file/BKByCT0h5swDTLY1XHGibRRr/wicked-sales?node-id=0%3A1).

### Task List

- [x] Create a figma that includes a `Header`, `ProductListItem`, and `ProductList` components.
- [ ] Check out a branch from `dev` named `view-products-front-end`.
- [ ] Define an `App` class component in `client/components/app.jsx`. `App` will have no initial state for now.
- [ ] Define a stateless `Header` component in `client/components/header.jsx` that displays the store's name and logo. Add `Header` to `App`'s render method.
- [ ] Define a stateless `ProductListItem` component in `client/components/product-list-item.jsx` that renders a single product card.
- [ ] Define a stateful `ProductList` component in `client/components/product-list.jsx` that will render a grid of `ProductListItems`. Give it an initial state of `products` set to an empty `Array`.
- [ ] Define a method in `ProductList` named `getProducts` that retrieves all products by sending a `GET` request to `/api/products.php`.
- [ ] Add a `componentDidMount` method to `ProductList` that calls `getProducts`.
- [ ] Add `ProductList` to `App`'s render method.
- [ ] Push all commits to `origin view-products-front-end`.
- [ ] Open a Pull Request from `view-products-front-end` to `dev`.
