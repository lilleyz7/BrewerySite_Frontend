import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import './SingleView.css';

function SingleView(props){

    const [clicked, setClicked] = useState(false);

    const SaveHandler = (name, street, city, phoneNum, brewType) => {
        setClicked(true)
        axios.post('http://localhost:8000/save', 
        {'name': name,
         'address': street,
         'city': city, 
         'phoneNum': phoneNum, 
         'brewType': brewType})
         .then(res => console.log(res)) // for testing purposes
    };

    return(
        <tr>
            <td>{props.brewery.name}</td>
            <td>{props.brewery.street} {props.brewery.city}</td>
            <td>{props.brewery.brewery_type}</td>
            <td>{props.brewery.phone}</td>
            {!clicked && (
                <td class="save"><Button variant="primary" onClick={() => 
                    SaveHandler(props.brewery.name, 
                                props.brewery.street, 
                                props.brewery.city, 
                                props.brewery.phone, 
                                props.brewery.brewery_type)}>Save</Button></td>
            )}
            {clicked && (
                <td class="save"><Button variant="primary">Saved</Button></td>
            )}
        </tr>
        )
    }


export default SingleView;