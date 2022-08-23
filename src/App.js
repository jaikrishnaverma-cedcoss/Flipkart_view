import Component1 from './component/Component1';
import Component2 from './component/Component2';
import Component3 from './component/Component3';
import Component4 from './component/Component4'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <Component1 />
           <Component2 />
          <div className='flip' style={{width:"99.9%",padding:"0%"}}><Component3 /></div>
           <Component4 />
      </header>
    </div>
  );
}

export default App;
