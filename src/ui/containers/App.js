// Core
import { Route, Routes } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'
// Engine
import { history } from "../../engine/config/store";
import { pages } from "../../engine/config/routers";
// Components
import { Layout } from './Layout';


function App() {
    return (
            <HistoryRouter history={history}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        {pages.map(page => 
                            <Route path={page.link} element={page.element}/>
                        )}
                    </Route>
                </Routes>
            </HistoryRouter>


    );
}

export default App;
