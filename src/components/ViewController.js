import SingleView from "./SingleView";
import SaveView from "./SaveView";
import Table from 'react-bootstrap/Table';
import './ViewController.css';

function ViewController(props){

    if (props.pageToView === 'searchPage')
    {
        return (
            <div className="">
                <Table striped bordered size="lg" variant="dark">
                    <thead>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Brewery Type</th>
                        <th>Phone Number</th>
                        <th class="save">Save</th>
                    </thead>
                    <tbody>
                        {props.breweryList.map(brewery => <SingleView brewery=
                        {brewery} />)}
                    </tbody>
                </Table>
            </div>
        )
    }
    else{
        return (
            <div className="">
                <Table striped bordered size="lg" variant="dark">
                    <thead>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Brewery Type</th>
                        <th>Phone Number</th>
                        <th class="delete">Delete</th>
                    </thead>
                    <tbody>
                        {props.breweryList.map(brewery => <SaveView brewery=
                        {brewery} />)}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ViewController;