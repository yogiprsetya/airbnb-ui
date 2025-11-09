import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';
import { Input } from '~/components/input';
import { Label } from '~/components/label';

const meta = {
  title: 'components/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '600px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Type of input field',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = Omit<StoryObj<typeof meta>, 'args'> & {
  args?: never;
  render: (args: React.ComponentProps<typeof Input>) => React.ReactElement;
};

export const Default: Story = {
  render: ({ type, disabled, placeholder, value, ...props }) => (
    <Input
      type={type || 'text'}
      disabled={disabled}
      placeholder={placeholder || 'Masukkan teks...'}
      value={value}
      className="w-96"
      {...props}
    />
  ),
};

export const WithLabel: Story = {
  render: ({ type, disabled, placeholder, value, ...props }) => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="input-with-label">Nama Lengkap</Label>
      <Input
        id="input-with-label"
        type={type || 'text'}
        disabled={disabled}
        placeholder={placeholder || 'Masukkan nama lengkap...'}
        value={value}
        {...props}
      />
    </div>
  ),
};

export const Email: Story = {
  render: ({ disabled, placeholder, value, ...props }) => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="input-email">Email</Label>
      <Input
        id="input-email"
        type="email"
        disabled={disabled}
        placeholder={placeholder || 'nama@example.com'}
        value={value}
        {...props}
      />
    </div>
  ),
};

export const Password: Story = {
  render: ({ disabled, placeholder, value, ...props }) => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="input-password">Password</Label>
      <Input
        id="input-password"
        type="password"
        disabled={disabled}
        placeholder={placeholder || 'Masukkan password...'}
        value={value}
        {...props}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="input-disabled">Input Disabled</Label>
        <Input id="input-disabled" type="text" disabled placeholder="Input ini disabled" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="input-disabled-value">Input Disabled dengan Value</Label>
        <Input
          id="input-disabled-value"
          type="text"
          disabled
          value="Nilai yang tidak bisa diubah"
        />
      </div>
    </div>
  ),
};

export const WithValue: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="input-value">Input dengan Value</Label>
      <Input id="input-value" type="text" value="Nilai yang sudah terisi" />
    </div>
  ),
};
