import {Link, Outlet} from "react-router-dom";


function App() {

  return (
      <div className={'p-4'}>
          <div className={'text-center'}><Link to={'/users'}>Users</Link></div>
          <hr className={'my-4'}/>
          <Outlet />
      </div>
  )
}

export default App
