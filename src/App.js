import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Typography, Divider } from '@material-ui/core';
import styled from '@emotion/styled'
import './App.css';
import { Home } from './components/home';


function App() {
  return (
    <RootComponent>      
      <Router>
        <div className="App">
          <Typography variant="h2" gutterBottom>
              Competencies
          </Typography>
            <Divider />
            <Switch>
                <Route path="/">
                  <Home/>
                </Route>

            </Switch>
        </div>
      </Router>
    </RootComponent>
  );
}

export default App;

const RootComponent = styled.div`
  height: 100vh;
  background-color: #ede7f6;
`;
