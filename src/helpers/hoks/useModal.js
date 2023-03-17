import { useState } from 'react';

export const useModal = (initialState = false) => {
  const [modalOpen, setModalOpen] = useState(initialState);
  const openModalState = () => setModalOpen(true);
  const closeModalState = () => setModalOpen(false);
  return { modalOpen, openModalState, closeModalState };
};