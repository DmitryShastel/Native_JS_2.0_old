export type RootState = {
    counters: {
        firstCounter: number;
        secondCounter: number;
    };
    storeReducer: StoreType;
};

export type   InitialStateType = {
    firstCounter: number;
    secondCounter: number;
}

export type StoreType  = {
    counters: InitialStateType
}

const initialState: StoreType = {
    counters: {
        firstCounter: 0,
        secondCounter: 0
    }
};

export const storeReducer = (state: StoreType = initialState, action: any): StoreType => {
    debugger
    switch (action.type) {
        case "INC_FIRST":
            return {
                ...state,
                counters: {
                    ...state.counters,
                    firstCounter: state.counters.firstCounter + 1
                }
            };
        case "INC_SECOND":
            return {
                ...state,
                counters: {
                    ...state.counters,
                    secondCounter: state.counters.secondCounter + 1
                }
            };
        default:
            return state;
    }
};
