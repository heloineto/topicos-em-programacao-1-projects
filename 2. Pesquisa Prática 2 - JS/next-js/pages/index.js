import Link from 'next/link';

const options = [
  {
    name: 'Carrossel de imagens',
    href: '/carrossel-de-imagens',
  },
  {
    name: 'Validação de campos de data, email e cpf em um formulário',
    href: '/formulario',
  },
  {
    name: 'Modal/Dialog',
    href: '/modal',
  },
  {
    name: 'Ordenar campos em uma tabela',
    href: '/tabela',
  },
];

export default function Menu() {
  const renderButtons = () => {
    return options.map((option, idx) => {
      return (
        <Link
          className={`flex-${idx + 1}`}
          href={`app${option.href}`}
          key={option.name}
        >
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            {option.name}
          </button>
        </Link>
      );
    });
  };

  return (
    <div className="flex flex-col items-center	justify-center shadow-sm h-screen bg-gray-200">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-20">
        <h1 className="text-5xl mb-3">Nextjs</h1>
        <h6 className="text-xl mb-1">Escolha uma opção:</h6>
        <div className="flex space-x-4">{renderButtons()}</div>
      </div>
    </div>
  );
}
