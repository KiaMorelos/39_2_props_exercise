const Person = (props) => {
   
    const name = props.name.length >= 8 ? props.name.slice(0,6) : props.name;

    const isVotingAge = props.age >= 18 ? "They're old enough to vote" : "They must be 18 to vote"

    const hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)

    return (
        <div>
            <p>Learn some information about this person:</p>
            <p>{name} is {props.age} years old and enjoys the following hobbies:</p>
            <ul>{hobbies}</ul>
            <small>{isVotingAge}</small>
        </div>
    )
}