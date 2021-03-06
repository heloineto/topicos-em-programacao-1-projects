import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="container mx-auto pt-8 pb-4 mt-16">
      <div className="footer-wrapper flex flex-row px-12 py-6 bg-blue-900">
        <FooterCol name="Categorias" itemPrefix="Categoria" nOfItems={3} />
        <FooterCol
          name="Posts Recentes"
          itemPrefix="Lorem Ipsum"
          nOfItems={3}
        />
        <FooterCol name="Contatos" itemPrefix="Categoria" nOfItems={5} />
      </div>

      <BottomLinks />
    </footer>
  );
}

function FooterCol({ name, itemPrefix, nOfItems = 0 }) {
  const renderItems = () => {
    return [...Array(nOfItems).keys()].map((idx) => {
      return (
        <li key={idx} className="leading-7">
          <Link
            className="pb-1 text-white text-small border-b-2 border-gray-600 inline-block w-full"
            to=""
          >
            {`${itemPrefix} ${idx + 1}`}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="footer-column-1 w-full pb-6 mx-12">
      <h4 className="text-white text-2xl pb-1 border-b-2 border-green-400 flex">
        {name}
        <div className="pr-6"></div>
      </h4>
      <ul className="">{renderItems()}</ul>
    </div>
  );
}

function BottomLinks() {
  function BottomLink({ innerText, to = '' }) {
    return (
      <li>
        <Link className="text-small mr-6 font-medium" to={to}>
          {innerText}
        </Link>
      </li>
    );
  }

  return (
    <ul className="footer-bottom bg-white text-gray-700 border-t-2 border-green-400 flex justify-end pr-10 pt-4">
      <BottomLink innerText="Blog" />
      <BottomLink innerText="Suporte" />
      <BottomLink innerText="Contato" to="/contato" />
    </ul>
  );
}
