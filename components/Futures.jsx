import React from 'react';
import Dropdown from './Dropdown';
import Input from './Input';

function Futures({ state, setState }) {
  return (
    <div>
      <div className='flex flex-wrap my-6 justify-center space-x-6'>
        <div>
          <p>Total lot</p>
          <Input
            value={state.lot}
            onChange={(value) => setState({ ...state, lot: value })}
          />
        </div>
        <div>
          <p>Position</p>
          <Dropdown
            value={state.position}
            onChange={(value) => setState({ ...state, position: value })}
            options={[
              { value: 'sell', label: 'Sell' },
              { value: 'buy', label: 'Buy' }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Futures;
