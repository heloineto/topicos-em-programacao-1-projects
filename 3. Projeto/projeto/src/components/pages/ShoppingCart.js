import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCart,
  decrementFromCart,
  removeFromCart,
} from '../../actions/cartActions';
import { fetchProducts } from '../../actions/productsActions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ShoppingCartPage extends Component {
  addProductToCart(product) {
    this.props.addToCart(this.props.cart, product);
    toast.success(`👍 "${product.title}" Adicionado no carrinho!`, {
      position: 'bottom-right',
      autoClose: 2000,
    });
  }

  removeProductFromCart(product) {
    this.props.removeFromCart(this.props.cart, product);
    toast.error(`👍 "${product.title}" Removido do carrinho!`, {
      position: 'bottom-right',
      autoClose: 2000,
    });
  }

  decrementProductFromCart(product) {
    this.props.decrementFromCart(this.props.cart, product);
    toast.warning(`👍 "${product.title}" Decrementado do carrinho!`, {
      position: 'bottom-right',
      autoClose: 2000,
    });
  }

  getTotalCost() {
    let totalCost = 0;
    this.props.cart.forEach(({ product, amount }) => {
      totalCost += amount * parseFloat(product.priceBRL);
    });

    return totalCost;
  }

  getAmountOfItems() {
    return this.props.cart.length;
  }

  renderItems() {
    return this.props.cart.map(({ product, amount }) => {
      return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5">
            <div className="w-20">
              <img
                className="h-24"
                src={`imgs/products/${product.id}.jpg`}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{product.title}</span>
              <button
                onClick={() => this.removeProductFromCart(product)}
                className="font-bold hover:text-red-500 text-gray-500 text-sm"
              >
                Remover
              </button>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <button onClick={() => this.decrementProductFromCart(product)}>
              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </button>

            <input
              className="mx-2 border text-center w-8"
              type="text"
              value={amount}
            />

            <button onClick={() => this.addProductToCart(product)}>
              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </button>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">
            {`R$ ${product.priceBRL}`}
          </span>
          <span className="text-center w-1/5 font-semibold text-sm">
            {`R$ ${amount * parseFloat(product.priceBRL)}`}
          </span>
          <ToastContainer />
        </div>
      );
    });
  }

  render() {
    return (
      <main className="container mx-auto">
        <div className="flex">
          <div className="w-3/4 bg-white px-10 pt-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Carrinho de Compras</h1>
              <h2 className="font-semibold text-2xl">{`${this.getAmountOfItems()} Itens`}</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Detalhes do Produto
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantidade
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Preço
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {this.renderItems()}
            <Link
              to="/produtos"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continuar Comprando
            </Link>
          </div>
          <div id="summary" className="w-1/4 px-8 pt-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Sumário do Pedido
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">{`Itens ${this.getAmountOfItems()}`}</span>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Custo total:</span>
                <span>{`R$ ${this.getTotalCost()}`}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart, products: state.products.items ?? [] };
};

export default connect(mapStateToProps, {
  fetchProducts,
  addToCart,
  removeFromCart,
  decrementFromCart,
})(ShoppingCartPage);
