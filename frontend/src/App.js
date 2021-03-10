import React, { useEffect } from "react"
import GlobalStyles from "./GlobalStyles"
import { Switch, Route, BrowserRouter, Redirect} from "react-router-dom" 


const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <Route exact path="/">

      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
