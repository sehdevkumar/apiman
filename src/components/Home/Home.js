import React from 'react'
import Nav from '../Navs/Nav'
import Content from '../Content/Content'
import {  BrowserRouter as Router} from 'react-router-dom'
function Home() {
    return (
        <>
            <Router>

                    <div className='row'>
                        <div className='col-12 col-md-2'>
                            <Nav />
                        </div>
                        <div className='col-12 col-md-10'>
                            <Content />
                        </div>
                    </div>

            </Router>


        </>
    )
}

export default Home
