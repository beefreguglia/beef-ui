import * as SelectPrimitive from '@radix-ui/react-select';
import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import { css } from '@beefreguglia/beef-ui--react/css';
import {
  IconContainer,
  SelectContentContainer,
  SelectErrorContainer,
  SelectItemContainer,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTriggerContainer,
  SelectedItemIndicator,
} from './styles';
import { Label } from '../Label';
import { Text } from '../Text';
import { Warning, CaretDown, CaretUp, Check } from 'phosphor-react';
import { Fragment } from 'react';

export interface SelectOptionsProps {
  category?: string;
  text: string;
  value: string;
}

interface GroupedOptions {
  label: string;
  options: {
    text: string;
    value: string;
  }[];
}

export interface SelectProps
  extends HTMLStyledProps<typeof SelectPrimitive.Root> {
  errorMessage?: string;
  placeholder?: string;
  label?: string;
  selectOptions: SelectOptionsProps[];
  id: string;
}

export function Select({
  placeholder,
  errorMessage,
  label,
  selectOptions,
  id,
}: SelectProps) {
  const hasError = !!errorMessage;

  const groupOptionsByCategory = (): GroupedOptions[] => {
    const groupedOptions: GroupedOptions[] = [];
    let hasCategories = false;

    selectOptions.forEach((option) => {
      const { category } = option;

      if (category) {
        hasCategories = true;
      }
    });

    if (hasCategories) {
      selectOptions.forEach((option) => {
        const { category, text, value } = option;

        const existingGroup = groupedOptions.find(
          (group) => group.label === category,
        );

        if (existingGroup) {
          existingGroup.options.push({ text, value });
        } else {
          if (category) {
            groupedOptions.push({
              label: category,
              options: [{ text, value }],
            });
          } else {
            const existingGroup = groupedOptions.find(
              (group) => group.label === 'Sem Categoria',
            );
            if (existingGroup) {
              existingGroup.options.push({ text, value });
            } else {
              groupedOptions.push({
                label: 'Sem Categoria',
                options: [{ text, value }],
              });
            }
          }
        }
      });
    } else {
      selectOptions.forEach((option) => {
        const { text, value } = option;

        groupedOptions.push({
          label: '',
          options: [{ text, value }],
        });
      });
    }

    return groupedOptions;
  };
  const groupedOptions = groupOptionsByCategory();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {label && <Label htmlFor={id}>{label}</Label>}
      <SelectPrimitive.Root>
        <SelectTriggerContainer id={id} hasError={hasError}>
          <SelectPrimitive.Value id={id} placeholder={placeholder} />
          <SelectPrimitive.Icon asChild>
            <IconContainer>
              <CaretDown size={10} weight="fill" color="#394760" />
            </IconContainer>
          </SelectPrimitive.Icon>
        </SelectTriggerContainer>

        <SelectPrimitive.Portal>
          <SelectContentContainer>
            <SelectScrollUpButton>
              <CaretUp size={14} weight="fill" color="#394760" />
            </SelectScrollUpButton>
            <SelectPrimitive.Viewport>
              {groupedOptions.map((option) => (
                <Fragment key={option.label}>
                  <SelectPrimitive.Group>
                    <SelectLabel>{option.label}</SelectLabel>
                    <SelectPrimitive.Separator />
                    {option.options.map((categoryOptions) => (
                      <SelectItemContainer
                        key={categoryOptions.value}
                        value={categoryOptions.value}
                      >
                        <SelectPrimitive.ItemText>
                          {categoryOptions.text}
                        </SelectPrimitive.ItemText>
                        <SelectedItemIndicator asChild>
                          <IconContainer>
                            <Check weight="bold" size={16} />
                          </IconContainer>
                        </SelectedItemIndicator>
                      </SelectItemContainer>
                    ))}
                  </SelectPrimitive.Group>
                  <SelectPrimitive.Separator />
                </Fragment>
              ))}
            </SelectPrimitive.Viewport>
            <SelectScrollDownButton>
              <CaretDown size={14} weight="fill" color="#394760" />
            </SelectScrollDownButton>
            <SelectPrimitive.Arrow />
          </SelectContentContainer>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {hasError && (
        <SelectErrorContainer
          className={css({
            '& p': {
              color: '$red500',
            },
            '& svg': {
              color: '$red500',
            },
          })}
        >
          <Warning size={14} />
          <Text size="$sm" color="$red500">
            {errorMessage}
          </Text>
        </SelectErrorContainer>
      )}
    </div>
  );
}

Select.displayName = 'Select';
