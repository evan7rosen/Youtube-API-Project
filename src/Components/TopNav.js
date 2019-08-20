import React, { Component } from "react";
import { Input, Menu, Icon, Button, Form } from "semantic-ui-react";
import Logo from "./logo.png";

export default class TopNav extends Component {
  state = {
    query: ""
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    console.log(this.state.query);
    return (
      <Menu fluid widths={3}>
        <Menu.Item>
          <img
            src={Logo}
            alt="Double R Video Logo"
            style={{ height: "75px", width: "250px" }}
          />
        </Menu.Item>
        <Menu.Item>
          <Form onSubmit={this.handleSubmit}>
            <Input
              placeholder="Search..."
              onChange={this.handleChange}
              value={this.state.query}
            />
            <Button icon>
              <Icon name="search" />
            </Button>
          </Form>
        </Menu.Item>
        <Menu.Item name="DoubleRVideo Productions Video Portal" />
      </Menu>
    );
  }
}
