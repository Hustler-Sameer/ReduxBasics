import { useSelector , useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from '../store/index'
// useSelector hook enables us to choose any one of store as well

const Counter = () => {
  const dispatch = useDispatch();
   const counter = useSelector(state => state.counter.counter);// this will select the counter of state written in counter
  
  // state.counter.counter because we have now exposed reducers using 
  
  const show = useSelector(state => state.counter.showCounter)
   const toggleCounterHandler = () => {
    // we need to hide/show the counter by changing its visibility in the Redux Store
    // dispatch({type: "toggle"})


    // done below with redux tool kit

    dispatch(counterActions.toggleCounter());
  };
  console.log(counter)
  const incrementHandler = () => {
    // dispatch({type : "INCREMENT"})

    dispatch(counterActions.increment());
  }
  const decrementHandler = () =>{
    // dispatch({type:"DECREMENT"})
    dispatch(counterActions.decrement());
  }
  const increaseHandler = () => {
    // dispatch({type: 'increase' , amount:5})
    dispatch(counterActions.increase(5));  // { type : SOME_UNIQUE_IDEBTIFIER , payload:5} 

  }
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}> {counter}</div>}
      <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increment by 5</button>
      <button onClick={decrementHandler}>Decrement</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
