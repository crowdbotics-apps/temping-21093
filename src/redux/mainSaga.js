import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView126925Saga from '../features/CalendarView126925/redux/sagas';
import EmailAuth126924Saga from '../features/EmailAuth126924/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView126925Saga,
EmailAuth126924Saga,
    
  ]);
}