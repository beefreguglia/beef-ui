import * as Popover from '@radix-ui/react-popover';
import { BoxContent, BoxRoot } from '../../../Box';
import { Separator } from '../../../Separator';
import { PopoverItem } from './styles';
import { Door } from 'phosphor-react';
import { IconContainer } from '../../styles';

export interface UserActions {
  name: string;
  function: () => void;
}

interface PopoverMenuProps {
  userActions?: UserActions[];
}

export function PopoverMenu({ userActions }: PopoverMenuProps) {
  const haveActions = userActions && userActions.length > 0;
  return (
    <Popover.Portal>
      <Popover.Content asChild side="top">
        <BoxRoot hasShadow>
          <BoxContent
            css={{
              maxWidth: '300px',
              padding: '0',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {haveActions &&
              userActions.map((action) => (
                <PopoverItem key={action.name} onClick={() => action.function}>
                  {action.name}
                </PopoverItem>
              ))}
            {haveActions && (
              <div style={{ width: '100%' }}>
                <Separator css={{ background: '$gray200' }} />
              </div>
            )}
            <PopoverItem>
              <IconContainer>
                <Door size={16} weight="bold" />
              </IconContainer>
              Sair
            </PopoverItem>
          </BoxContent>
          <Popover.Arrow style={{ fill: 'white' }} />
        </BoxRoot>
      </Popover.Content>
    </Popover.Portal>
  );
}
