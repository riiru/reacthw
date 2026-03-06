import UiButton from '../ui-kit/UiButton'

const meta = {
  title: 'Ui-Kit/UiButton',
  component: UiButton,
  args: {
    text: 'Кнопка',
    onClick: () => null,
  },
}

export default meta

export const Basic = {
  args: {
    text: 'Кнопка',
    onClick: () => null,
    disabled: true,
    active: false,
  },
}

export const Custom = {
  args: {
    text: 'Custom',
    onClick: () => null,
    disabled: false,
    active: true,
  },
}
