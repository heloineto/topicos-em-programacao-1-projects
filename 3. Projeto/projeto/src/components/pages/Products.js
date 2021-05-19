import { Component, useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import { fetchProducts } from '../../actions/productsActions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

const ProductsPage = (props) => {
  const [modal, setModal] = useState(false);
  const [modalProd, setmodalProd] = useState({});

  useEffect(() => {
    props.fetchProducts();
  }, []);

  const displayModalAt = (product) => {
    setModal(true);
    setmodalProd(product);
  };

  const addProductToCart = (product) => {
    props.addToCart(props.cart, product);
    toast.success(`👍 "${product.title}" Adicionado no carrinho!`, {
      position: 'bottom-right',
      autoClose: 2000,
    });
  };

  const renderProducts = () => {
    return props.products.map((product) => {
      return (
        <button
          onClick={() => displayModalAt(product)}
          key={product.id}
          className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
        >
          <div
            className="flex items-end justify-end w-full bg-cover"
            style={{
              height: '23rem',
              backgroundImage: `url("imgs/products/${product.id}.jpg")`,
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                addProductToCart(product);
              }}
              className="p-5 rounded-full bg-blue-600 text-white mx-5 -mb-9 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              <FaCartPlus className="h-8 w-8 pr-1" />
            </button>
          </div>
          <div className="px-5 py-3">
            <h3 className="text-gray-700 font-medium">{product.title}</h3>
            <span className="text-gray-500 mt-2">{`R$ ${product.priceBRL}`}</span>
          </div>
        </button>
      );
    });
  };

  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <h3 className="text-gray-800 text-3xl font-medium text-center uppercase font-bold tracking-widest">
          Produtos
        </h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6">
          {renderProducts()}
        </div>
      </div>
      <ToastContainer />
      <PureModal
        header={
          <div className="text-gray-700 font-bold uppercase">
            {modalProd.title}
          </div>
        }
        children={<p>{modalProd.description}</p>}
        isOpen={modal}
        closeButton="X"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      ></PureModal>
    </main>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart, products: state.products.items ?? [] };
};

export default connect(mapStateToProps, { fetchProducts, addToCart })(
  ProductsPage
);
