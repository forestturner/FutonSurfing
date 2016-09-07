import React from 'react';
import { hashHistory } from 'react-router';

class Request extends React.Component {
  constructor(props) {
    super(props);
    let from = this.props.user.futon.start_date;
    let to = this.props.user.futon.end_date;

    this.state = {
      start_date: from,
      end_date: to,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  componentDidMount() {
    document.getElementById("first-field").focus();
  }

  componentDidUpdate() {
    if (this.props.received) {
      hashHistory.push("/profile");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let from;
    let to;
    if (this.state.start_date && this.state.end_date) {
      from = this.state.start_date;
      to = this.state.end_date;
    }

    let updates = {
      start_date: from,
      end_date: to,
      futon_id: this.props.user.futon.id
    }
    this.props.createBooking(updates);
  }

  updateField(event) {
    let updates = {};
    let key = event.target.name;
    updates[key] = event.target.value;
    this.setState(updates);
  }


  render() {
    let errors = this.props.errors.map((error, idx) => (
      <li key={idx}> {error}</li>
    ));
    return (
      <div>
        <div className="overlay"></div>
        <section className="request-form">
          <a href={"/#/users/" + this.props.user.id}><button className="cancel">
            <i className="material-icons">clear</i>
          </button></a>
          <div className="errors">
            <ul>
              {errors}
            </ul>
          </div>
          <h3>Request Booking</h3>
          <form className="request" onSubmit={this.handleSubmit}>
            <label className="request-label">
              Start date:
              <input className="request-input" type="date" id="first-field" name="start_date" value={this.state.start_date} onChange={this.updateField} />
            </label>
            <label className="request-label">
              End date:
              <input className="request-input" type="date" name="end_date" value={this.state.end_date} onChange={this.updateField} />
            </label>
            <button className="request-button">Request</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Request;
