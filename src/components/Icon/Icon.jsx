import React from 'react';

import GithubIcon from './svgs/github.svg';
import LinkedinIcon from './svgs/linkedin.svg';

import EnvelopeIcon from './pngs/paper-plane.png';

const nameMap = {
  envelope: EnvelopeIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

const Icon = ({ name }) => {
  const svg = nameMap[name];
  return <img width="60" height="60" src={svg} alt={`${name} icon`} />;
};

export default Icon;
