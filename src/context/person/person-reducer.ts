import {GET_PERSON, SET_LOADING, Person} from '../types'

type PersonState = {
    person: Person;
    loading: boolean;
    getPerson: () => Promise<void>;
    dispatch: () => void;
}

type PersonAction = {
    type: string;
    payload: Person
}

export default (state: PersonState, action: PersonAction) => {
    switch (action.type) {
        case GET_PERSON:
            return {
                ...state,
                person: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}
