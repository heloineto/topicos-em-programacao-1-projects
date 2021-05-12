import { useState } from 'react';

const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const cpfRegEx =
  /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/;

export default function Formulario() {
  const [formValues, setFormValues] = useState({
    email: '',
    cpf: '',
    date: '',
  });

  const [formErros, setFormErros] = useState({ email: '', cpf: '', date: '' });

  const validadeFormValues = () => {
    setFormErros({
      ...formErros,
      cpf: cpfRegEx.test(formValues.cpf) ? '' : 'CPF inválido!',
      email: emailRegEx.test(formValues.email) ? '' : 'E-mail inválido!',
    });
  };

  return (
    <div className="grid place-items-center	bg-gray-300 h-screen">
      <div className="w-full max-w-xs">
        <div
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          style={{
            marginTop: '3rem',
          }}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formValues.email}
              type="text"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  email: e.target.value,
                })
              }
            />
            <span className="text-red-500 text-xs italic">
              {formErros.email}
            </span>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cpf"
            >
              CPF
            </label>
            <input
              value={formValues.cpf}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  cpf: e.target.value,
                })
              }
            />
            <span className="text-red-500 text-xs italic">{formErros.cpf}</span>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Data
            </label>
            <input
              value={formValues.date}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  date: e.target.value,
                })
              }
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            style={{
              width: '100%',
            }}
            onClick={() => validadeFormValues()}
          >
            Submeter
          </button>
        </div>

        <div style={{ marginTop: '10px' }}>
          {`
        JSON para enviar pro server:\n
        {\n"email":"${formErros.email ? '' : formValues.email}",\n"cpf":"${
            formErros.cpf ? '' : formValues.cpf
          }",\n"data":"${formValues.date}" }
        `}
        </div>
      </div>
    </div>
  );
}
