import React, { Component } from 'react';
import '../App.css'
import AnimalHeader from './AnimalHeader'; 
import './style.css'

const CountContext = React.createContext(0);

class Animal extends Component{
  constructor(props){
    super(props);

    this.state = {
      details : [
        {
          id:1,
          name: 'Tiger',
          number: 3890,
          endangered: true,
          photo : 'https://source.unsplash.com/Si6Obte6Bu0/200x100',
          donation : 100
        },
        {
          id:2,
          name: 'Brown Bear',
          number: 200000,
          endangered: false,
          photo: 'https://source.unsplash.com/c8XlAc1akIU/200x100',
          donation : 50
        },
        {
          id:3,
          name: 'Red Panda',
          number: 10000,
          endangered: true,
          photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100',
          donation : 10
        }
      ],
      count : 0
    }
  }

  removeList(id){
    this.setState(prevState => {
      const list = prevState.details.filter(item => item.id != id);
      return {prevState, details : list};
    });
  }
  
  addList(details) {
    this.setState(prevState => {
      const newId = prevState.details.length + 1;
      const newDetails = { ...details, id: newId };
      return { ...prevState, details: [...prevState.details, newDetails] };
    });
  }

  updateCount(){
    this.setState(prevState =>{
      return {
        ...prevState, count : this.state.details.filter(item => item.endangered === true).length
      };
    });
  }

  componentDidMount() {
    this.updateCount();
  }

  render(){
        return(
          <React.Fragment>
            <CountContext.Provider value={this.state.count}>
            <AnimalHeader details={this.state.details} removeList={this.removeList.bind(this)}>Endangered Animal</AnimalHeader>
            <AnimalForm addList={this.addList.bind(this)} ></AnimalForm>
            <AnimalCount></AnimalCount>
            </CountContext.Provider>            
          </React.Fragment>
        )
    }

}

class AnimalCount extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {props => (
          <div>
            Total number of endangered animals:
            <span> {props}</span>
          </div>
        )}
      </CountContext.Consumer>
    );
  }
}

class AnimalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: 0,
      endangered: false,
      photo: '',
      donation: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInputValue(target) {
    if (target.type === 'radio' && target.value === 'yes') {
      return true;
    } else if (target.type === 'radio' && target.value === 'no') {
      return false;
    }

    return target.value;
  }

  handleChange(event) {
    const inputTarget = event.target;
    const inputValue = this.getInputValue(inputTarget);
    const inputName = inputTarget.name;

    this.setState({ [inputName]: inputValue });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addList(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add new animal details</h2>
        <label>
          <div className='title'>Name:</div>{' '}
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className='title'>Number:</div>{' '}
          <input
            type='number'
            name='number'
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <div className='title'>Endangered:</div>
          <label>
            <input
              type='radio'
              name='endangered'
              value={this.state.endangered}
              onChange={this.handleChange}
            />{' '}
            Yes
          </label>
          <label>
            <input
              type='radio'
              name='endangered'
              value={!this.state.endangered}
              onChange={this.handleChange}
            />{' '}
            No
          </label>
        </div>
        <label>
          <div className='title'>Photo:</div>{' '}
          <input
            type='text'
            name='photo'
            value={this.state.photo}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className='title'>Donation:</div> $
          <input
            type='number'
            name='donation'
            value={this.state.donation}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <button>Add to the list</button>
        </div>
      </form>
    );
  }
}

export default Animal;