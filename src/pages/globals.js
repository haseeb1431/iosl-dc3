global.backendURL = "http://localhost:8000/"

function SetPersonType(props) {
    global.PersonType = props.PersonType
    global.Email = props.Email
    global.ID = props.ID
}

export default SetPersonType;