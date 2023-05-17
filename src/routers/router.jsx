import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import {MovieDetails} from '../pages/MovieDetails'
export function MyRouts() {
    return(
       <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route exact path="/details/:movieId" element={<MovieDetails/>}/>
        </Routes>
       </BrowserRouter>
    )   
}