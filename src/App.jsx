import FormReport from './pages/report/FormReport'
import Search from './components/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorPage, HomePage, ReportIdPage } from './pages'
import { Layout } from './components/core/layout'
import { Toaster } from 'react-hot-toast'

function App() {
    return (
        <BrowserRouter>
            <Toaster position="top-center" reverseOrder={false} />
            <Layout>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/report/:ruc' element={<ReportIdPage />}></Route>
                    <Route path='/create/register/form' element={<FormReport />}></Route>
                    <Route path='/search' element={<Search />}></Route>
                    <Route path="*" element={<ErrorPage mensajeerror='Cuidado al Navegar / Esta Ruta no existe.' />} />
                </Routes>
            </Layout>
        </BrowserRouter>

    )
}

export default App
