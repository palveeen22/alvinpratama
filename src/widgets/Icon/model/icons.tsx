import { Github, Linkedin, Send, Instagram } from 'lucide-react';
import type { ReactElement } from 'react';

export type TIcon = {
  name: string;
  url: string;
  icon: ReactElement;
};

export const SOCIAL_LINKS: TIcon[] = [
  {
    name: 'Github',
    url: 'https://github.com/palveeen22',
    icon: <Github size={20} />,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/alvinmacaronnie',
    icon: <Send size={20} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alvin-pratama-1a046424b/',
    icon: <Linkedin size={20} />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/alvinnnprtm_/',
    icon: <Instagram size={20} />,
  },
];
