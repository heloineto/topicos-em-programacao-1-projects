import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header class="bg-gray-200 pt-4 px-8 border-t-2 border-green-400 relative">
      <div class="title mb-12">
        <h1 class="text-4xl">Web-Cliente</h1>
        <h6 class="text-1xl">Universidade Tecnológica Federal do Paraná</h6>
      </div>
      <SearchForm />
      <nav class="bg-white flex items-center">
        <NavLink to="/" innerText="Home" isHighlighted></NavLink>
        <NavLink to="/blog" innerText="Blog"></NavLink>
        <NavLink to="/produtos" innerText="Produtos"></NavLink>
        <NavLink to="/contato" innerText="Contato"></NavLink>
      </nav>
    </header>
  );
}

function SearchForm() {
  return (
    <form action="" class="absolute top-0 right-0 mr-8 mt-4">
      <input type="text" class="p-2" />
      <button class="text-white p-2 bg-green-400">Pesquisar</button>
    </form>
  );
}

function NavLink({ to, innerText, isHighlighted = false }) {
  return (
    <Link
      to={to}
      class={`
        ${
          isHighlighted
            ? 'bg-green-400 text-white'
            : 'text-black  hover:text-white'
        } hover:bg-green-700 px-3 py-3 font-medium
      `}
    >
      {innerText}
    </Link>
  );
}
