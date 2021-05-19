import { useState } from 'react';

const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegEx = /^[a-zA-Z ]+$/;

export default function ContactPage() {
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    msg: '',
  });

  const [formErros, setFormErros] = useState({ email: '', name: '', msg: '' });

  const validadeFormValues = () => {
    setFormErros({
      ...formErros,
      name: nameRegEx.test(formValues.name) ? '' : 'Nome inválido!',
      email: emailRegEx.test(formValues.email) ? '' : 'E-mail inválido!',
      msg: formValues.msg ? '' : 'Insira uma mensagem!',
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
              htmlFor="name"
            >
              Nome
            </label>
            <input
              value={formValues.name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  name: e.target.value,
                })
              }
            />
            <span className="text-red-500 text-xs italic">
              {formErros.name}
            </span>
          </div>
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
              htmlFor="msg"
            >
              Mensagem
            </label>
            <textarea
              value={formValues.msg}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  msg: e.target.value,
                })
              }
            />
            <span className="text-red-500 text-xs italic">{formErros.msg}</span>
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
        {\n"email":"${formErros.email ? '' : formValues.email}",\n"name":"${
            formErros.name ? '' : formValues.name
          }",\n"msg":"${formErros.msg ? '' : formValues.msg}" }
        `}
        </div>
      </div>
    </div>
  );
}
