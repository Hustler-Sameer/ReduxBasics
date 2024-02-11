# ReduxBasics

This is the basic project to get a brief idea of redux 

The basic code of redux looks something like this
const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'INCREMENT'){
  return {
    counter: state.counter + 1,
  };}
   else if (action.type === "DECREMENT") {
    return {
        counter: state.counter -1,
    }
   }
};

const store = redux.createStore(counterReducer);
// we have passed reducer function to the store

// subsciption

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber); // this will call every time when any change is made in the state of the application
// store.subscribe(counterSubscriber); // it will call every time when any change in



//creating and dispatching an action 
// we are dispatching a action of increament
store.dispatch({type : "INCREMENT"});
store.dispatch({type : "DECREMENT"});
