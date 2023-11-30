import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseButton, ModalBody, Overlay } from './Modal.styled';
import { IProps } from './types';
import LinksList from '../LinksList/LinksList';

export default function Modal({ onCloseModal }: IProps) {
  const modalRoot = document.getElementById('modal-root')!;

  useEffect(() => {
    const body = document.body;
    // Блокируем скроллинг фона при открытии модалки
    body.style.overflow = 'hidden';
    // Убираем блокировку скроллинга при закрытии модалки
    return () => {
      body.style.overflow = 'visible';
    };
  }, []);

  const onPressEsc = useCallback(
    (event: { code: string; }) => {      
      if (event.code === 'Escape') {
        onCloseModal();
      }
    },
    [onCloseModal],
  );

  useEffect(() => {
    window.addEventListener('keydown', onPressEsc);
    return ()=>window.removeEventListener('keydown', onPressEsc);
  }, [onPressEsc]);

  const handleOverlay = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };
  return createPortal(
    <Overlay onClick={handleOverlay}>
      <ModalBody>
        <CloseButton onClick={() => onCloseModal()}>close</CloseButton>
        <LinksList />
      </ModalBody>
    </Overlay>,
    modalRoot,
  );
}
