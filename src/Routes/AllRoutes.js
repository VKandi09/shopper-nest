import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart'

export const AllRoutes = () => {
  return (
    <main>
        {/* <section> */}
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='*' element=''></Route>
            </Routes>
        {/* </section> */}
    </main>
  )
}
