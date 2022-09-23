import classNames from 'classnames';
import Futures from 'components/Futures';
import Leg from 'components/Leg';
import Options from 'components/Options';
import { useState } from 'react';

const initState = {
  segment: 'options',
  position: 'sell',
  optionCall: 'call',
  expiry: 'weekly',
  strikeCriteria: 'type',
  strikeType: 'atm',
  ATMStrike: '+',
  straddlePrice: 0,
  premium: 0,
  lowerRange: 0,
  upperRange: 0,
  lot: 0
};

function Index() {
  const [state, setState] = useState(initState);
  const [show, setShow] = useState(false);
  const [legs, setLegs] = useState([]);
  const handleAddLeg = () => {
    setLegs([...legs, state]);
    setState(initState);
  };
  const handleCopy = (index) => {
    setLegs([...legs.splice(0, index), legs[index], ...legs.splice(index)]);
  };
  const handleDelete = (index) => {
    setLegs([...legs.splice(0, index), ...legs.splice(index + 1)]);
  };
  const handleUpdate = (index, data) => {
    setLegs([...legs.splice(0, index), data, ...legs.splice(index + 1)]);
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
          </>
        )}
      </div>
    </div>
  );
}

export default Index;
