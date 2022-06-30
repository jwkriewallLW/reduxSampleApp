import * as buttonTypes from "./counterTypes"

export function buttonPlus() {
    return {type: buttonTypes.PLUS_ONE};
}

export function buttonMinus() {
    return {type: buttonTypes.MINUS_ONE};
}

// import { createAction } from "@reduxjs/toolkit"
// export const crudOperationCreate = createAction("ADD_ACTION")
