import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView126925Reducer from '../features/CalendarView126925/redux/reducers';
import EmailAuth126924Reducer from '../features/EmailAuth126924/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView126925: CalendarView126925Reducer,
EmailAuth126924: EmailAuth126924Reducer,

});