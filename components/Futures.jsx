import React from 'react';
import Dropdown from './Dropdown';
import Input from './Input';
import { PositionTypeData } from './OptionsList';

function Futures({ state, setState }) {
  return (
    <div>
      <div className='flex flex-wrap my-6 justify-center space-x-6'>
        <div>
          <p className='text-xs font-semibold my-1'>Total lot</p>
          <Input
            value={state.Lots}
            onChange={(value) => setState({ ...state, Lots: value })}
          />
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Position</p>
          <Dropdown
            value={state.PositionType}
            onChange={(value) => setState({ ...state, PositionType: value })}
            options={PositionTypeData}
          />
        </div>
      </div>
    </div>
  );
}

export default Futures;
