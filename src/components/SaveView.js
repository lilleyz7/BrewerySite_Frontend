import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './SingleView.css';

function SaveView(props){

    const [clicked, setClicked] = useState(false)
    
    const deleteHandler = (name) => {
        setClicked(true)
        axios.delete(`http://localhost:8000/delete/${name}`)
        .then(res => console.log(res))
    }
    
    return(
        <tr>
            <td>{props.brewery.name}</td>
            <td>{props.brewery.street} {props.brewery.city}</td>
            <td>{props.brewery.brewType}</td>
            <td>{props.brewery.phoneNum}</td>
            {!clicked && (
                <td class="delete"><Button variant="primary" onClick={() => 
                    deleteHandler(props.brewery.name)}>Delete</Button></td>
            )}
            {clicked && (
                <td class="delete"><Button variant="primary">Deleted</Button></td>
            )}

        </tr>

        )
    }
    

export default SaveView;