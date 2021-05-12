const options = [
  {
    name: 'Carrossel de imagens',
    icon: '',
  },
  {
    name: 'Validação de campos de data, email e cpf em um formulário',
    icon: '',
  },
  {
    name: 'Modal/Dialog',
    icon: '',
  },
  {
    name: 'Ordenar campos em uma tabela',
    icon: '',
  },
];

export default function () {
  const renderButtons = () => {
    return (
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Carrossel de imagens
      </button>
    );
  };

  return (
    <div>
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Submit
        <i class="material-icons right">send</i>
      </button>
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Submit
        <i class="material-icons right">send</i>
      </button>
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Submit
        <i class="material-icons right">send</i>
      </button>
    </div>
  );
}
