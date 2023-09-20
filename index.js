const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  }
  
  const roadReducer = (state = initialWagonState, action) => {
    switch (action.type) {
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1
        };
      }
      case 'travel': {
        if (state.supplies - (20 * action.payload) < action.payload) {
          return state;
        }
        return {
          ...state,
          supplies: state.supplies - (20 * action.payload),
          distance: state.distance + (10 * action.payload),
          days: state.days + action.payload
        };
      }
      case 'tippedWagon': {
        return {
          ...state,
          supplies: state.supplies - 30,
          days: state.days + 1
        };
      }
      case 'sell': {
        return {
          ...state,
          supplies: state.supplies - 20,
          cash: state.cash + 5
        };
      }
      case 'buy': {
        return {
          ...state,
          supplies: state.supplies + 25,
          cash: state.cash - 15
        };
      }
      case 'theft': {
        return {
          ...state,
          cash: state.cash / 2
        };
      }
      default: {
        return state;
      }
    }
  }
  
  let wagon = roadReducer(undefined, {});
  console.log(wagon);
  wagon = roadReducer(wagon, { type: 'travel', payload: 1 });
  console.log(wagon);
  wagon = roadReducer(wagon, { type: 'gather' });
  console.log(wagon);
  wagon = roadReducer(wagon, { type: 'tippedWagon' });
  console.log(wagon);
  /* wagon = roadReducer(wagon, { type: 'travel', payload: 3 });
  console.log(wagon);
  wagon = roadReducer(wagon, { type: 'travel', payload: 11 });
  console.log(wagon); */
  wagon = roadReducer(wagon, { type: 'sell' });
  console.log(wagon);
  wagon = roadReducer(wagon, { type: 'buy' });
  console.log(wagon);
  wagon = roadReducer(wagon, { type: 'theft' });
  console.log(wagon);