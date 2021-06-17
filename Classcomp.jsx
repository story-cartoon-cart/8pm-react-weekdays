import React from 'react';

class First extends React.Component{
    constructor()
    {
        super();
        this.state={time:"MORNING",
                    month:"June"}
    }

    changeTime =() => {
        this.setState({time:"EVENING"})


    }


    render()
    {
        
        return (
            <>
            <h1>Welcome User !</h1>
            <br></br>
            <h3>Welcome To My Web Page</h3>
            <br></br>
            <h3>{this.state.month}</h3>
        <h4>GOOD {this.state.time}</h4>
        <button type="button" onClick={this.changeTime}>Click Me</button>
        </>
        )

        
    }
}

export default First;