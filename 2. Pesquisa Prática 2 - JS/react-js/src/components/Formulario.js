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
    <>
      <div
        className="row card"
        style={{
          marginTop: '3rem',
        }}
      >
        <div className="input-field col s4">
          <input
            value={formValues.email}
            type="text"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                email: e.target.value,
              })
            }
          />
          <label className="active" htmlFor="email">
            Email
          </label>
          <span className="red-text">{formErros.email}</span>
        </div>
        <div className="input-field col s4">
          <input
            value={formValues.cpf}
            type="text"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                cpf: e.target.value,
              })
            }
          />
          <label className="active" htmlFor="cpf">
            CPF
          </label>
          <span className="red-text">{formErros.cpf}</span>
        </div>
        <div className="input-field col s3">
          <input
            value={formValues.date}
            type="date"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                date: e.target.value,
              })
            }
          />
          <label className="active" htmlFor="date">
            Data
          </label>
        </div>
      </div>
      <button
        className="waves-effect waves-light btn"
        style={{
          width: '100%',
        }}
        onClick={() => validadeFormValues()}
      >
        Submeter
      </button>

      <div style={{ marginTop: '10px' }}>
        {`
        JSON para enviar pro server:\n
        {\n"email":"${formErros.email ? '' : formValues.email}",\n"cpf":"${
          formErros.cpf ? '' : formValues.cpf
        }",\n"data":"${formValues.date}" }
        `}
      </div>
    </>
  );
}
