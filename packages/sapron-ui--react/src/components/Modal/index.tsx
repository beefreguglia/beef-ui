import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import * as Dialog from '@radix-ui/react-dialog';
import {
  ModalCloseButton,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from './styles';
import { H2 } from '../H2';
import { X } from 'phosphor-react';
import { ComponentProps } from 'react';
import { Text } from '../Text';

export type ModalRootProps = HTMLStyledProps<typeof Dialog.Root>;

export function ModalRoot({ children }: ModalRootProps) {
  return <Dialog.Root>{children}</Dialog.Root>;
}

ModalRoot.displayName = 'ModalRoot';

export interface ModalProps extends ComponentProps<typeof Dialog.Content> {
  title?: string;
  description?: string;
  variant?: 'center' | 'lateral';
}

const variants = {
  centerVisible: {
    y: '-50%',
    x: '-50%',
  },
  lateralVisible: {
    x: 0,
  },
  centerHidden: {
    y: '150%',
    x: '-50%',
  },
  lateralHidden: {
    x: 30,
  },
};
export function Modal({
  children,
  title,
  description,
  variant = 'center',
  ...rest
}: ModalProps) {
  return (
    <Dialog.Portal>
      <ModalOverlay />
      <Dialog.Content {...rest} asChild>
        <ModalContainer
          variants={variants}
          initial={variant === 'center' ? 'centerHidden' : 'lateralHidden'}
          animate={variant === 'center' ? 'centerVisible' : 'lateralVisible'}
          variant={variant}
        >
          <ModalContent>
            {title && (
              <Dialog.Title asChild>
                <H2>Title</H2>
              </Dialog.Title>
            )}
            {description && (
              <Dialog.Description asChild>
                <Text color="$gray300" size="$sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                  error facilis, ducimus soluta dolorem perferendis totam amet a
                  velit molestiae, unde iure. In, voluptatem magni laudantium
                  vel a quibusdam ea?
                </Text>
              </Dialog.Description>
            )}
            {children}
          </ModalContent>
          <Dialog.Close asChild>
            <ModalCloseButton variant={variant} whileTap={{ scale: 0.5 }}>
              <X size={16} weight="bold" color="#394760" />
            </ModalCloseButton>
          </Dialog.Close>
        </ModalContainer>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.displayName = 'Modal';

export type ModalTriggerProps = HTMLStyledProps<typeof Dialog.Trigger>;

export function ModalTrigger({ children }: ModalTriggerProps) {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
}

ModalTrigger.displayName = 'ModalTrigger';
