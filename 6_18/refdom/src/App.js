import logo from './logo.svg';
import './App.css';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

function App() {
  return (
    // <ValidationSample/>
    <div>
      <ScrollBox ref = {(ref) => this.scrollBox=ref}/>
      <button onClick = {() => this.scrollBox.scrollToBottom()}>
        맨 밑으로
      </button>
    </div>>
  );
}

export default App;
