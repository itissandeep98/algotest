import classNames from 'classnames';
import Futures from 'components/Futures';
import Leg from 'components/Leg';
import Options from 'components/Options';
import { useState } from 'react';

const initState = {
  PositionType: 'SELL',
  Lots: 0,
  LegStopLoss: { Type: 'Points', Value: 0 },
  LegTarget: { Type: 'Points', Value: 0 },
  LegTrailSL: { Type: 'Points', Value: { InstrumentMove: 0, StopLossMove: 0 } },
  LegMomentum: { Type: 'PointsUp', Value: 0 },
  ExpiryKind: 'WEEKLY',
  EntryType: 'EntryByStrikeType',
  StrikeParameter: 'ATM',
  LegReentrySL: { Type: 'ASAP', Value: 0 },
  LegReentryTP: { Type: 'ASAP', Value: 0 },
  InstrumentKind: 'CE',

  segment: 'options',
  optionCall: 'CALL'
};

function Index() {
  const [state, setState] = useState(initState);
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(false);
  const [legs, setLegs] = useState([]);
  const handleAddLeg = () => {
    setLegs([...legs, state]);
    setState(initState);
  };
  const handleCopy = (index) => {
    setLegs([...legs.slice(0, index), legs[index], ...legs.slice(index)]);
  };
  const handleDelete = (index) => {
    setLegs([...legs.slice(0, index), ...legs.slice(index + 1)]);
  };
  const handleUpdate = (index, data) => {
    setLegs([...legs.slice(0, index), data, ...legs.slice(index + 1)]);
  };

  return (
    <div className='bg-gray-800 min-h-screen text-white p-10'>
      <div className='flex justify-between my-2'>
        <h2 className='text-xl font-semibold'>Legs</h2>
        <button className='flex' onClick={() => setShow(true)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>
          Add Leg
        </button>
      </div>
      <div className='bg-gray-600 p-10 rounded-lg flex flex-col'>
        {!show ? (
          <p className='text-center text-3xl font-bold'>Welcome to AlgoTest</p>
        ) : (
          <>
            <div className='flex space-x-4 justify-center'>
              <h3 className='text-lg font-semibold'>Select Segments</h3>
              <div className=' rounded-full overflow-hidden'>
                <button
                  onClick={() => setState({ ...state, segment: 'future' })}
                  className={classNames(' px-3 py-1 h-full ', {
                    'bg-violet-900 text-white': state.segment === 'future',
                    'bg-white text-black': state.segment !== 'future'
                  })}>
                  Future
                </button>
                <button
                  onClick={() => setState({ ...state, segment: 'options' })}
                  className={classNames('px-3 py-1 h-full ', {
                    'bg-violet-900 text-white': state.segment === 'options',
                    'bg-white text-black': state.segment !== 'options'
                  })}>
                  Options
                </button>
              </div>
            </div>

            {state.segment === 'future' ? (
              <Futures state={state} setState={setState} />
            ) : (
              <Options state={state} setState={setState} />
            )}

            <div className='flex justify-center space-x-4'>
              <button
                onClick={handleAddLeg}
                className='bg-violet-900 px-6 py-1 rounded-full'>
                Add Leg
              </button>
              <button
                onClick={() => setShow(false)}
                className='bg-gray-200 text-black px-6 py-1 rounded-full'>
                Cancel
              </button>
            </div>
            <div className='flex flex-col space-y-6 my-4'>
              {legs.map((leg, index) => (
                <Leg
                  key={index}
                  state={leg}
                  setState={(data) => handleUpdate(index, data)}
                  handleCopy={() => handleCopy(index)}
                  handleDelete={() => handleDelete(index)}
                />
              ))}
            </div>
            <div className='text-center'>
              <button
                onClick={() => setShowData(!showData)}
                className='bg-violet-900 px-6 rounded-lg py-2'>
                {!showData ? 'Show' : 'Hide'} Data
              </button>
            </div>
            {showData && (
              <textarea
                value={JSON.stringify(legs, undefined, 4)}
                readOnly
                rows={40}
                className=' my-2 bg-gray-500 text-white p-2 rounded-xl shadow-xl'
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Index;
