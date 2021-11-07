// Reference: https://bapunawarsaddam.medium.com/add-and-remove-form-fields-dynamically-using-react-and-react-hooks-3b033c3c0bf5
import React, { Component } from 'react'


export default class Split extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestSection: [{ username: "", itemPrice: [0]}],
            users: []                            // username has to be unique
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            users:['test1','test2']}); 

        // get the all the friend name of the user 
        //fetchPosts().then(response => {                       // send get request from the server
            //this.setState({
                //posts: response.posts
            //});
            //});
    }

    handleChangeUsername(i, e) {
        let requestSectionHelp = this.state.requestSection;
        requestSectionHelp[i].username = e.target.value;
        this.setState({
            requestSection: requestSectionHelp});
    }

    handleChangeItemPrice(setionIndex, itemIndex, e) {
        let requestSectionHelp = this.state.requestSection;
        requestSectionHelp[setionIndex].itemPrice[itemIndex] = e.target.value;
        this.setState({
            requestSection: requestSectionHelp
        });
    }

    addItem(setionIndex){
        let requestSectionHelp = this.state.requestSection;
        requestSectionHelp[setionIndex].itemPrice = [...this.state.requestSection[setionIndex].itemPrice, 0]
        this.setState({
            requestSection: requestSectionHelp
        });
    }

    removeRequestSection(i,e){
        let requestSectionHelp = this.state.requestSection;
        requestSectionHelp.splice(i, 1);
        this.setState({ 
            requestSection: requestSectionHelp
         });
    }

    addRequestSection(event){
        this.setState({
            requestSection: [...this.state.requestSection, { username: "", itemPrice :  [0]}]
          })
    }

    handleSubmit(event){
        event.preventDefault();
        const result = {
            requestSection: this.state.requestSection
        }
        console.log(result)                                             // send post request and use that number in Calculate
        alert(JSON.stringify(this.state.requestSection));
        fetch('')
    }


    render() {
        return (
            <div>
                <h3>Please Fill out the form.
                    <br/>Use Add-Item button when you have more items request from the user
                    <br />Use Add-Friend button when you have more friend you want to request split from.
                </h3>
                <form onSubmit={this.handleSubmit}>
                    {/* loop through requestSection */}
                    {this.state.requestSection.map((element, index) => (
                        <div className='one-user-request' key={(index).toString()}>

                            {/* username */}
                            <label key={(index+1).toString()}>Username: </label>
                            <select 
                                required
                                key={(index+2).toString()}
                                value={element.username}
                                onChange={e => this.handleChangeUsername(index, e)}
                                >
                                {/* loops through this.state.users */}
                                {
                                    this.state.users.map((user) =>
                                        <option
                                            key={user}
                                            value={user}
                                            >{user}
                                        </option>
                                    )
                                }
                            </select>

                            {/* item price input list */}
                            {/* loop through the item price to insert add more items */}
                            {element.itemPrice.map( (item, i) =>
                                <div className="item-list">
                                    <label key={(index+5+i).toString()}>Item Price: </label>
                                    <input
                                        required
                                        key={(index+6+i).toString()}
                                        type='number'
                                        min='0'
                                        value={item || 0}
                                        onChange={e => this.handleChangeItemPrice(index, i, e)} />
                                </div>
                            )}
                            
                            {/* press a add item button for adding more item input for the request section */}
                            <button key={(index+3).toString()} className="button" type="button" onClick={() => this.addItem(index) }>Add Item</button>
                            
                            {/* press a remove button for each requestsection after the first one */}
                            {
                                index ?
                                    <button 
                                        key={(index+4).toString()}
                                        type="button"  
                                        className="button" 
                                        onClick={() => this.removeRequestSection(index)}>Remove</button>
                                        : null
                            }
                            <br />
                        </div>
                    ))}

                    <br />
                    <div className="button-section">
                        <button className="button" type="button" onClick={() => this.addRequestSection()}>Add Friend</button>
                        <button className="button" type="submit">Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}
