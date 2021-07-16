import React, { useState, createContext } from 'react';

const ModalContext = createContext({
    modalState: false,
    toggleModal: () => { },
})

export function ModalContextProvider(props) {
    const [modalOpen, setModalOpen] = useState(false);

    function toggleModalHandler() {
        setModalOpen(prevmodalOpen => !prevmodalOpen);
    }

    const context = {
        modalState: modalOpen,
        toggleModal: toggleModalHandler,
    }

    return <ModalContext.Provider value={context}>
        {props.children}
    </ModalContext.Provider>
}

export default ModalContext;