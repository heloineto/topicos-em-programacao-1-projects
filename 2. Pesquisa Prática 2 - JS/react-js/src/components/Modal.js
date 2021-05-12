import ReactDOM from 'react-dom';
import history from '../history';

function ModalModel({ headerText, contentText, actionButtons, onDismiss }) {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{headerText}</div>
        <div className="content">{contentText}</div>
        <div className="actions">{actionButtons}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default function Modal() {
  return (
    <ModalModel
      headerText="Isso é um modal"
      contentText="texto do modal"
      actionButtons="Buttoes aqui"
      onDismiss={() => history.push('/')}
    ></ModalModel>
  );
}
