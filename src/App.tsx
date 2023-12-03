// import { useState } from 'react'
import { useState } from 'react';
import { GlobalStyle } from './GlobalStyles';
import AboutSection from './components/AboutSection/AboutSection';
import CasesSection from './components/CasesSection/CasesSection';
import ContactUsSection from './components/ContactUsSection/ContactUsSection';
import FAQSection from './components/FAQSection/FAQSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import MainSection from './components/MainSection/MainSection';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const onCloseModal = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <>
      <Header onCloseModal={onCloseModal} />
      <Main>
        <MainSection />
        <AboutSection />
        <CasesSection />
        <FAQSection />
        <ContactUsSection />
      </Main>
      <Footer />
      {modalOpen && <Modal onCloseModal={onCloseModal} />}
      <GlobalStyle />
    </>
  );
}

export default App;
