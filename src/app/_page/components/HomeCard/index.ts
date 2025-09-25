import { HomeCardActions } from './components/HomeCardActions';
import { HomeCardContent } from './components/HomeCardContent';
import { HomeCardFooter } from './components/HomeCardFooter';
import { HomeCardRoot } from './components/HomeCardRoot';
import { HomeCardTitle } from './components/HomeCardTitle';

export const HomeCard = Object.assign(HomeCardRoot, {
  Actions: HomeCardActions,
  Content: HomeCardContent,
  Footer: HomeCardFooter,
  Title: HomeCardTitle,
});
