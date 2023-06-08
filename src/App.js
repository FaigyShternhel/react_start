import Counter from './comps/counter';
import InputVal from './comps/inputVal';
import Message from './comps/message';
import Hw1 from './comps/hw1';
import Hw2 from './comps/hw2';
import Hw3 from './comps/hw3';
import Hw4 from './comps/hw4';
import Hw5 from './comps/hw5';
import './App.css';

function App() {
  return (
    <div className ='container'>
      <h1 className='text-danger'>  hello</h1>
        <Message txt = "first 1111"/> 
        <Message txt = "last 2222"/> 
        <Counter/> 
        <InputVal/> 
        <Hw1/> 
        <Hw2/> 
        <Hw3/> 
        <Hw4/> 
        <Hw5/> 
    </div>
  );
}

export default App;
