import React from 'react';
import Person from './Person/Person';
import AddPerson from './Person/AddPerson';
import './../w3.css';

class TwoWayBinding extends React.Component {
    randomPerson = {};

    constructor() {
        super();
        this.state = {
            persons : [
                { 'id': 1, 'name': 'Dipal', 'age': 23 },
                { 'id': 2, 'name': 'Arpit', 'age': 22 }
           ],
           showPersons: true
        }
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.randomPerson = { 
            'id': this.state.persons.length + 1, 
            'name': data.results[0].name.first + ' ' + data.results[0].name.last, 
            'age': data.results[0].registered.age
        }
        this.setState(state => {
            const persons = this.state.persons.concat(this.randomPerson);
            return {persons};
        })
        console.log(this.randomPerson);
    }

    changePersonName(eve, person) {
        // Get the person's changed name through onChnage event target value
        const myEvent = eve.target.value;
        this.setState(state => {
            const persons = this.state.persons.map(mapped_person => {
                if(person['id'] === mapped_person['id']) {
                    // Search for the person whoes name has been chnaged and return the changed value
                    mapped_person['name'] = myEvent; 
                    return mapped_person;
                }
                else { return mapped_person}
            })
            // Return the mutated state object to change the value of the this.state.person
            return { persons };
        })
        // } https://www.robinwieruch.de/react-state-array-add-update-remove
    }

    renderPerson(person) {
        // Renders the person component for the passed person's object
        // key property is added to allow react to keep track of which elements have changed 
            //   and which didn't so it only renders the elements which did changed and not the 
            // whole list for updating the virtual DOM. Key should be unique
        return <Person 
                id={person.id}
                name={person.name} 
                age={person.age} 
                key={person.id}
                changeName={(event) => this.changePersonName(event, person)}
                deletePerson={() => this.deletePerson(person.id)}
            ></Person>
    }

    deletePerson(personId) {     
        const personsUpdated = this.state.persons.filter(person => person.id !== personId);
        this.setState({persons: personsUpdated});
    }

    addPerson(person) {
        // Can not directly mutate or add person to state using Array.push for state object
        // Concat method is used to achieve the same.
        person.id = this.state.persons.length + 1;
        this.setState(state => {
            const persons = this.state.persons.concat(person);
            return { persons };
          });
    }

    toggleShowPersons = () => {
        this.setState({ showPersons: !this.state.showPersons })
    }

    render() {
        // Everything inside the render method executed when React re-renders the component and not just the content inside the return

        // JSX is written inside the return in which you can't use if statement
        // So to dynamically render the content you can use ternary statement inside the JSX like (condition) ? stmt : stmt
        // Or you can use if statement inside the render function and outside the return like below
        let buttonText = ""
        if(this.state.showPersons) { buttonText = "Hide Persons" } 
        else { buttonText = "Show Persons" }

        return (
            <div>
                <br />
                <button onClick={this.toggleShowPersons} className="w3-btn w3-round-xlarge w3-blue">{buttonText}</button>
                {
                this.state.showPersons ?  // If the showPerson set to true then display the content after ternary statement ? else display the content null which is after the :
                <div>
                    {this.state.persons.map((person) => this.renderPerson(person))}
                    {/* maps function simply maps every element inside the given array into something else. 
                    It does this by executing a function on every element in the given array.*/}
                    <AddPerson click={(person) => this.addPerson(person)}/>
                </div> : null
                }
                <hr />
            </div>
            
            
        )
    }
}

export default TwoWayBinding;