import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import {
  IconContainer,
  Item,
  SidebarContainer,
  SidebarItem,
  SidebarLinkContainer,
  SidebarListContainer,
} from './styles';
import { ScrollArea } from '../ScrollArea';
import { Text } from '../Text';
import { IconContext } from 'phosphor-react';
import { SidebarHeader } from './SidebarHeader';
import { SidebarUser } from './SidebarUser';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { css } from '@beefreguglia/beef-ui--react/css';
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter';

export interface UserActions {
  name: string;
  function: () => void;
}

export interface SidebarOptionsProps {
  label: string;
  icon: ReactNode;
  isActive: boolean;
}
export interface SidebarProps extends HTMLStyledProps<typeof SidebarContainer> {
  userName: string;
  userRole: string;
  isMenuRetracted: boolean;
  setIsRetractedMenu: Dispatch<SetStateAction<boolean>>;
  userActions?: UserActions[];
  options: SidebarOptionsProps[];
}

const sidebarAnimations = {
  fadeIn: {
    initial: { width: '300px' },
    animate: {
      width: '120px',
      transition: {
        duration: 0.7,
        ease: [0.095, 0.985, 0.0, 1.0],
      },
    },
  },
  fadeOut: {
    initial: { width: '120px' },
    animate: {
      width: '300px',
      transition: {
        duration: 0.7,
        ease: [0.095, 0.985, 0.0, 1.0],
      },
    },
  },
};

export function Sidebar({
  userName,
  userRole,
  isMenuRetracted,
  setIsRetractedMenu,
  userActions,
  options,
  ...props
}: SidebarProps) {
  function toggleSidebarRetract() {
    setIsRetractedMenu((oldState) => !oldState);
  }

  return (
    <NavigationMenu.Root orientation="vertical">
      <SidebarContainer
        initial={
          isMenuRetracted
            ? sidebarAnimations.fadeIn.initial
            : sidebarAnimations.fadeOut.initial
        }
        animate={
          isMenuRetracted
            ? sidebarAnimations.fadeIn.animate
            : sidebarAnimations.fadeOut.animate
        }
        {...props}
      >
        <SidebarHeader
          isMenuRetracted={isMenuRetracted}
          handleClickArrowAction={toggleSidebarRetract}
        />
        <ScrollArea>
          <SidebarListContainer>
            {options.map((option) => (
              <SidebarItem key={option.label}>
                <SidebarLinkContainer
                  active={option.isActive}
                  isMenuRetracted={isMenuRetracted}
                  asChild
                  className={css({
                    '&[data-active]': {
                      '& svg': {
                        color: '$gray50',
                      },
                      '& p': {
                        color: '$gray50',
                      },
                    },
                    '& svg': {
                      color: '$gray300',
                    },
                    '& p': {
                      color: '$gray300',
                    },
                  })}
                >
                  <Item>
                    <IconContext.Provider value={{ size: 22 }}>
                      <IconContainer>{option.icon}</IconContainer>
                    </IconContext.Provider>
                    {!isMenuRetracted && (
                      <Text>{capitalizeFirstLetter(option.label)}</Text>
                    )}
                  </Item>
                </SidebarLinkContainer>
              </SidebarItem>
            ))}
          </SidebarListContainer>
        </ScrollArea>
        <SidebarUser
          isMenuRetracted={isMenuRetracted}
          userName={userName}
          userRole={userRole}
          userActions={userActions}
        />
      </SidebarContainer>
    </NavigationMenu.Root>
  );
}

Sidebar.displayName = 'Sidebar';

export interface SidebarLinkProps
  extends HTMLStyledProps<typeof SidebarLinkContainer> {
  icon: ReactNode;
  isMenuRetracted: boolean;
  text: string;
}

Sidebar.displayName = 'SidebarLink';
