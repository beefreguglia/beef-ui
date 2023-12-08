import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import { SwitchContainer, SwitchThumbContainer } from './styles';

export type SwitcherProps = HTMLStyledProps<typeof SwitchContainer>;

export function Switcher({ ...props }: SwitcherProps) {
  return (
    <SwitchContainer {...props}>
      <SwitchThumbContainer />
    </SwitchContainer>
  );
}

Switcher.displayName = 'Switch';
