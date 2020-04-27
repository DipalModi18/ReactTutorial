import React from 'react';

class ErrorBoundry extends React.Component {
    state = {
        hasError: false,
        errorMessage: ''
    }
    
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error})
    }

    render() {
        if(this.state.hasError) {
            return <h1> Something went wrong!! </h1>
        } else {
            return <h1> No error </h1>
        }
        
    }
}

export default ErrorBoundry;