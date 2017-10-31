import React from 'react'

class Home extends React.Component {

    clickHandler() {
        console.log('clicked !')
    }

    render() {
        return ( 
            <div>
                <h1>This is Home</h1>
                <button onClick={ this.clickHandler }>Click me !</button>
            </div>
        )
    }
}

export default Home