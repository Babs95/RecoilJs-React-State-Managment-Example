import { Suspense } from "react";
import "./App.css";
//import Compteur from "./atoms/components/Compteur";
//import Hash from "./atoms/components/Hash";
import Sidebar from "./atoms/components/Sidebar";
import UserDetails from "./atoms/components/UserDetails";

function App() {
  if (1 !== 2) {
  }
  return (
    <div className="container">
      <header className="row">
        <div className="col-sm-8">
          {/* <Suspense fallback="Loading....">
            <Hash />
          </Suspense>
          <Compteur /> */}
          {/* <Compteur id="2" /> */}
          <Suspense fallback="Loading....">
            <UserDetails />
          </Suspense>
        </div>
        <div className="col-sm-4">
          <Sidebar />
        </div>
      </header>
    </div>
  );
}

export default App;
