const Tweet = (props) => {
    return (
        <div>
            <p>{props.name} | {props.username} | {props.date} </p>
            <p>{props.message}</p>
        </div>
    )
}