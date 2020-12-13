import { ICase } from '../interfaces/case';

import BolImg from './../assets/images/bolcom.png';
import ArlaImg from './../assets/images/arla.png';
import ChocomelImg from './../assets/images/chocomel.png';
import FlorensisImg from './../assets/images/florensis.png';
import GemeentemuseumImg from './../assets/images/gemeentemuseum.png';
import JblImg from './../assets/images/jbl.png';
import KempenImg from './../assets/images/kempen.png';
import KoninklijkeBibliotheekImg from './../assets/images/koninklijke-bibliotheek.png';
import LibertyGlobalImg from './../assets/images/liberty-global.png';
import LightningImg from './../assets/images/lightning.png';
import PhilipsImg from './../assets/images/philips.png';
import TuiImg from './../assets/images/tui.png';
import ZalandoImg from './../assets/images/zalando.png';

export const mockCases: ICase[] | any[] = [
  {
    image: BolImg,
    name: 'Bol.com',
    description: 'A summer island in the Netherlands',
    category: 'category1',
    industry: 'industry3',
  },
  {
    image: KempenImg,
    name: 'Kempen',
    description: 'Not some average banking website',
    category: 'category1',
    industry: 'industry1',
  },
  {
    image: PhilipsImg,
    name: 'Philips',
    description: 'Beautiful design meets innovative technology',
    category: 'category4',
    industry: 'industry2',
  },
  {
    image: GemeentemuseumImg,
    name: 'Gemeentemuseum',
    description: 'A 100 years of Mondriaan & De Stijl',
    category: 'category2',
    industry: 'industry3',
  },
  {
    category: 'category4',
    industry: 'industry4',
    group: [
      {
        image: FlorensisImg,
        name: 'Florensis',
        description: 'Rethinking the entire online ecosystem',
        isGrouped: true,
        category: 'category4',
        industry: 'industry4',
      },
      {
        image: null,
        name: 'MICROSOFT',
        description:
          'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
        isGrouped: true,
        category: 'category4',
        industry: 'industry4',
      },
      {
        image: null,
        name: 'O’NEILL',
        description:
          'Integrating existing content into O’Neill’s new e-commerce platform',
        isGrouped: true,
        category: 'category4',
        industry: 'industry4',
      },
    ],
  },

  {
    image: LightningImg,
    name: 'Be Lighting',
    description: 'Delivering clarity on a global scale',
    category: 'category3',
    industry: 'industry3',
  },

  {
    image: TuiImg,
    name: 'TUI',
    description: 'Swipe to find your next holiday destination',
    category: 'category1',
    industry: 'industry2',
  },

  {
    image: ChocomelImg,
    name: 'Chocomel',
    description: 'A campaign for the limited edition letter packs',
    category: 'category3',
    industry: 'industry2',
  },
  {
    image: JblImg,
    name: 'JBL',
    description: 'Live like a champion with Jerome Booteng',
    category: 'category2',
    industry: 'industry2',
  },
  {
    image: ZalandoImg,
    name: 'zalando',
    description: 'Innovative SEO and content strategy for Zalando',
    category: 'category4',
    industry: 'industry4',
  },
  {
    image: KoninklijkeBibliotheekImg,
    name: 'Koninklijke Bibliotheek',
    description: 'The search for the most influential book ever',
    category: 'category2',
    industry: 'industry1',
  },
  {
    image: LibertyGlobalImg,
    name: 'Liberty Global',
    description: 'Delivering complex commerce solutions',
    category: 'category3',
    industry: 'industry4',
  },
  {
    image: ArlaImg,
    name: 'Arla',
    description: 'Swipe to find your next holiday destination',
    category: 'category4',
    industry: 'industry1',
  },
];
