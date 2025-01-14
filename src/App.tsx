import {Link, Outlet} from "react-router-dom";


function App() {

  return (
      <div className={'p-4 min-h-screen flex flex-col'}>
          <div className={'text-center'}><Link to={'/users'}>Users</Link></div>
          <hr className={'my-4'} />
          <div className={'grow flex flex-col justify-center'}>
              <Outlet/>
          </div>
      </div>
  )
}

export default App
