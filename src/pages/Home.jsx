import React from "react"
import Landing from "../components/Landing"
import {Helmet} from 'react-helmet';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Brian Hays</title>
        </Helmet>
        <Landing/>
        </>
    )
}

export default Home
