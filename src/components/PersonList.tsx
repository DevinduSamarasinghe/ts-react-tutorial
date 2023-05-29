
interface PersonListProps {
    names: {
        first: string;
        last: string;
    }[]; //way to show an array of objects
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>{props.names.map((user)=>{
        return (<h2 key={user.first}>{user.first} {user.last} </h2>)
    })}</div>
  )
}

export default PersonList