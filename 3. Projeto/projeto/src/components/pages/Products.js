import { Component } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { connect } from 'react-redux';

class ProductsPage extends Component {
  renderProducts = () => {
    return productsData.map((product) => {
      return (
        <div
          key={product.id}
          class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
        >
          <div
            class="flex items-end justify-end w-full bg-cover"
            style={{
              height: '23rem',
              backgroundImage: `url("imgs/products/${product.id}.jpg")`,
            }}
          >
            <button class="p-5 rounded-full bg-blue-600 text-white mx-5 -mb-9 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <FaCartPlus class="h-8 w-8 pr-1" />
            </button>
          </div>
          <div class="px-5 py-3">
            <h3 class="text-gray-700 font-medium">{product.title}</h3>
            <span class="text-gray-500 mt-2">R$ {product.priceBRL}</span>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <main class="my-8">
        <div class="container mx-auto px-6">
          <h3 class="text-gray-800 text-3xl font-medium text-center uppercase font-bold tracking-widest">
            Produtos
          </h3>
          <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6">
            {this.renderProducts()}
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(ProductsPage);
