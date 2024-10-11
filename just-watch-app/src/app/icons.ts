import {
  faUserCog,
  faHome,
  faSearch,
  faBell,
  faBars,
  faTimes,
  faBookmark,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faCheck,
  faMinusCircle,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const icons = {
  userSettings: faUserCog,
  home: faHome,
  search: faSearch,
  notifications: faBell,
  menu: faBars,
  close: faTimes,
  favourite: faBookmark,
  chevronLeft: faChevronLeft,
  chevronRight: faChevronRight,
  chevronDown: faChevronDown,
  checkmark: faCheck,
  minusCircle: faMinusCircle,
  right: faArrowRight,
} satisfies Record<string, IconDefinition>;

export default icons;
