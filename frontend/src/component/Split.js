// Reference: https://bapunawarsaddam.medium.com/add-and-remove-form-fields-dynamically-using-react-and-react-hooks-3b033c3c0bf5
import React, { Component } from 'react'


export default class Split extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestSection: [{ username: "", itemPrice:0}]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(i, e) {
        let requestSection = this.state.requestSection;
        requestSection[i]['username'] = e.target.value;
        this.setState({requestSection});
    }

    handleChangeItemPrice(i, e) {
        let requestSection = this.state.requestSection;
        requestSection[i]['itemPrice'] = e.target.value;
        this.setState({requestSection});
    }

    removeRequestSection(i,e){
        let requestSection = this.state.requestSection;
        requestSection.splice(i, 1);
        this.setState({ requestSection });
    }

    addRequestSection(event){
        this.setState({
            requestSection: [...this.state.requestSection, { username: "", itemPrice :  0}]
          })
    }

    handleSubmit(event){
        event.preventDefault();
        const result = {
            requestSection: this.state.requestSection
        }
        console.log(result)                                 // send post request and use that number in Calculate
        alert(JSON.stringify(this.state.requestSection));
        fetch('')
    }


    render() {
        return (
            <div>
                <h3>fill out the form</h3>
                <form onSubmit={this.handleSubmit}>
                    {this.state.requestSection.map((element, index) => (
                        <div className='one-user-request' key={index}>
                            <label>Username:</label>
                            <input 
                                type='text' 
                                name='username' 
                                value={element.username || ""}
                                onChange={e => this.handleChangeUsername(index, e)} />
                            <label>Item Price</label>
                            <input
                                type='number'
                                min='0'
                                value={element.itemPrice || 0}
                                onChange={e => this.handleChangeItemPrice(index,e)} />
                            <button className="button_add_price" type="button" onClick={() => this.addItem()}>Add Item</button>
                            {
                                index ?
                                    <button 
                                        type="button"  
                                        className="button_request_section" 
                                        onClick={() => this.removeRequestSection(index)}>Remove</button>
                                        : null
                            }
                            </div>
                    ))}
                    <div className="button-section">
                        <button className="button_add_user" type="button" onClick={() => this.addRequestSection()}>Add Friend</button>
                        <button className="button_submit" type="submit">Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}
