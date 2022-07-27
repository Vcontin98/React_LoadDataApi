import { useState } from 'react'
import PostList from './components/PostList'
import { BrowserRouter as Router,
    Routes,
    Route,
    Link 
} from 'react-router-dom'
import Contact from './views/Contact'
import Home from './views/Home'
import Car from './views/Car'
import BlogSingle from './views/BlogSingle'

export default function App() {

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Car">Car</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="car">
                        {/* URL Prefix of /blog */}
                        <Route path=":id" element={<BlogSingle />} />
                        <Route path="" element={<Car />} />
                    </Route>
                    <Route path="/" element={<Home />}  />
                </Routes>
            </Router>
        </>
    )
}