


import  React, { Component }  from 'react'
import axios from 'axios';


class ReactFrom extends Component {

    state= {
        name : "",
        password: "",
        responseFromAPI : ""
    }


    componentDidMount( ){
     fetch('https://pokeapi.co/api/v2/pokemon/1')
     .then( res => res.json())
     .then( data => {
         this.setState({
            responseFromAPI : data.name
         })
     })
     .catch(console.log('something went wrong'))

    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    passwordChange = (event) => {
        this.setState({
            value : event.target.value
        })
    }

    handleFormSubmit = (values) =>{
        console.log(this.state)
    }
    render() {
        return(
            <div className='form-div'>
                
             <form onSubmit={this.handleFormSubmit}>

                    <h1>{this.state.responseFromAPI}</h1>
            <label>
                name:
                <input 
                    type="text" value={this.state.name} 
                    onChange={(event)=>this.handleChange(event)}
                    name="name"
                ></input>
            </label>

            <label>
                <input type='password' value={this.state.value} onChange={(event) => this.handleChange(event)}
                name="password">
                </input>
            </label>

            <label>
                <input type="button" value="submit"></input>
            </label>

        </form>
        </div>
       
        )
        
    }

}

export default ReactFrom;