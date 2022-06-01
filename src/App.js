
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './profile/profileComponent'
import ProfileImg from "./profile/profileImg.png";




function App() {
  const handleName = (name) => {

    alert(`You are ${name}`)

  }
  return (
    <div className="App">
    
    <Profile
        fullName="ZAIT sabrina"
        profession="Student in web development"
        bio="to the stars that listen and the dreams that are answered "
        handleName={handleName}
      >
        {/* Pass as Children Props to profileComponent */}
        <img src={ProfileImg} alt="img" />
      </Profile>

    </div>
  );
}

export default App;
