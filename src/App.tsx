// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import { GlobalStyle } from './GlobalStyles'
import About from './components/About/About'
import Cases from './components/Cases/Cases'
import ContactUs from './components/ContactUs/ContactUs'
import FAQ from './components/FAQ/FAQ'
import FooterComp from './components/FooterComp/FooterComp'
import HeaderComp from './components/HeaderComp/HeaderComp'
import Main from './components/Main/Main'
import Modal from './components/Modal/Modal'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const onCloseModal = () => {
    setModalOpen(prev=>!prev);
  };
  return (
    <>
      <HeaderComp onCloseModal={onCloseModal} />
      <Main />
      <About />
      <Cases />
      <FAQ />
      <ContactUs />
      <FooterComp />
      {modalOpen && <Modal onCloseModal={onCloseModal} />}
      <GlobalStyle />
    </>
  );
}

export default App
