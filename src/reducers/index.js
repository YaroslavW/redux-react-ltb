export const initialState = {
    user: {
        name: 'Yaroslav',
        surname: 'Kolesnikov',
        age: 48,
    }
}

export function rootReducer(state = initialState){
    return state
}