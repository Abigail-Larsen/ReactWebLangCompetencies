import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Typography, Divider } from '@material-ui/core';
import styled from '@emotion/styled'
import './App.css';
import { Home } from './components/home';
import { 
  ThisKeyword,
  MutableVsImmutable
} from "./components/competencies";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Link to='/'> */}
          <Typography variant="h2" gutterBottom>
              Competencies
          </Typography>
            <Divider />
        {/* </Link> */}
        <RootComponent>      
            <Switch>

                <Route path="/MutableVsImmutable">
                  <MutableVsImmutable/>
                </Route>

                <Route path="/dataTypes">
                  <ThisKeyword/>
                </Route>

                <Route path="/ExecutionContexts">
                  <ThisKeyword/>
                </Route>

                <Route path="/ThisKeyword">
                  <ThisKeyword/>
                </Route>

                <Route path="/PassByReference">
                  <ThisKeyword/>
                </Route>


                <Route path="/">
                  <Home/>
                </Route>

            </Switch>
          </RootComponent>
        </div>
      </Router>
  );
}

export default App;

const RootComponent = styled.div`
    height: 100vh;
    background-color: #ede7f6;
    padding: 10px;
`;
