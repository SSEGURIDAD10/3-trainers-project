import {useRoutes} from 'react-router-dom'

import Home from './../pages/Home'
import DetailTrainer from './../pages/DetailTrainer'
import FormTrainers from './../pages/FormTrainers'
import About from './../pages/About'
import NotFound from './../pages/NotFound'

function Routes() {
  const routes = useRoutes([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: 'new-trainer',
        element: <FormTrainers/>
    },
    {
        path: 'detail-trainer',
        element: <DetailTrainer/>
    },
    {
        path: 'about',
        element: <About/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
  ]);
  return routes;
}

export default Routes