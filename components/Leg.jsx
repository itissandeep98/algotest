import Dropdown from './Dropdown';
import Input from './Input';
import Options from './Options';
import { MomentumData, ReentryData, SLData, TargetData } from './OptionsList';

function Leg({ state, setState, handleDelete, handleCopy }) {
  return (
    <div className='bg-gray-700 p-3 relative rounded-xl'>
      <div className='absolute right-0 top-0 flex flex-col -mr-3 -mt-3 space-y-5'>
        <button className='bg-red-500 rounded-full p-2' onClick={handleDelete}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
            />
          </svg>
        </button>
        <button
          className='bg-gray-100 text-gray-500 rounded-full p-2'
          onClick={handleCopy}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z'
            />
          </svg>
        </button>
      </div>
      {state && <Options state={state} setState={setState} />}
      <div className='flex flex-wrap my-6 justify-center space-x-6 gap-5'>
        <div>
          <p className='text-xs font-semibold my-1'>Simple Momentum</p>
          <div className='flex items-center space-x-2'>
            <Dropdown
              value={state.LegMomentum.Type}
              onChange={(value) =>
                setState({
                  ...state,
                  LegMomentum: { ...state.LegMomentum, Type: value }
                })
              }
              options={MomentumData}
            />
            <Input
              value={state.LegMomentum.Value}
              onChange={(value) =>
                setState({
                  ...state,
                  LegMomentum: { ...state.LegMomentum, Value: value }
                })
              }
            />
          </div>
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Target Profit</p>
          <div className='flex items-center space-x-2'>
            <Dropdown
              value={state.LegTarget.Type}
              onChange={(value) =>
                setState({
                  ...state,
                  LegTarget: { ...state.LegTarget, Type: value }
                })
              }
              options={TargetData}
            />
            <Input
              value={state.LegTarget.Value}
              onChange={(value) =>
                setState({
                  ...state,
                  LegTarget: { ...state.LegTarget, Value: value }
                })
              }
            />
          </div>
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Stop Loss</p>
          <div className='flex items-center space-x-2'>
            <Dropdown
              value={state.LegStopLoss.Type}
              onChange={(value) =>
                setState({
                  ...state,
                  LegStopLoss: { ...state.LegStopLoss, Type: value }
                })
              }
              options={TargetData}
            />
            <Input
              value={state.LegStopLoss.Value}
              onChange={(value) =>
                setState({
                  ...state,
                  LegStopLoss: { ...state.LegStopLoss, Value: value }
                })
              }
            />
          </div>
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Trail SL</p>
          <div className='flex items-center space-x-2'>
            <Dropdown
              value={state.LegTrailSL.Type}
              onChange={(value) =>
                setState({
                  ...state,
                  LegTrailSL: { ...state.LegTrailSL, Type: value }
                })
              }
              options={SLData}
            />
            <Input
              value={state.LegTrailSL.Value.InstrumentMove}
              onChange={(value) =>
                setState({
                  ...state,
                  LegTrailSL: {
                    ...state.LegTrailSL,
                    Value: { ...state.LegTrailSL.Value, InstrumentMove: value }
                  }
                })
              }
            />
            <Input
              value={state.LegTrailSL.Value.StopLossMove}
              onChange={(value) =>
                setState({
                  ...state,
                  LegTrailSL: {
                    ...state.LegTrailSL,
                    Value: { ...state.LegTrailSL.Value, StopLossMove: value }
                  }
                })
              }
            />
          </div>
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Re-entry on Tgt</p>
          <div className='flex items-center space-x-2'>
            <Dropdown
              value={state.LegReentryTP.Type}
              onChange={(value) =>
                setState({
                  ...state,
                  LegReentryTP: { ...state.LegReentryTP, Type: value }
                })
              }
              options={ReentryData}
            />
            <Input
              value={state.LegReentryTP.Value}
              onChange={(value) =>
                setState({
                  ...state,
                  LegReentryTP: { ...state.LegReentryTP, Value: value }
                })
              }
            />
          </div>
        </div>
        <div>
          <p className='text-xs font-semibold my-1'>Re-entry on SL</p>
          <div className='flex items-center space-x-2'>
            <Dropdown
              value={state.LegReentrySL.Type}
              onChange={(value) =>
                setState({
                  ...state,
                  LegReentrySL: { ...state.LegReentrySL, Type: value }
                })
              }
              options={ReentryData}
            />
            <Input
              value={state.LegReentrySL.Value}
              onChange={(value) =>
                setState({
                  ...state,
                  LegReentrySL: { ...state.LegReentrySL, Value: value }
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leg;
