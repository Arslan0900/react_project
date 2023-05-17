import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Actions';
type AppState = {
  inc_dec_app: number;
};


const Home = () => {
  const myState: AppState['inc_dec_app'] = useSelector((state:AppState) => state.inc_dec_app);
  const dispatch = useDispatch();
  
  return (
    <div className='header_home'>
      <div>
      <h1 >Increment/Decrement-Application</h1>
      <div className='bts_div'>
        <button className='btn' onClick={() => dispatch(decrement(5))}>-</button>
        <span className='value'>{myState}</span>
        <button className='btn' onClick={() => dispatch(increment(10))}>+</button>
      </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
