interface GreetProps {
    name: string;
    messageCount?: number;
    isLogginIn: boolean;
}

const Greet = (props:GreetProps) => {   //get the whole object in one go
  return (
    <div>
        {props.isLogginIn  && (
            <h2>{`Hi ${props.name} You have ${props.messageCount} unread messages!`}</h2> // use the object's attributes later on
        )}
    </div>
  )
}

export default Greet;