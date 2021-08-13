import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'mailto:rjagga@wharton.upenn.edu',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://www.linkedin.com/in/rohitjagga02',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/rohitjagga02',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://facebook.com/rohitjagga02',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/12ohitj/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://angel.co/u/rohit-jagga',
    label: 'Angel List',
    icon: faAngellist,
  },
];

export default data;
