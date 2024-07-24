import { useState } from "react"

export default function Player({name, symbol}) {
    const [ isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // When updating a state based on the previous state, it's better to use a function
        // instead of the state value directly. This is because React batches state updates
        // and the state value may not be what you expect.
        setIsEditing((editing) => !editing);
    }

    let playerName = <span className='player-name'>{name}</span>;
    //let btnCaption = 'Edit';

    if (isEditing) {
        playerName = <input type="text" require value={name} />
        //btnCaption = 'Save';
    }

    return (
        <li>
            <span className = 'player'>
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
        )
}