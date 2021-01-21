import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaPen, FaTrash, FaSave } from "react-icons/fa";

export class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            itemEdit: {
                id: "",
                date: "",
                name: "",
                city: ""
            }
        };
    }

    edit(id) {
        this.setState({
            itemEdit: {
                id: id,
                date: this.state.itemEdit.date,
                name: this.state.itemEdit.name,
                city: this.state.itemEdit.city
            }
        });
        this.setState({ edit: true });
    }

    changeDate = e => {
        this.setState({
            itemEdit: {
                id: this.state.itemEdit.id,
                date: e.target.value,
                name: this.state.itemEdit.name,
                city: this.state.itemEdit.city
            }
        });
    };

    changeName = e => {
        this.setState({
            itemEdit: {
                id: this.state.itemEdit.id,
                date: this.state.itemEdit.date,
                name: e.target.value,
                city: this.state.itemEdit.city
            }
        });
    };

    changeCity = e => {
        this.setState({
            itemEdit: {
                id: this.state.itemEdit.id,
                date: this.state.itemEdit.date,
                name: this.state.itemEdit.name,
                city: e.target.value
                
            }
        });
    };

    onSubmit = (e, id) => {
        e.preventDefault();
        this.props.updateListItem(
            this.state.itemEdit.id,
            this.state.itemEdit.date,
            this.state.itemEdit.name,
            this.state.itemEdit.city
        );
        this.setState({ itemEdit: { id: "", date: "", name: "", city: "" } });
        this.setState({ edit: false });
    };

    renderEdit() {
        return ( 
            <div>
            <form onSubmit = { this.onSubmit }
            className = "form-control" >
            <input type = "date" name = "date" value = { this.state.itemEdit.date || "" }
            onChange = { this.changeDate }
            style = { dateStyle }
            className = "form-control"/>
            <input type = "text" name = "name" value = { this.state.itemEdit.name || "" }
            onChange = { this.changeName }
            style = { nameStyle }
            className = "form-control"/>
            <input type = "text" name = "city" value = { this.state.itemEdit.city || "" }
            onChange = { this.changeCity }
            style = { cityStyle }
            className = "form-control"/>
            <button type = "submit" style = { submitStyle }>
            <FaSave style = { saveStyle }/> 
            </button>
            </form> 
            </div>
        );
    }

    renderUI(id, date, name, city) {
        let dateToShow = date;
        let nameToShow = name;
        let cityToShow = city;
       
       
        return ( 
            <div style = { itemStyle }>
            <span> { dateToShow } </span>
            <span> { nameToShow } </span> 
            <span> { cityToShow } </span> 
            <FaTrash className = "delete"
            style = { delStyle }
            onClick = { this.props.delLi.bind(this, id) }/> 
            <FaPen className = "edit" style = { editStyle } onClick = { this.edit.bind(this, id) }/> 
            <style> 
            { `.delete:hover{
            opacity: 0.7;
            }
            .edit:hover{
            opacity: 0.7;
            }` } 
            </style> 
            </div>
        );
    }

    render() {
        const { id, date, name, city } = this.props.listItem;
        return this.state.edit ?
            this.renderEdit(id, date, name, city) :
            this.renderUI(id, date, name, city);
    }
}

ListItem.propTypes = {
    listItem: PropTypes.object.isRequired
};

const itemStyle = {
    position: "relative",
    height: "62px",
    width: "100%",
    color: "#000000",
    fontHeight: "26px",
    paddingLeft: "16px",
    paddingTop: "19px",
    borderBottom: "1px #fff solid"
};

const delStyle = {
    float: "right",
    marginRight: "17px",
    color: "#444749"
};

const editStyle = {
    float: "right",
    marginRight: "16px"
};

const dateStyle = {
    position: "relative",
    marginLeft: "05.198776758%",
    marginTop: "04.761904761%",
    width: "20.4375vw",
    height: "05.33vh",
    background: "#FFF",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)"
};

const nameStyle = {
    position: "relative",
    marginLeft: "05.198776758%",
    marginTop: "04.761904761%",
    width: "20.4375vw",
    height: "05.33vh",
    background: "#FFF",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)"
};

const cityStyle = {
    position: "relative",
    marginLeft: "05.198776758%",
    marginTop: "04.761904761%",
    width: "20.4375vw",
    height: "05.33vh",
    background: "#FFF",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)"
};

const submitStyle = {
    border: "0",
    padding: "0",
    backgroundColor: "#FD584200",
    position: "relative",
    marginLeft: "42.54%",
    marginTop: "-2.857%"
};

const saveStyle = {
    height: "54px",
    width: "54px",
    color: "#FD5842"
};

export default ListItem;