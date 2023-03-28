import Nav from './components/Nav/nav';
import './App.css';

import Step1 from './components/Steps/step1'

function App() {

  return (
    <>
      <main>
        <div id="container">
          <aside>
            <Nav/>
          </aside>
          <section>
            <Step1/>
          </section>
        </div>
      </main>
      <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
          Coded by <a href="https://webcreatio.net">FacuBarril</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
