import './App.css';
import me from './images/me.jpg';
import cv from './pdf/resume.pdf';

function App() {
  return (
    <div className="App">
      <div className="hero">
        <img src={me} alt="Me" />
        <h1>Alejandro Jerónimo Azamar</h1>
        <p>Full Stack Developer</p>
        <div className="tag">
          <i className="bi bi-file-earmark-pdf-fill"></i>
          <p>
            <a href={cv} download="JerónimoAlejandroResume">
              Download
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
