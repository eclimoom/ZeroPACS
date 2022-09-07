import { createReducer, on } from '@ngrx/store';
import * as NavigationActions from './navigation.actions';

export interface NavigationItem {
  title: string;
  icon?: string;
  tags?: string;
  routerLink?: string;
  active?: boolean;
  badge?: any;
  open?: boolean;
  items?: NavigationItem[];
  navTitle?: boolean;
}

export interface NavigationState {
  items: NavigationItem[];
  activeUrl: string;
}

export const initialState: NavigationState = {
  items: [],
  activeUrl: '',
};

export const navigationReducer = createReducer(
  initialState,
  on(NavigationActions.activeUrl, (state, action) => ({
    ...state,
    activeUrl: action.url,
  })),
  on(NavigationActions.toggleNavSection, (state, action) => ({
    ...state,
    items: toggleItems(state.items, action.item),
  }))
);

// utils

// recursevly add `open` and `active` fields to items
function decorateItems(navItems: NavigationItem[]): NavigationItem[] {
  return navItems.map((navItem) => {
    const item: NavigationItem = {
      ...navItem,
      active: false,
      // matched: null,
    };
    if (navItem.items) {
      item.open = false;
      item.items = decorateItems(navItem.items);
    }

    item.navTitle = !navItem.items && !navItem.routerLink && !!navItem.title;

    return item;
  });
}

// recursevly check if item is active by url when navigation ends
// if active item has parent it's `open` field becomes true
// function detectActiveItems(
//   navItems: NavigationItem[],
//   activeUrl: string
// ): NavigationItem[] {
//   //   return navItems.map((navItem) => {
//   //     const isActive = itemIsActive(navItem, activeUrl);
//   //     const item = {
//   //       ...navItem,
//   //       active: isActive,
//   //     };
//   //     if (navItem.items) {
//   //       item.open = isActive;
//   //       item.items = detectActiveItems(navItem.items, activeUrl);
//   //     }
//   //     return item;
//   //   });
// }

// recursevly check if item is active by url
// if any of item children is active item considered as active
// function itemIsActive(item: NavigationItem, activeUrl: string) {
//   // if (item.routerLink === activeUrl) {
//   if (activeUrl.includes(item.routerLink)) {
//     return true;
//   } else if (item.items) {
//     return item.items.some((_) => itemIsActive(_, activeUrl));
//   } else {
//     return false;
//   }
// }

function toggleItems(
  navItems: NavigationItem[],
  toggledItem: NavigationItem
): NavigationItem[] {
  const isToggledItemLevel = navItems.some((_) => _ === toggledItem);
  return navItems.map((navItem) => {
    const item = {
      ...navItem,
    };

    if (isToggledItemLevel && item.items && navItem !== toggledItem) {
      item.open = false;
    }
    if (navItem === toggledItem) {
      item.open = !navItem.open;
    }
    if (navItem.items) {
      item.items = toggleItems(navItem.items, toggledItem);
    }
    return item;
  });
}
