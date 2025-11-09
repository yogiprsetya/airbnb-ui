import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '~/components/accordion';

const meta = {
  title: 'components/Accordion',
  component: Accordion,
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
      options: ['single', 'multiple'],
      description:
        'Type of accordion - single allows one item open, multiple allows multiple items open',
    },
    // collapsible: {
    //   control: 'boolean',
    //   description: 'Whether the accordion can collapse all items',
    // },
    defaultValue: {
      control: 'text',
      description: 'Default value for controlled accordion',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = Omit<StoryObj<typeof meta>, 'args'> & {
  args?: never;
  render: () => React.ReactElement;
};

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Airbnb?</AccordionTrigger>
        <AccordionContent>
          Airbnb is a platform that connects guests with hosts who rent unique accommodations around
          the world.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>How to book?</AccordionTrigger>
        <AccordionContent>
          You can search and book accommodations easily through our website or mobile app. Select
          dates, number of guests, and complete payment.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Is it safe to book?</AccordionTrigger>
        <AccordionContent>
          Yes, we have a comprehensive security system including identity verification, reviews from
          previous guests, and 24/7 customer support.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Frequently Asked Question 1</AccordionTrigger>
        <AccordionContent>
          Answer to the first frequently asked question. You can open multiple items at once in
          multiple mode.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Frequently Asked Question 2</AccordionTrigger>
        <AccordionContent>
          Answer to the second frequently asked question. Multiple mode allows multiple items to be
          open simultaneously.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Frequently Asked Question 3</AccordionTrigger>
        <AccordionContent>
          Answer to the third frequently asked question. This is an example of an accordion with
          type multiple.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleItem: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Single Item</AccordionTrigger>
        <AccordionContent>
          This is an example of an accordion with only one item. This item can be opened and closed.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Long Content</AccordionTrigger>
        <AccordionContent>
          <p>
            This is an example of an accordion with longer content. This content can contain
            multiple paragraphs and other elements. The accordion will display the content well even
            if it's long.
          </p>
          <p style={{ marginTop: '12px' }}>
            Second paragraph to demonstrate how the accordion handles longer content. You can add
            various HTML elements inside AccordionContent.
          </p>
          <ul style={{ marginTop: '12px', paddingLeft: '20px' }}>
            <li>First list item</li>
            <li>Second list item</li>
            <li>Third list item</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Other Item</AccordionTrigger>
        <AccordionContent>Another item with shorter content for comparison.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
