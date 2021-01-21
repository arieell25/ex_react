import React, { Component } from "react";
import ListItem from "./ListItems";
import PropTypes from "prop-types";

export class List extends Component {
    render() {
        return ( 
            <ul style = { listStyle }> 
                {this.props.list.map(listItem => ( 
                    <li key = { listItem.id } >  
                    <ListItem listItem = { listItem }
                    delLi = { this.props.delLi }
                    updateListItem = { this.props.updateListItem }/> 
                    </li>
                ))} 
            </ul>
        );
    }
}

List.propTypes = {
    list: PropTypes.array.isRequired
};

const listStyle = {
    position: "absolute",
    marginLeft: "45.625vw",
    marginTop: "10.22vh",
    backgroundColor: "#FFF",
    boxShadow: "0px 4px 14px rgba(23, 25, 50, 0.5)",
    borderRadius: "10px",
    width: "28.625vw",
    height: "42vh",
    overflowY: "scroll"
};

export default List;