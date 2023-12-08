import {
  ActionsContainer,
  IconContainer,
  SidebarHeaderContainer,
} from './styles';
import {
  ArrowLeft,
  ArrowRight,
  DotsThreeOutlineVertical,
} from 'phosphor-react';
import { Separator } from '../../Separator';
import { AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface SidebarHeaderProps {
  isMenuRetracted?: boolean;
  handleClickArrowAction: () => void;
}

export function SidebarHeader({
  isMenuRetracted,
  handleClickArrowAction,
}: SidebarHeaderProps) {
  return (
    <SidebarHeaderContainer>
      <div style={{ position: 'relative', height: '60px' }}>
        <AnimatePresence mode="wait">
          <IconContainer>
            <Logo isMenuRetracted={!isMenuRetracted} />
          </IconContainer>
        </AnimatePresence>
      </div>

      <div style={{ width: '100%' }}>
        <Separator
          orientation="horizontal"
          css={{ margin: '$8 0', background: '$darkerBlue600' }}
        />
        <ActionsContainer isRetractedMenu={isMenuRetracted}>
          <AnimatePresence mode="wait">
            {isMenuRetracted ? (
              <IconContainer
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                initial={{ opacity: 0, x: -40 }}
                key="arrowRightIcon"
                mt="$4"
                onClick={handleClickArrowAction}
              >
                <DotsThreeOutlineVertical size={20} weight="fill" />
                <ArrowRight size={20} weight="bold" />
              </IconContainer>
            ) : (
              <IconContainer
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                initial={{ opacity: 0, x: 40 }}
                key="arrowLeftIcon"
                mt="$4"
                onClick={handleClickArrowAction}
                _hover={{ color: '$white', transition: '300ms all' }}
              >
                <DotsThreeOutlineVertical size={20} weight="fill" />
                <ArrowLeft size={20} weight="bold" />
              </IconContainer>
            )}
          </AnimatePresence>
        </ActionsContainer>
      </div>
    </SidebarHeaderContainer>
  );
}

SidebarHeader.displayName = 'SidebarHeader';
