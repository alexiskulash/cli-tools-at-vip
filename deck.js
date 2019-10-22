import { slides as intro } from './sections/intro.mdx';
import { slides as basics } from './sections/basics.mdx';
import { slides as tricks } from './sections/tricks.mdx';
import { slides as wp } from './sections/wp.mdx';
import { slides as vip } from './sections/vip.mdx';
import { slides as outro } from './sections/outro.mdx';

import book from '@mdx-deck/themes/book';
import highlight from '@mdx-deck/themes/syntax-highlighter';

export const themes = [ book, highlight ];
export const slides = [
	...intro,
	...basics,
	...tricks,
	...wp,
	...vip,
	...outro
];