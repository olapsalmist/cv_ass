import './App.css';
import EduExp from './EduExp';
import GenInfo from './GenInfo';
import PracExp from './PracExp';
import Skill from './Skill';
import Summary from './Summary';

function App() {
  return (
    <div className="Application">
      <GenInfo/>
      <div className='content'>
        <Summary/>
        <Skill/>
        <PracExp/>
        <EduExp/>
        
      </div>
      <div className='box'>

      </div>
    </div>
  );
}

export default App;
