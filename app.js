const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;

const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu, jeśli nie masz skończonych 16 lat.</p>;

class CheckboxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />;
    } else {
      return <NegativeMessage />;
    }
  };

  render() {
    // console.log(this.state.isConfirmed);
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
        <label htmlFor="age">Mam conajmniej 16 lat</label>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.querySelector(`#root`));
