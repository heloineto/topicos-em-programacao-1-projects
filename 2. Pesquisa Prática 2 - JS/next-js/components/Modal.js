import { MdClose } from 'react-icons/md';
import { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ModelPopUp = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const renderModal = () => {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.8)',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '100',
        }}
        onClick={closeModal}
        ref={modalRef}
      >
        <animated.div style={animation}>
          <div
            style={{
              width: '800px',
              height: '300px',
              boxShadow: '0 5px 16px rgba(0, 0, 0, 0.2)',
              background: '#fff',
              color: '#000',
              position: 'relative',
              zIndex: '10',
              borderRadius: '10px',
            }}
            showModal={showModal}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                lineHeight: '1.8',
                color: '#141414',
              }}
            >
              <h1>Exemplo de Modal</h1>
              <p style={{ marginBottom: '1rem' }}>Conteúdo do modal</p>
              <button className="waves-effect waves-light btn">
                Butão do modal
              </button>
            </div>
            <MdClose
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '32px',
                height: '32px',
                padding: '0',
                zIndex: '10',
              }}
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </div>
        </animated.div>
      </div>
    );
  };

  return <>{showModal ? renderModal() : null}</>;
};

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <button
        className="waves-effect waves-light btn"
        onClick={() => toggleModal()}
      >
        Click para ver o Modal
      </button>
      <ModelPopUp showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
