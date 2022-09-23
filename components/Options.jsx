import React from 'react';
import Dropdown from './Dropdown';
import Input from './Input';

function Options({ state, setState }) {
  return (
    <div>
      <div className='flex flex-wrap my-6 justify-center space-x-6 gap-5'>
        <div>
          <p className='text-xs font-semibold my-1'>Total lot</p>
          <Input
            value={state?.lot}
            onChange={(value) => setState({ ...state, lot: value })}
          />
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Position</p>
          <Dropdown
            value={state.position}
            onChange={(value) => setState({ ...state, position: value })}
            options={[
              { value: 'sell', label: 'Sell' },
              { value: 'buy', label: 'Buy' }
            ]}
          />
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Option Call</p>
          <Dropdown
            value={state.optionCall}
            onChange={(value) => setState({ ...state, optionCall: value })}
            options={[
              { value: 'call', label: 'Call' },
              { value: 'put', label: 'Put' }
            ]}
          />
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Expiry</p>
          <Dropdown
            value={state.expiry}
            onChange={(value) => setState({ ...state, expiry: value })}
            options={[
              { value: 'weekly', label: 'Weekly' },
              { value: 'monthly', label: 'Monthly' }
            ]}
          />
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Select Strike Criteria</p>
          <Dropdown
            value={state.strikeCriteria}
            onChange={(value) => setState({ ...state, strikeCriteria: value })}
            options={[
              { value: 'type', label: 'Strike Type' },
              { value: 'range', label: 'Premium Range' },
              { value: 'closest', label: 'Closest Premium' },
              { value: 'straddle', label: 'Straddle width' }
            ]}
          />
        </div>

        {state.strikeCriteria === 'type' && (
          <div>
            <p className='text-xs font-semibold my-1'>Strike Type</p>
            <Dropdown
              value={state.strikeType}
              onChange={(value) => setState({ ...state, strikeType: value })}
              options={[
                { value: 'atm', label: 'ATM' },
                { value: 'itm', label: 'ITM' },
                { value: 'otm', label: 'OTM' }
              ]}
            />
          </div>
        )}
        {state.strikeCriteria === 'range' && (
          <>
            <div>
              <p className='text-xs font-semibold my-1'>Lower Range</p>
              <Input
                value={state.lowerRange}
                onChange={(value) => setState({ ...state, lowerRange: value })}
              />
            </div>
            <div>
              <p className='text-xs font-semibold my-1'>Upper range</p>
              <Input
                value={state.upperRange}
                onChange={(value) => setState({ ...state, upperRange: value })}
              />
            </div>
          </>
        )}
        {state.strikeCriteria === 'closest' && (
          <div>
            <p className='text-xs font-semibold my-1'>Premium</p>
            <Input
              value={state.premium}
              onChange={(value) => setState({ ...state, premium: value })}
            />
          </div>
        )}
        {state.strikeCriteria === 'straddle' && (
          <div className='flex items-center space-x-4'>
            <p className='text-sm font-semibold my-1'> [ ATM Strike</p>
            <Dropdown
              value={state.ATMStrike}
              onChange={(value) => setState({ ...state, ATMStrike: value })}
              options={[
                { value: '+', label: '+' },
                { value: '-', label: '-' }
              ]}
            />
            <p className='text-sm font-semibold my-1'> (</p>

            <Input
              value={state.straddlePrice}
              onChange={(value) => setState({ ...state, straddlePrice: value })}
            />
            <p className='text-sm font-semibold my-1'>
              {' '}
              x ATM Straddle Price )]
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Options;
