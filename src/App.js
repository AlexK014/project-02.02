import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://logodix.com/logo/718281.png'}></img>
      </header>

      <nav>
        <div>
          Профайл
        </div>
        <div>
          Профайл
        </div>
        <div>
          Профайл
        </div>
        <div>
          Профайл
        </div>
      </nav>

      <div>
        New Post
          <div>
            <textarea></textarea>
            <button>Добавить пост</button>
          </div>
          My Post
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
      </div>
    </div>
  );
}

export default App;
