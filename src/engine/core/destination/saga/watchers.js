// Core
import { takeEvery } from 'redux-saga/effects'
// Engine
import { getDestinationsAsync } from './asyncActions'
import { callGetDestinationsWorker } from './workers/callGetDestinationsWorker'


export function* destinationsWatcher(){
    yield takeEvery(getDestinationsAsync.type, callGetDestinationsWorker)
}