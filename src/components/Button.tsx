type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id:number)=> void  //return type of most of the handleClicks are void 
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) =>props.handleClick(event,1)}>{props.children}</button>
  )
}

export default Button