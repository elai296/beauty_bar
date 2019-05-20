# User can view the products for sale.

### Figma

The figma for this feature can be found [here](https://www.figma.com/file/BKByCT0h5swDTLY1XHGibRRr/wicked-sales?node-id=0%3A1).

### Task List

- [x] Create a figma that includes a `Header`, `ProductListItem`, and `ProductList` components.
- [ ] Check out a branch from `dev` named `view-products-front-end`.
- [ ] Define a stateful `App` component in `client/components/app.jsx` with an initial state that includes an empty `Array` of products.
- [ ] Define a stateless `Header` component in `client/components/header.jsx` that displays the store's name and logo. Add `Header` to `App`'s render method.
- [ ] Define a method in `App` named `getProducts` that retrieves all products by sending a `GET` request to `/api/products.php`.
- [ ] Add a `componentDidMount` method to `App` that calls `getProducts`.
- [ ] Define a stateless `ProductListItem` component in `client/components/product-list-item.jsx` that renders a single product card.
- [ ] Define a stateless `ProductList` component in `client/components/product-list.jsx` that renders a grid of `ProductListItems`.
- [ ] Add `ProductList` to `App`'s render method and pass it all of `App`'s products as a prop.
- [ ] Push all commits to `origin view-products-front-end`.
- [ ] Open a Pull Request from `view-products-front-end` to `dev`.
