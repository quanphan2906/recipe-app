import React from 'react'
import { BrowserRouter, Route} from "react-router-dom"

import Home from "./container/Home";

function App() {
    return (
        <div className="App">
          <BrowserRouter>
            <Route exact path="/" render={(routeProps) => <Home {...routeProps}/>}/>
          </BrowserRouter>
        </div>
    );
}

export default App;
