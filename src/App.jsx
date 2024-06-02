import FormReport from './components/FormReport'
import StateAcount from './components/StateAcount'
import Search from './components/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorPage, HomePage } from './pages'
import { Layout } from './components/core/layout'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/:ruc' element={<StateAcount />}></Route>
                    <Route path='/form' element={<FormReport />}></Route>
                    <Route path='/search' element={<Search />}></Route>
                    <Route path="*" element={<ErrorPage mensajeerror='Cuidado al Navegar / Esta Ruta no existe.' />} />
                </Routes>
            </Layout>
        </BrowserRouter>

    )
}

export default App
