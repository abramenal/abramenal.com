import React from 'react';

import { Section, LeftCol, RightCol } from './styled';
import { Header, Footer, Copyright } from '../../components';

const Home = () => (
  <Section>
    <LeftCol>
      <Header />
    </LeftCol>
    <RightCol>
      <Footer />
      <Copyright />
    </RightCol>
  </Section>
);

export default Home;
