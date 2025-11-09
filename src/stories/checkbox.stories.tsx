import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';
import { Checkbox } from '~/components/checkbox';
import { Label } from '~/components/label';

const meta = {
  title: 'components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '600px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = Omit<StoryObj<typeof meta>, 'args'> & {
  args?: never;
  render: (args: React.ComponentProps<typeof Checkbox>) => React.ReactElement;
};

export const Default: Story = {
  render: ({ disabled, checked }) => (
    <div className="flex items-center gap-3">
      <Checkbox id="terms" disabled={disabled} checked={checked} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};
