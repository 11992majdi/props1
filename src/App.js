
import "./App.css";
import Profile from "./component/Profile";
import a from "./lmm.jpg";
function App() {
  const profil =[
    {
      name:'Lionel Messi',
      age: 35 ,
      professions:'footballeur',
      photo:{a},
    },
  ];
  return (
    <div className="App">
    {profil.map((el)=>(
      <Profile name={el.name} age={el.age} professions={el.professions}>
        <img src={el.photo} alt="messi" />
      </Profile>
    ))}
  
    </div>
  );
}

export default App;
