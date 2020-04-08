import React from 'react';
import Person from './Person/Person';
import AddPerson from './Person/AddPerson';

class TwoWayBinding extends React.Component {

    constructor() {
        super();
        this.state = {
            persons : [
                { 'id': 1, 'name': 'Dipal', 'age': 23 },
           ]
        }
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
        return <Person name={person.name} age={person.age} changeName={(event) => this.changePersonName(event, person)}></Person>
    }

    addPerson(person) {
        // Can not directly mutate or add person to state using Array.push for state object
        // Concat method is used to achieve the same.
        this.setState(state => {
            const persons = this.state.persons.concat(person);
            return { persons };
          });
    }

    render() {
        return (
            <div>
                {this.state.persons.map((person) => this.renderPerson(person))}
                <AddPerson click={(person) => this.addPerson(person)}/>
            </div>
        )
    }
}

export default TwoWayBinding;