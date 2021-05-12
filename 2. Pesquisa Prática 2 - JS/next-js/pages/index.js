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
    return options.map((option) => {
      return (
        <Link href={`app${option.href}`} key={option.name}>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            {option.name}
          </button>
        </Link>
      );
    });
  };

  return (
    <>
      <h1 className="text-5xl">React</h1>
      <h6 className="text-xl">Escolha uma opção:</h6>
      <div className="flex flex-row">{renderButtons()}</div>
    </>
  );
}
