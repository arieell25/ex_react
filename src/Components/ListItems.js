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
        this.setState({ itemEdit: {id: "", date: "", name: "", city: "" }});
        this.setState({ edit: false });
    };

    renderEdit() {
        return ( 
            <div>
            <form onSubmit = { this.onSubmit }
            className = "form-control" >
            <input type = "text" name = "date" placeholder = "date" value = { this.state.itemEdit.date || "" }
            onChange = { this.changeDate }
            style = { dateStyle }
            className = "form-control"/>
            <input type = "textarea" name = "name" placeholder = "name" value = { this.state.itemEdit.name || "" }
            onChange = { this.changeName }
            style = { nameStyle }
            className = "form-contraol"/>
            <input type = "textarea" name = "city" placeholder = "city" value = { this.state.itemEdit.city || "" }
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
        if (dateToShow.length > 20) dateToShow = dateToShow.slice(0, 19) + "...";
        let nameToShow = name;
        let cityToShow = city;

        return ( 
            <div style = { itemStyle }>    
            <span> { dateToShow } </span>
            <span> { nameToShow } </span> 
            <span> { cityToShow } </span> 
            <button type = "submit" style = { submitCircleStyle } >
            <FaTrash className = "delete" style = { delStyle } onClick = { this.props.delLi.bind(this, id) }/> 
            </button>
            <button type = "submit" style = { submitCircleStyle } > 
            <FaPen className = "edit" style = { editStyle } onClick = { this.edit.bind(this, id) }/> 
            </button>
            <style> 
            { `.delete:hover{opacity: 0.7;}
            .edit:hover{opacity: 0.7;}` } 
            </style> 
            </div>
        );
    }

    render() {
        const { id, date, name, city } = this.props.listItem;
        return this.state.edit ? this.renderEdit(id, date, name, city) : this.renderUI(id, date, name, city);
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
    color: "#FFF",
};

const editStyle = {
    color: "#FFF"
};

const dateStyle = {
    position: "relative",
    marginTop: "04.761904761%",
    width: "20.4375vw",
    height: "05.33vh",
    background: "#FFF",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)"
};

const nameStyle = {
    position: "relative",
    marginTop: "04.761904761%",
    width: "20.4375vw",
    height: "05.33vh",
    background: "#FFF",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)"
};

const cityStyle = {
    position: "relative",
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
    marginLeft: "42.54%"

};

const saveStyle = {
    height: "54px",
    width: "54px",
    color: "#FD5842"
};

const submitCircleStyle = {
    borderRadius: "50%",
    background: "#ED4D47",
    float: "right",
    height: "24px",
    width: "24px",
    marginRight:"10px"
    
}

export default ListItem;