// Reference: https://codedaily.io/tutorials/8/Build-a-Reusable-Scroll-List-Component-with-Animated-scrollTo-in-React

import React from 'react';
import Person from '../TwoWayBinding/Person/Person';
import items from './data';
import ScrollView from './ScrollView';
import ScrollElement from './ScrollElement';

class ScrollComponents extends React.Component {

    scrollTo = (name) => {
      this._scroller.scrollTo(name);
    }
  
    render() {
      return(
        <div className="app">
            {
              items.map(({name}) => <button onClick={() => this.scrollTo(name)}>{name}</button>)
            }
            <ScrollView ref={scroller => this._scroller = scroller}>
              <div className="scroller">
                {items.map(({ name, image, age }) => {
                  return (
                    <ScrollElement name={name}>
                      {/* <div className="item">
                        <img src={image} />
                        {name}
                      </div> */}
                      <div className="item">
                      <Person name={name} age={age}></Person>
                      </div>
                      
                    </ScrollElement>
                  );
                })}
              </div>
            </ScrollView>
          </div>
      )
    }
  }

  export default ScrollComponents;