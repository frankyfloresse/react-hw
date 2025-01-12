import {Link, Outlet} from "react-router-dom";


function App() {

  return (
      <>
          <Link to={'/users'}>Users</Link>
          <hr/>
          <Outlet />
      </>
  )
}

export default App
