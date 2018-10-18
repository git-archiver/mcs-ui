// @flow
import * as React from 'react';
import * as R from 'ramda';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputSelect from '.';
import Button from '../Button';
import { type Value } from './type.flow';

class StatefulInputSelect extends React.Component<{}, { value: Value }> {
  state = { value: '' };

  onChange = (value: Value) => this.setState(() => ({ value }));

  render() {
    const { value } = this.state;
    const { onChange } = this;

    return (
      <InputSelect
        value={value}
        items={[
          { value: 1, children: 'children 1' },
          { value: 2, children: 'children children children 2' },
          { value: 3, children: 'children 3' },
          { value: 4, children: 'children 4' },
          { value: 5, children: '5' },
          { value: 6, children: 'children 6' },
          { value: 7, children: 'children children 7' },
          { value: 8, children: 'children 8' },
          { value: 9, children: 'children 9' },
          { value: 10, children: 'children children children 10' },
          { value: 11, children: 'children 11' },
          { value: 12, children: '12' },
          { value: 13, children: '13' },
        ]}
        onChange={onChange}
        {...this.props}
      />
    );
  }
}

storiesOf('InputSelect', module)
  .add(
    'API',
    () => (
      <div style={{ width: 500 }}>
        <InputSelect
          value={1}
          placeholder="or filter by device name"
          onChange={action('onChange')}
          items={[{ value: 1, children: 'item name 1' }]}
        />
      </div>
    ),
    {
      info: {
        text: 'With placeholder props',
        inline: true,
      },
    },
  )
  .add(
    'Controlled API',
    () => (
      <div style={{ width: 500 }}>
        <InputSelect
          value={11}
          onChange={action('onChange')}
          items={[
            { value: 1, children: 'children 1' },
            { value: 2, children: 'children children children 2' },
            { value: 3, children: 'children 3' },
            { value: 4, children: 'children 4' },
            { value: 5, children: '5' },
            { value: 6, children: 'children 6' },
            { value: 7, children: 'children children 7' },
            { value: 8, children: 'children 8' },
            { value: 9, children: 'children 9' },
            { value: 10, children: 'children children children 10' },
            { value: 11, children: 'children 11' },
            { value: 12, children: '12' },
            { value: 13, children: '13' },
          ]}
        />
      </div>
    ),
    {
      info: {
        text: 'With value',
        inline: true,
      },
    },
  )
  .add(
    'With state',
    () => <StatefulInputSelect placeholder="or filter by device name" />,
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'With kind props',
    () => (
      <StatefulInputSelect
        placeholder="or filter by device name"
        kind="warning"
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'With focus props',
    () => (
      <StatefulInputSelect
        placeholder="or filter by device name"
        kind="error"
        focus
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'With autoFocus props',
    () => (
      <StatefulInputSelect
        placeholder="or filter by device name"
        kind="primary"
        autoFocus
      />
    ),
    {
      info: {
        text: 'onFocus',
        inline: true,
      },
    },
  )
  .add(
    'With noRowsRenderer props',
    () => (
      <StatefulInputSelect
        placeholder="or filter by device name"
        kind="primary"
        noRowsRenderer={({ onClose }) => (
          <div
            style={{ height: 300, display: 'flex', flexDirection: 'column' }}
          >
            <input />
            Custom noRowsRenderer
            <Button onClick={onClose}>Click</Button>
          </div>
        )}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'With 150 items',
    () => (
      <InputSelect
        value={71}
        onChange={action('onChange')}
        items={R.range(1, 150).map(value => ({
          value,
          children: `item ${value}`,
        }))}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'With children React element and itemValueMapper',
    () => (
      <InputSelect
        itemValueMapper={(item: any) => item.displayValue}
        value={2}
        onChange={action('onChange')}
        items={[
          {
            value: 1,
            displayValue: 'High',
            children: (
              <span>
                <svg height="10" width="20">
                  <circle cx="5" cy="5" r="5" fill="red" />
                </svg>
                High
              </span>
            ),
          },
          {
            value: 2,
            displayValue: 'Medium',
            children: (
              <span>
                <svg height="10" width="20">
                  <circle cx="5" cy="5" r="5" fill="orange" />
                </svg>
                Medium
              </span>
            ),
          },
          {
            value: 3,
            displayValue: 'Low',
            children: (
              <span>
                <svg height="10" width="20">
                  <circle cx="5" cy="5" r="5" fill="gold" />
                </svg>
                Low
              </span>
            ),
          },
        ]}
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add(
    'With disableFilter props',
    () => (
      <StatefulInputSelect
        placeholder="or filter by device name"
        disableFilter
      />
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  );
