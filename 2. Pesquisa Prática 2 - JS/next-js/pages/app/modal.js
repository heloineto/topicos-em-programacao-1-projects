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
            className="modal-container bg-white rounded shadow-lg z-50 overflow-y-auto w-96"
            showModal={showModal}
          >
            <div className="modal-content py-4 text-left px-6">
              <p class="text-2xl font-bold">Exemplo de Modal</p>
              <p style={{ marginBottom: '1rem' }}>Conteúdo do modal</p>
              <div className="grid place-items-center mt-16">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Butão do modal
                </button>
              </div>
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
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => toggleModal()}
      >
        Click para ver o Modal
      </button>
      <ModelPopUp showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
