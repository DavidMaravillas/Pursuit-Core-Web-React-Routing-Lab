import React, { Component } from 'react';
import axios from 'axios';

class RanDog extends Component {
    state = { rand: [] };
    async componentDidMount() {
        try {
            let res = await axios.get("https://dog.ceo/api/breeds/image/random");
                debugger
            this.setState({rand: [res.data.message]})
        } catch (error) {
            this.setState({rand: []});
            console.log(error);
        }
    }
    render() { 
        let randImg = this.state.rand.map((dog,i) => {
            return <img src={dog} key={i} alt={""}/>
        })
        return ( 
            <div>
                {randImg}
            </div>
         );
    }
}
 
export default RanDog;