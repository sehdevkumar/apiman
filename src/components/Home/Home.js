import React from 'react'
import Nav from '../Navs/Nav'
import Content from '../Content/Content'
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function Home() {
    return (
        <>
            <Router>
                
                <Switch>
                    <div className='row'>
                        <div className='col-12 col-md-2'>
                            <Nav />
                        </div>
                        <div className='col-12 col-md-10'>
                            <Content />
                        </div>
                    </div>
                </Switch>



            </Router>


        </>
    )
}

export default Home
