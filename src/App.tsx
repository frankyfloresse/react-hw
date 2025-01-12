import UsersPage from "./pages/UsersPage.tsx";
import {Outlet} from "react-router-dom";


function App() {

  return (
      <>
          <UsersPage />
          <Outlet />
      </>
  )
}

export default App
