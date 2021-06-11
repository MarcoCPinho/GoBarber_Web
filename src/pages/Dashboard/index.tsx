import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img
              src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.supremoarabica.com.br%2Fwp-content%2Fuploads%2F2019%2F04%2F10-curisoidades-sobre-o-caf%25C3%25A9.jpg&imgrefurl=https%3A%2F%2Fwww.supremoarabica.com.br%2F10-curiosidades-sobre-o-cafe%2F&tbnid=JMZDswYEggPicM&vet=12ahUKEwini9H8k5DxAhUjqZUCHTCfA9QQMygCegUIARDXAQ..i&docid=A8oGre_lFvH9cM&w=1600&h=1200&q=caf%C3%A9&ved=2ahUKEwini9H8k5DxAhUjqZUCHTCfA9QQMygCegUIARDXAQ}"
              alt="userImg"
            />
            <div>
              <span>Bem-vindo,</span>
              <strong>Marco Pinho</strong>
            </div>
          </Profile>

          <button type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
