import { Link } from 'react-router-dom';

const options = [
  {
    name: 'Carrossel de imagens',
    to: '/carrossel-de-imagens',
  },
  {
    name: 'Validação de campos de data, email e cpf em um formulário',
    to: '/formulario',
  },
  {
    name: 'Modal/Dialog',
    to: '/modal',
  },
  {
    name: 'Ordenar campos em uma tabela',
    to: '/tabela',
  },
];

export default function Menu() {
  const renderButtons = () => {
    return options.map((option) => {
      return (
        <Link
          to={option.to}
          href="#!"
          class="collection-item"
          key={option.name}
        >
          {option.name}
        </Link>
      );
    });
  };

  return (
    <>
      <h1>React</h1>
      <h6>Escolha uma opção:</h6>
      <div class="collection">{renderButtons()}</div>
    </>
  );
}
