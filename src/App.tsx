import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Button from './components/Button';
import Input from "./components/Input"
import Container from './components/Container'
import LoggedIn from './components/state/LoggedIn';
import NewUser from './components/state/NewUser';
import Counter from './components/state/Counter';

const App = () => {

  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Diana",
      last: "Prince"
    }
  ]

  return (
    <div className='App '>
      <Greet name={"Dave"} messageCount={10} isLogginIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status={"loading"} />

      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio</Heading>
      </Oscar>

      <Container style={{ border: '1px white dotted', padding: '1rem', display: 'center',margin: '5px' }}>
        <div style={{ margin: '10px' }}>
          <Input value=' ' handleChange={(event) => { console.log(event) }} />
          <Button handleClick={(event, id) => {
            console.log("Clicked", event, id);
          }}>Click Me Doofus</Button>
        </div>
      </Container>
      <LoggedIn/>
      <NewUser/>
      <Counter/>
    </div>
  )
}

export default App