import axios from "axios";
import React, { useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ViewController from './ViewController';
import './SearchHeader.css';

function SearchHeader(){

    const [breweryList, setBreweryList] = useState([{}])
    const [pageLength, setPageLength] = useState('')
    const [city, setCity] = useState('')
    const [pageToView, setPageToView] = useState('')
    const [showResults, setShowResults] = useState(false)

    const handleClick = event => {
        setShowResults(true);
    }

    const dataManipulation = (data) => {
        let newArray = []
        for (let i = 0; i < pageLength; i++){
            let randomNum = Math.floor(Math.random() * 50);
            newArray.push(data[randomNum])
        }
        setBreweryList(newArray)
        
    }

    function searchHandler(){
        handleClick();
        setPageToView('searchPage')
        axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=50`)
        .then(res => {dataManipulation(res.data)
        })
    };

    function viewSavesHandler() {
        handleClick();
        setPageToView('savedPage')
        axios.get('http://localhost:8000/saved')
        .then(res => {setBreweryList(res.data)})
    };

    return(
        <div>
            <Form>
            <Form.Label>Search Term  </Form.Label> <br></br>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={event => setCity(event.target.value)}
            /> <br></br>
            <Form.Label className="pageSize" >Result Size</Form.Label><br></br>
            <Form.Control
                id="pageSize"
                placeholder = '0'
                onChange={event => setPageLength(event.target.value)}/> <br/>
            <Button variant="outline-success" onClick={searchHandler}>Search</Button>

            </Form>
            {showResults && (
                <ViewController breweryList={breweryList} pageToView = {pageToView}/>
            )}
            <Button variant="outline-success" onClick={viewSavesHandler}>View Saved Breweries</Button>

        </div>
    )

}

export default SearchHeader;