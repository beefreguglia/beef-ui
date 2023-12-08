import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import * as ToastPrimitive from '@radix-ui/react-toast';
import {
  StyledCheck,
  StyledInfo,
  StyledWarning,
  StyledX,
  ToastContainer,
  ToastDescription,
  ToastTextsContent,
  ToastTitle,
  ToastTitleContainer,
  ToastViewport,
} from './styles';
import { IconContext } from 'phosphor-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type ToastTypes = 'success' | 'error' | 'info';

interface ToastData {
  type: ToastTypes;
  title: string;
  description?: string;
  id?: number;
}
interface ToastContextProps {
  toasts: ToastData[];
  setToasts: Dispatch<SetStateAction<ToastData[]>>;
  sendToast: (toast: ToastData) => void;
  closeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export type ToastProviderProps = HTMLStyledProps<
  typeof ToastPrimitive.Provider
>;

export function ToastProvider({
  children,
  duration = 3000,
  ...props
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const sendToast = ({ type, description, title }: ToastData) => {
    const newToast = { type, title, description, id: Date.now() };
    setToasts((prevToasts) => [...prevToasts, newToast]);
    setTimeout(() => {
      closeToast(newToast.id);
    }, duration);
  };

  const closeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastPrimitive.Provider duration={duration + 100} {...props}>
      <ToastContext.Provider
        value={{ sendToast, closeToast, toasts, setToasts }}
      >
        {children}
        <ToastViewport />
      </ToastContext.Provider>
    </ToastPrimitive.Provider>
  );
}

ToastProvider.displayName = 'ToastProvider';

export function useToast(): ToastContextProps {
  const { closeToast, sendToast, setToasts, toasts } = useContext(ToastContext);
  return {
    closeToast,
    sendToast,
    setToasts,
    toasts,
  };
}

export interface ToastProps
  extends HTMLStyledProps<typeof ToastPrimitive.Root> {
  color?: string | undefined;
  translate?: 'yes' | 'no' | undefined;
  content?: string;
}

export function Toast({ ...props }: ToastProps) {
  const { toasts } = useToast();

  return (
    <>
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastPrimitive.Root key={toast.id} {...props} asChild>
            <ToastContainer
              key={toast.id}
              initial={{
                x: 50,
              }}
              animate={{
                x: 0,
              }}
              exit={{ x: 50 }}
              type={toast.type}
            >
              <ToastTextsContent>
                <ToastPrimitive.Title asChild>
                  <ToastTitleContainer>
                    <IconContext.Provider
                      value={{
                        size: 20,
                        weight: 'bold',
                        mirrored: false,
                      }}
                    >
                      {toast.type === 'success' && (
                        <StyledCheck type={toast.type} />
                      )}
                      {toast.type === 'error' && (
                        <StyledWarning type={toast.type} />
                      )}
                      {toast.type === 'info' && (
                        <StyledInfo type={toast.type} />
                      )}
                      <ToastTitle type={toast.type}>{toast.title}</ToastTitle>
                    </IconContext.Provider>
                  </ToastTitleContainer>
                </ToastPrimitive.Title>
                {toast.description && (
                  <ToastDescription type={toast.type}>
                    {toast.description}toast.
                  </ToastDescription>
                )}
              </ToastTextsContent>
              <ToastPrimitive.Close asChild>
                <motion.button
                  whileTap={{
                    scale: 0.5,
                  }}
                >
                  <StyledX type={toast.type} />
                </motion.button>
              </ToastPrimitive.Close>
            </ToastContainer>
          </ToastPrimitive.Root>
        ))}
      </AnimatePresence>
    </>
  );
}

Toast.displayName = 'Toast';
