import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
  opacity: 1;
  transition:
    opacity 0.3s ease-in-out,
    left 0.3s ease-in-out;
`;

export const ModalBody = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 40px);
  height: calc(100% - 72px);
  /* width: 320px; */
  padding: 24px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  @media screen and (min-width: 768px) {
    width: 320px;
    height: 701px;
    transform: translate(0, 0);
    top: 42px;
    right: 30px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

// export const SubmitButtonQRCode = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 12px 24px;
//   width: 232px;
//   height: 48px;
//   margin-top: 24px;
//   margin-left: auto;
//   margin-right: auto;
//   background-color: var(--dark-blue);
//   color: white;
//   border-radius: 8px;
//   transition: cubic-bezier(0.075, 0.82, 0.165, 1);

//   &:hover {
//     background-color: var(--pressed-blue);
//   }

//   @media screen and (min-width: 768px) {
//     /* max-width: 373px; */
//   }

//   @media screen and (min-width: 1280px) {
//   }
// `;
