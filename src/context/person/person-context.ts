import { createContext, useContext } from 'react'
import { Person } from '../types'

type PersonContext = {
    getPerson: () => Promise<void>
    loading: boolean,
    person: Person,
}

const PersonContext = createContext({} as PersonContext)

export const usePersonContext = () => useContext(PersonContext);

export default PersonContext
