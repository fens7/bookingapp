// Core
import { push } from "redux-first-history"
import { call, delay, put } from "redux-saga/effects"
import { routes } from "../../../../config/routers"
import api from "../../../../config/axios"
import {  setItems, setLoading } from "../../slice"


export function* callGetHotelsWorker() {
    yield put(setLoading(true))
    const response = yield call(api.getHotels)
    if (response.status === 200) {
        yield put(setItems(response.data))
    }
    yield delay(1000)
    yield put(setLoading(false))
    yield put(push(routes.hotels))
}
