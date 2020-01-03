import React from 'react';

import Icon from '../Icon';
import { CONTACTS } from '../../constants';

const Footer = () => (
  <footer>
    <a href={CONTACTS.EMAIL} target="_top">
      <Icon name="envelope" />
    </a>
    <a href={CONTACTS.LINKEDIN} target="_blank" rel="noopener noreferrer">
      <Icon name="linkedin" />
    </a>
    <a href={CONTACTS.GITHUB} target="_blank" rel="noopener noreferrer">
      <Icon name="github" />
    </a>
  </footer>
);

export default Footer;
