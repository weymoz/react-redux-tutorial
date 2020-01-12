import React from "react";
import { connect } from "react-redux";
import { addArticle } from '../actions'


class ConnectedForm extends React.Component {

  state = {
    title: ""
  };

  handleChange = evt => this.setState({ [evt.target.id]: evt.target.value });
  handleSubmit = evt => {
      evt.preventDefault()
      const { title } = this.state
      const { addArticle } = this.props
      addArticle({title})
      this.setState({title: ""})
  }

  render() {
    const { title } = this.state;
    console.log(title);
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(null, { addArticle })(ConnectedForm)

export default Form;
