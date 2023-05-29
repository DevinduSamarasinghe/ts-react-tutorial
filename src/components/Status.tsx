interface StatusProps {
    status: 'loading' | 'success' | 'error'; //if we want to pass actual specific data. We can use union type instead of passing a string type

}

const Status = (props: StatusProps) => {
    let message;
    if(props.status === "loading"){
        message = "Loading...";
    }else if(props.status === "success"){
        message = "Data fetched successfully";
    }else if(props.status === "error"){
        message = "Error fetching data";
    }

  return (
    <div>Status - {message}</div>
  )
}

export default Status