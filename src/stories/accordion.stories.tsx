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
        <AccordionTrigger>Apa itu Airbnb?</AccordionTrigger>
        <AccordionContent>
          Airbnb adalah platform yang menghubungkan tamu dengan host yang menyewakan akomodasi unik
          di seluruh dunia.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Bagaimana cara memesan?</AccordionTrigger>
        <AccordionContent>
          Anda dapat mencari dan memesan akomodasi dengan mudah melalui website atau aplikasi mobile
          kami. Pilih tanggal, jumlah tamu, dan selesaikan pembayaran.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Apakah aman untuk memesan?</AccordionTrigger>
        <AccordionContent>
          Ya, kami memiliki sistem keamanan yang komprehensif termasuk verifikasi identitas, ulasan
          dari tamu sebelumnya, dan dukungan pelanggan 24/7.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Pertanyaan Umum 1</AccordionTrigger>
        <AccordionContent>
          Jawaban untuk pertanyaan umum pertama. Anda dapat membuka beberapa item sekaligus dalam
          mode multiple.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Pertanyaan Umum 2</AccordionTrigger>
        <AccordionContent>
          Jawaban untuk pertanyaan umum kedua. Mode multiple memungkinkan beberapa item terbuka
          bersamaan.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Pertanyaan Umum 3</AccordionTrigger>
        <AccordionContent>
          Jawaban untuk pertanyaan umum ketiga. Ini adalah contoh accordion dengan type multiple.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleItem: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item Tunggal</AccordionTrigger>
        <AccordionContent>
          Ini adalah contoh accordion dengan hanya satu item. Item ini dapat dibuka dan ditutup.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Konten Panjang</AccordionTrigger>
        <AccordionContent>
          <p>
            Ini adalah contoh accordion dengan konten yang lebih panjang. Konten ini dapat berisi
            beberapa paragraf dan elemen lainnya. Accordion akan menampilkan konten dengan baik
            meskipun panjang.
          </p>
          <p style={{ marginTop: '12px' }}>
            Paragraf kedua untuk menunjukkan bagaimana accordion menangani konten yang lebih
            panjang. Anda dapat menambahkan berbagai elemen HTML di dalam AccordionContent.
          </p>
          <ul style={{ marginTop: '12px', paddingLeft: '20px' }}>
            <li>Item daftar pertama</li>
            <li>Item daftar kedua</li>
            <li>Item daftar ketiga</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Item Lainnya</AccordionTrigger>
        <AccordionContent>
          Item lain dengan konten yang lebih pendek untuk perbandingan.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
