import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';
import { RadioGroup, RadioButton } from '~/components/radio-button';
import { Label } from '~/components/label';

const meta = {
  title: 'components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled',
    },
    value: {
      control: 'text',
      description: 'Value of the radio button',
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = Omit<StoryObj<typeof meta>, 'args'> & {
  args?: never;
  render: (args: React.ComponentProps<typeof RadioButton>) => React.ReactElement;
};

export const Default: Story = {
  render: ({ disabled }) => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center gap-3">
        <RadioButton id="option1" value="option1" disabled={disabled} />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioButton id="option2" value="option2" disabled={disabled} />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioButton id="option3" value="option3" disabled={disabled} />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Label>Select payment method</Label>
      <RadioGroup defaultValue="credit-card">
        <div className="flex items-center gap-3">
          <RadioButton id="credit-card" value="credit-card" />
          <Label htmlFor="credit-card">Credit Card</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioButton id="debit-card" value="debit-card" />
          <Label htmlFor="debit-card">Debit Card</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioButton id="e-wallet" value="e-wallet" />
          <Label htmlFor="e-wallet">E-Wallet</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center gap-3">
        <RadioButton id="option1-disabled" value="option1" />
        <Label htmlFor="option1-disabled">Active Option</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioButton id="option2-disabled" value="option2" disabled />
        <Label htmlFor="option2-disabled">Disabled Option</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioButton id="option3-disabled" value="option3" disabled />
        <Label htmlFor="option3-disabled">Another Disabled Option</Label>
      </div>
    </RadioGroup>
  ),
};

export const AllDisabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option1" disabled>
      <div className="flex items-center gap-3">
        <RadioButton id="option1-all-disabled" value="option1" disabled />
        <Label htmlFor="option1-all-disabled">Option 1</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioButton id="option2-all-disabled" value="option2" disabled />
        <Label htmlFor="option2-all-disabled">Option 2</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioButton id="option3-all-disabled" value="option3" disabled />
        <Label htmlFor="option3-all-disabled">Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="small" className="flex gap-6">
      <div className="flex items-center gap-2">
        <RadioButton id="small" value="small" />
        <Label htmlFor="small">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioButton id="medium" value="medium" />
        <Label htmlFor="medium">Medium</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioButton id="large" value="large" />
        <Label htmlFor="large">Large</Label>
      </div>
    </RadioGroup>
  ),
};
