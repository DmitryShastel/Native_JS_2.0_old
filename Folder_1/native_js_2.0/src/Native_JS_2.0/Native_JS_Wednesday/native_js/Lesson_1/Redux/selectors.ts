import {IGlobalState} from "./state";

interface IRootState extends IGlobalState {}

export const selectCurrency = (state: IRootState) => state.currency;