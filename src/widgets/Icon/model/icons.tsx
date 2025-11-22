import { Github, Linkedin, Send, MessageCircle } from 'lucide-react';
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
    icon: <Github size={28} />,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/alvinmacaronnie',
    icon: <Send size={28} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alvin-pratama-1a046424b/',
    icon: <Linkedin size={28} />,
  },
  {
    name: 'Instagram',
    url: 'https://wa.me/79370066168',
    icon: <MessageCircle size={30} />,
  },
];
