import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { stateContext } from '../components/StoreContext'

const Home = () => {
    
    const [posts, setPosts] = useContext(stateContext)

    return (
        <Layout>

        </Layout>
    )
}

export default Home
