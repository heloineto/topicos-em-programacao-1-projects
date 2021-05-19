import React from 'react';

export default function HomePage() {
  return (
    <>
      <section class="hero mx-8">
        <div class="hero-img-wrapper relative">
          <div
            class="
              hero-img-text-wrapper
              z-10
              absolute
              bottom-0
              right-0
              mb-12
              mr-12
              text-white
              font-medium
              flex flex-col
              items-end
            "
          >
            <div class="hero-img-title bg-green-400 mb-3 w-max p-3">
              XTH-3000
            </div>
            <div class="hero-img-subtitle bg-black bg-opacity-50 w-max p-3">
              As melhores imagens do mercado, direto para você!
            </div>
          </div>
          <div
            class="
              hero-img-overlay
              bg-white bg-opacity-25
              w-full
              h-full
              absolute
            "
          ></div>
          <img
            src="https://images.unsplash.com/photo-1606986601547-a4d886b671b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            alt="Foto de uma câmera"
            class="hero-img object-cover w-full h-full"
          />
        </div>
      </section>
      <section>
        <div class="cards-wrapper flex flex-row justify-between">
          <div class="card-wrapper">
            <div class="p-10">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full object-cover h-52"
                  src="https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Girl"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 w-full text-center">
                    Lorem Ipsum
                  </div>
                  <p class="text-gray-700 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicingelit.
                    Totam error fugit blanditiis mollitiandaelaboriosam saepe!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="p-10">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full object-cover h-52"
                  src="https://images.unsplash.com/photo-1534957753291-64d667ce2927?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                  alt="Girl"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 w-full text-center">
                    Lorem Ipsum
                  </div>
                  <p class="text-gray-700 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicingelit.
                    Totam error fugit blanditiis mollitiandaelaboriosam saepe!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="p-10">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full object-cover h-52"
                  src="https://images.unsplash.com/photo-1555363453-81c835456fff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="Girl"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 w-full text-center">
                    Lorem Ipsum
                  </div>
                  <p class="text-gray-700 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicingelit.
                    Totam error fugit blanditiis mollitiandaelaboriosam saepe!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="hero mx-8">
        <div class="font-bold text-3xl mb-2 w-full text-center">
          Trabalhos Recentes
        </div>
        <p class="text-gray-700 text-center mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam error
          fugit blanditiis mollitiandae laboriosam saepe!
        </p>

        <ul class="flex flex-row justify-center">
          <li class="relative block group">
            <img
              src="https://picsum.photos/300/300"
              width="300"
              height="300"
              class="object-cover pointer-events-none group-hover:opacity-75"
            />
            <a
              class="
                absolute
                bottom-0
                bg-white bg-opacity-50
                w-full
                text-center text-gray-700
                py-4
              "
            >
              Imagem 1
            </a>
          </li>
          <li class="relative block group">
            <img
              src="https://picsum.photos/400/400"
              width="300"
              height="300"
              class="object-cover pointer-events-none group-hover:opacity-75"
            />
            <a
              class="
                absolute
                bottom-0
                bg-white bg-opacity-50
                w-full
                text-center text-gray-700
                py-4
              "
            >
              Imagem 2
            </a>
          </li>
          <li class="relative block group">
            <img
              src="https://picsum.photos/500/500"
              width="300"
              height="300"
              class="object-cover pointer-events-none group-hover:opacity-75"
            />
            <a
              class="
                absolute
                bottom-0
                bg-white bg-opacity-50
                w-full
                text-center text-gray-700
                py-4
              "
            >
              Imagem 3
            </a>
          </li>
          <li class="relative block group">
            <img
              src="https://picsum.photos/600/600"
              width="300"
              height="300"
              class="object-cover pointer-events-none group-hover:opacity-75"
            />
            <a
              class="
                absolute
                bottom-0
                bg-white bg-opacity-50
                w-full
                text-center text-gray-700
                py-4
              "
            >
              Imagem 4
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
