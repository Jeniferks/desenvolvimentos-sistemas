import "./Avatar.css"

const Avatar = (props) => {
    const [name, lastName] = props.name.split(" ");
    return (
        <div className="avatar" >
            {name[0] + lastName[0]}
        </div>
    )
}

export default Avatar