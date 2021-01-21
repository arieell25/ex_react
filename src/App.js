import React, { Component } from "react";
import "./App.css";
import List from "./Components/List";
import Image from "./Components/Image";
import BackgroundImage from "./Components/BackgroundImag";
import Axios from "axios";
import AddListItem from "./Components/AddListItem";

export class App extends Component {
    state = {
        list: []
    };

    componentDidMount() {
        Axios.get(
                "https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/arieell25/db/mobel"
            )
            .then(res => this.setState({ list: res.data }))
            .catch(res => console.log(res));
    }

    delLi = id => {
        Axios.delete(
                `https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/arieell25/db/mobel/${id}`
            )
            .then(res =>
                this.setState({
                    list: [...this.state.list.filter(ListItem => ListItem.id !== id)]
                })
            )
            .catch(res => console.log(res));
    };

    addListItem = (date, name, city) => {
        Axios.post(
                "https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/arieell25/db/mobel", {
                    date,
                    name,
                    city
        
                }
            )
            .then(res => this.setState({ list: [...this.state.list, res.data] }))
            .catch(res => console.log(res));
    };

    updateListItem = (id, date, name, city) => {
        Axios.put(
                `https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/arieell25/db/mobel/${id}`, {
                    date,
                    name,
                    city
        
                }
            )
            .then(res =>
                this.setState(prevState => ({
                    list: prevState.list.map(listItem =>
                        listItem.id !== res.data.id ? listItem : res.data
                    )
                }))
            )
            .catch(res => console.log(res));
    };

    render() {
        return ( 
            <div className = "classContiner">
            <BackgroundImage/>
            <AddListItem addListItem = { this.addListItem }/> 
            <List list = { this.state.list } delLi = { this.delLi } updateListItem = { this.updateListItem }/>
            <Image/>
            </div>
        );
    }
}

export default App;