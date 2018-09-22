import React, { Component } from "react";
import { connect } from "react-redux";
import Clock from "components/Clock/Clock";

class ClockContainer extends Component {
  state = {
    hours: "",
    minutes: "",
    seconds: ""
  };

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    setInterval(() => {
      var d = new Date();
      this.setState({
        ...this.state,
        hours: d.getHours(),
        minutes: d.getMinutes(),
        seconds: d.getSeconds()
      });
    }, 1000);
  };

  render() {
    const { hours, minutes, seconds } = this.state;
    return <Clock hours={hours} minutes={minutes} seconds={seconds} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClockContainer);
