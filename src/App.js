import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import TriPossible from './Components/TriPossible/TriPossible';
import CheckHypo from './Components/CheckHypo/CheckHypo';
import CalArea from './Components/CalArea/CalArea';
import DouKnow from './Components/DouKnow/DouKnow';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Root />,
  children:[
    {path:'/', element: <Home />},
    {path:'/TriannglePossible', element: <TriPossible />},
    {path:'/CheckHypo', element: <CheckHypo />},
    {path:'/CalArea', element: <CalArea />},
    {path:'/DoUKnow', element:<DouKnow/>}
  ]},
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
