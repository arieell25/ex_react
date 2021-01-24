import React, { Component } from "react";
import ListItem from "./ListItems";
import PropTypes from "prop-types";

export class List extends Component {
    render() {
        return ( 
            <ul style = { listStyle }> 
                {this.props.list.map((listItem, index) => ( 
                    <li key = { listItem.id } >  
                    <ListItem
                      itemIndex={ index+1 }
                      listItem = { listItem }
                      delLi = { this.props.delLi }
                      updateListItem = { this.props.updateListItem }
                    /> 
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
    marginLeft: "30.625vw",
    marginTop: "15.22vh",
    backgroundColor: "#FFF",
    boxShadow: "0px 4px 14px rgba(23, 25, 50, 0.5)",
    borderRadius: "10px",
    width: "35.625vw",
    height: "78.3vh",
    overflow: "scroll"
};

export default List;