import React, { Component } from "react";
import { FaPlusCircle } from "react-icons/fa";

export class AddListItem extends Component {
    state = {
        date: "",
        name: "",
        city: ""
    };

    changeDate = e => {
        this.setState({ date: e.target.value });
    };

    changeName = e => {
        this.setState({ name: e.target.value });
    };

    changeCity = e => {
        this.setState({ city: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.addListItem(this.state.date, this.state.name, this.state.city);
        this.setState({ date: "", name: "", city:"" });
    };

    render() {
        return ( 
            <div>
            <form style = { formStyle }
            onSubmit = { this.onSubmit }
            className = "form-group" >
            <input type = "text"
            name = "date"
            placeholder = "date"
            value = { this.state.date }
            onChange = { this.changeDate }
            style = { dateStyle }
            className = "form-control"/>
            <input type = "text"
            name = "name"
            placeholder = "name"
            value = { this.state.name }
            onChange = { this.changeName }
            style = { nameStyle }
            className = "form-control"/>
             <input type = "text"
            name = "city"
            placeholder = "city"
            value = { this.state.city }
            onChange = { this.changeCity }
            style = { cityStyle }
            className = "form-control"/>
            <button type = "submit"
            style = { submitStyle } >
            <FaPlusCircle style = { circleStyle }/> 
            </button> 
            </form> 
            </div>
        );
    }
}

const formStyle = {
    position: "absolute",
    marginLeft: "75.6875vw",
    marginTop: "10.22vh",
    width: "20.625vw",
    height: "30vh",
    boxShadow: "0px 4px 14px rgba(23, 25, 50, 0.5)",
    borderRadius: "10px"
};

const dateStyle = {
    position: "relative",
    marginLeft: "05.198776758%",
    marginTop: "04.761904761%",
    width: "18.4375vw",
    height: "05.33vh",
    background: "#FFF",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)"
};

const nameStyle = {
    position: "relative",
    marginLeft: "05.198776758%",
    marginTop: "04.761904761%",
    width: "18.4375vw",
    height: "05.33vh",
    background: "#FFF",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)"
};

const cityStyle = {
    position: "relative",
    marginLeft: "05.198776758%",
    marginTop: "04.761904761%",
    width: "18.4375vw",
    height: "05.33vh",
    background: "#FFF",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)"
};

const submitStyle = {
    border: "0",
    padding: "0",
    position: "relative",
    marginLeft: "42.54%",
    marginTop: "2.857%"
};

const circleStyle = {
    height: "34px",
    width: "34px",
    color: "#EE4D47"
};

export default AddListItem;