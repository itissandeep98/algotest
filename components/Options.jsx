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
            value={state?.Lots}
            onChange={(value) => setState({ ...state, Lots: value })}
          />
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Position</p>
          <Dropdown
            value={state.PositionType}
            onChange={(value) => setState({ ...state, PositionType: value })}
            options={[
              { value: 'SELL', label: 'Sell' },
              { value: 'BUY', label: 'Buy' }
            ]}
          />
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Option Call</p>
          <Dropdown
            value={state.optionCall}
            onChange={(value) => setState({ ...state, optionCall: value })}
            options={[
              { value: 'CALL', label: 'Call' },
              { value: 'PUT', label: 'Put' }
            ]}
          />
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Expiry</p>
          <Dropdown
            value={state.ExpiryKind}
            onChange={(value) => setState({ ...state, ExpiryKind: value })}
            options={[
              { value: 'WEEKLY', label: 'Weekly' },
              { value: 'MONTHLY', label: 'Monthly' }
            ]}
          />
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Select Strike Criteria</p>
          <Dropdown
            value={state.EntryType}
            onChange={(value) => {
              if (value === 'EntryByStrikeType') {
                setState({
                  ...state,
                  EntryType: value,
                  StrikeParameter: 'ATM'
                });
              } else if (value === 'EntryByPremiumRange') {
                setState({
                  ...state,
                  EntryType: value,
                  StrikeParameter: { Lower: 0, Upper: 0 }
                });
              } else if (value === 'EntryByPremium') {
                setState({ ...state, EntryType: value, StrikeParameter: 0 });
              } else {
                setState({
                  ...state,
                  EntryType: value,
                  StrikeParameter: { Adjustment: 'Plus', Multiplier: 0 }
                });
              }
            }}
            options={[
              { value: 'EntryByStrikeType', label: 'Strike Type' },
              { value: 'EntryByPremiumRange', label: 'Premium Range' },
              { value: 'EntryByPremium', label: 'Closest Premium' },
              { value: 'EntryByStraddleWidth', label: 'Straddle width' }
            ]}
          />
        </div>

        {state.EntryType === 'EntryByStrikeType' && (
          <div>
            <p className='text-xs font-semibold my-1'>Strike Type</p>
            <Dropdown
              value={state.StrikeParameter}
              onChange={(value) =>
                setState({ ...state, StrikeParameter: value })
              }
              options={[
                { value: 'ATM', label: 'ATM' },
                { value: 'ITM', label: 'ITM' },
                { value: 'OTM', label: 'OTM' }
              ]}
            />
          </div>
        )}
        {state.EntryType === 'EntryByPremiumRange' && (
          <>
            <div>
              <p className='text-xs font-semibold my-1'>Lower Range</p>
              <Input
                value={state.StrikeParameter?.Lower}
                onChange={(value) =>
                  setState({
                    ...state,
                    StrikeParameter: {
                      ...state.StrikeParameter,
                      Lower: value
                    }
                  })
                }
              />
            </div>
            <div>
              <p className='text-xs font-semibold my-1'>Upper range</p>
              <Input
                value={state.StrikeParameter?.Upper}
                onChange={(value) =>
                  setState({
                    ...state,
                    StrikeParameter: {
                      ...state.StrikeParameter,
                      Upper: value
                    }
                  })
                }
              />
            </div>
          </>
        )}
        {state.EntryType === 'EntryByPremium' && (
          <div>
            <p className='text-xs font-semibold my-1'>Premium</p>
            <Input
              value={state.StrikeParameter}
              onChange={(value) =>
                setState({ ...state, StrikeParameter: value })
              }
            />
          </div>
        )}
        {state.EntryType === 'EntryByStraddleWidth' && (
          <div className='flex items-center space-x-4'>
            <p className='text-sm font-semibold my-1'> [ ATM Strike</p>
            <Dropdown
              value={state.StrikeParameter?.Adjustment}
              onChange={(value) =>
                setState({
                  ...state,
                  StrikeParameter: {
                    ...state.StrikeParameter,
                    Adjustment: value
                  }
                })
              }
              options={[
                { value: 'Plus', label: '+' },
                { value: 'Minus', label: '-' }
              ]}
            />
            <p className='text-sm font-semibold my-1'> (</p>

            <Input
              value={state.StrikeParameter?.Multiplier}
              onChange={(value) =>
                setState({
                  ...state,
                  StrikeParameter: {
                    ...state.StrikeParameter,
                    Multiplier: value
                  }
                })
              }
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
