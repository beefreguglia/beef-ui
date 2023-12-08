import { CaretDown } from 'phosphor-react';
import { Avatar } from '../../Avatar';
import * as Popover from '@radix-ui/react-popover';
import { IconContainer, SidebarUserContainer } from './styles';
import { Text } from '../../Text';
import { useState } from 'react';
import { PopoverMenu } from './PopoverMenu';
import { H2 } from '../../H2';

export interface UserActions {
  name: string;
  function: () => void;
}
interface SidebarUserProps {
  userName: string;
  userRole: string;
  isMenuRetracted: boolean;
  userActions?: UserActions[];
}

export function SidebarUser({
  userName,
  userRole,
  isMenuRetracted,
  userActions,
}: SidebarUserProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <Popover.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <SidebarUserContainer isMenuRetracted={isMenuRetracted}>
        {isMenuRetracted ? (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Avatar size="$sm" />
              <Popover.Trigger asChild>
                <Popover.Anchor asChild>
                  <IconContainer>
                    <CaretDown size={14} weight="bold" />
                  </IconContainer>
                </Popover.Anchor>
              </Popover.Trigger>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                gap: '$2',
              }}
            >
              <H2 size="$sm" css={{ color: '$gray50' }}>
                {userName}
              </H2>
              <Text size="$sm" css={{ color: '$gray100' }}>
                {userRole}
              </Text>
            </div>
          </>
        ) : (
          <>
            <Avatar />
            <div>
              <H2 size="$sm" css={{ color: '$gray50' }}>
                {userName}
              </H2>
              <Text css={{ color: '$gray100' }}>{userRole}</Text>
            </div>
            <Popover.Trigger asChild>
              <Popover.Anchor asChild>
                <IconContainer isBaseline>
                  <CaretDown size={20} weight="bold" />
                </IconContainer>
              </Popover.Anchor>
            </Popover.Trigger>
          </>
        )}
        <PopoverMenu userActions={userActions} />
      </SidebarUserContainer>
    </Popover.Root>
  );
}

SidebarUser.displayName = 'SidebarUser';
