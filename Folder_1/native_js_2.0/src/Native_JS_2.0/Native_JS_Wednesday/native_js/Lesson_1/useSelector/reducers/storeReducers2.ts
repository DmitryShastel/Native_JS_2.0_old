export type RootState = {
    counters: {
        firstCounter: number;
        secondCounter: number;
    };
    storeReducer: StoreType;
    testData: TestDataType
};

export type TestDataType = {
    id: number
    title: string
}

export type   InitialStateType = {
    firstCounter: number;
    secondCounter: number;
    testData?: TestDataType
}

export type StoreType = {
    counters: InitialStateType,
    testData: TestDataType
}

const initialState: StoreType = {
    counters: {
        firstCounter: 0,
        secondCounter: 0,
    },
    testData: {id: 110,
        title: 'test'},
};

export const storeReducer = (state: StoreType = initialState, action: any): StoreType => {
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

export const IncrementFirstAC = () => {
    return {
        type: "INC_FIRST"
    }
}