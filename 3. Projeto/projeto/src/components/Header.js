import React from 'react';

export default function Header() {
  return (
    <header class="bg-gray-200 pt-4 px-8 border-t-2 border-green-400 relative">
      <div class="title mb-12">
        <h1 class="text-4xl">Web-Cliente</h1>
        <h6 class="text-1xl">Universidade Tecnológica Federal do Paraná</h6>
      </div>
      <form action="" class="absolute top-0 right-0 mr-8 mt-4">
        <input type="text" class="p-2" />
        <button class="text-white p-2 bg-green-400">Pesquisar</button>
      </form>
      <nav class="bg-white flex items-center">
        <a href="/home/" class="bg-green-400 text-white px-3 py-3 font-medium">
          Home
        </a>
        <a
          href="/blog/"
          class="
        text-black
        hover:bg-green-700
        hover:text-white
        px-3
        py-3
        font-medium
      "
        >
          Blog
        </a>
        <a
          href="/produtos/"
          class="
        text-black
        hover:bg-green-700
        hover:text-white
        px-3
        py-3
        font-medium
      "
        >
          Produtos
        </a>
        <a
          href="/contatos/"
          class="
        text-black
        hover:bg-green-700
        hover:text-white
        px-3
        py-3
        font-medium
      "
        >
          Contatos
        </a>
      </nav>
    </header>
  );
}
