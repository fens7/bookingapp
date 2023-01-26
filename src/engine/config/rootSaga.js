// Core
import { all, call } from "@redux-saga/core/effects"
import { destinationsWatcher } from '../core/destination/saga/watchers'
import { hotelsWatcher } from '../core/hotels/saga/watchers'

export default function* rootSaga(){
    yield all([
        call(destinationsWatcher),
        call(hotelsWatcher)
    ])
}