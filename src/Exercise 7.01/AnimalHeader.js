import react, {Component} from 'react'

const withDonationColor = (WrappedComponent) =>{
  return class extends Component{
    constructor(props){
      super(props);
      this.state = {donationColor:'black'};
    }
    componentDidMount(){
      const donationAmount = this.props.detail.donation;
      const donationColor = donationAmount > 50 ? 'green' : 'red';
      this.setState({donationColor : donationColor});
    }
    render(){
      return <WrappedComponent {...this.props}     donationColor={this.state.donationColor} />;
    }
  }
}

const AnimalDetail = (props) =>{
  const {name, number, endangered, donation,id} = props.detail;
    return(
      <li key={props.key}>
               <div>
                 <p>{props.image}</p>
                 <p>Animal: {name}</p>
                 <p>Number: {number}</p>
                 <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
                 <p style={{ color: props.donationColor }}>
                  Donation amount: <span className='donation-color'>${donation}</span>
                </p>
                <button onClick={() => props.removeList(id)}>Remove from the list</button>
               </div>
            </li>
    )
};

const WrapperComponent = withDonationColor(AnimalDetail);

const AnimalHeader = props => {
    const details = props.details;
    return (
        <div>
          {props.children}
          <ul>
            {details.map((detail, index) => (
            // <AnimalDetail
            // image={<Photo path={detail.photo} title={detail.name} />}
            // detail={detail}
            // key={index}/>

            <WrapperComponent
            image={<Photo path={detail.photo} title={detail.name} />}
            detail={detail}
            key={index}
            removeList={props.removeList}/>
            ))}
          </ul>
        </div>
      );
};

const Photo  = props =>{
  return(<img src={props.path} alt={props.name}/>)
}

export default AnimalHeader;