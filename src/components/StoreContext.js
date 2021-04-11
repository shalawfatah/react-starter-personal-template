import React, { useState } from 'react'
import {createContext} from 'core-js/library/fn/reflect/es7/metadata'

export const stateContext = createContext()

export const StoreContext = ({children}) => {
    const [posts, setPosts] = useState([])

    const fetchURL = async () => {
        const result = await fetch('http://')
        const data = await result.json()
        setPosts(data)
    }

    useEffect(() => {
        fetchURL()
    }, [])

    return (
        <stateContext.Provider value={[posts, setPosts]}>
            {children}
        </stateContext.Provider>
    )
}
