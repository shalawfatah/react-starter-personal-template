import React, { useContext } from 'react'
import { stateContext } from './StoreContext'

const Search = () => {
    const [posts, setPosts] = useContext(stateContext)
    const filtered = posts.filter((post)=> {
        return posts.title.toLowerCase().trim().includes(search.toLowerCase().trim())
    })
    return (
        <>
         <input type="search" value={posts} onChange={(e) => setSearch(e.target.value)} />   
        </>
    )
}

export default Search
