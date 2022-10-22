// import AEALogo from './logo.svg';
import './App.css';
import './Components/Navigation Bar/NavigationBar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import MainForm from "./MembersForm";
import RegisterForm from "./Components/Form/RegisterForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/*<div>*/}
          {/*    <NonMemberMessage />*/}
          {/*</div>*/}

        {/*<img src={AEALogo} className="App-logo" alt="logo" />*/}
        {/*<h3 class="p2">This form is strictly for AEA Members</h3>*/}
        {/*<h3 className="p1">*/}
        {/*  Kindly fill up the following form*/}
        {/*</h3>*/}

        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}

        {/*<div>*/}
        {/*  <GridComplexExample />*/}
        {/*</div>*/}

        <div role="region" aria-label="Code Example"
             className="ReactPlayground-StyledExample-module--cls2--Z1-mo ReactPlayground-StyledExample-module--cls1--2oYwU bs-example ReactPlayground-StyledExample-module--show-code--rW9o2">
          {/*<MainForm />*/}
          <RegisterForm />
        </div>

      </header>

        {/*<Footer />*/}
    </div>
  );
}

export default App;


