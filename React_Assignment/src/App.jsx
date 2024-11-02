import Blog from './Blog'; 
import BrightText from './BrightText';
import Goal from './Goal';
import MovieGrid from './MovieGrid';

function App() {
  return (
    <>
    <h1>Hello</h1>
      <h1>Do Modifictions</h1>
      <h2>Assignment-1</h2>
      <div>
        <Goal />
      </div>
      <h2>Assignment-2</h2>
      <div>
        <Blog />
      </div>
      <h2>Assignment-3</h2>
      <div>
        <h2>Movie List</h2>
        <MovieGrid />
      </div>
      <h2>Assignment-4</h2>
      <BrightText color="red"/>
      <BrightText color="green"/>
      <BrightText color="blue"/>
    </>
  );
}

export default App;
