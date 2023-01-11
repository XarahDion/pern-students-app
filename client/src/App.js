import './App.css';
import InputStudent from './components/InputStudent';
import ListStudents from './components/ListStudents';

const App = () => {
  return (
    <>
      <div className="container">
        <InputStudent />
        <ListStudents />
      </div>
    </>
  );
}

export default App;
