import React,{Component} from 'react'

class UncontrolledForm extends Component{
    constructor(props){
        super(props);

        this.name = null;
        this.passwd = null;

        this.setNameRef = element => {
            this.name = element;
          };
      
          this.setPasswordRef = element => {
            this.password = element;
          };
    }
    
    render(){
        const handleSubmit = (e) => this.handleSubmit(e);
        return(
            <form onSubmit={handleSubmit} noValidate={true}>
            <label>
              Email:
              <input type="text" name="email" ref={this.setNameRef}/>
            </label>
            <label>
              Password:
              <input type="password" ref={this.setPasswordRef}/>
            </label>
            <input type="submit" value="Login"/>
          </form>
        )
    }

    handleSubmit(e){
        e.preventDefault();
        console.info('A name was submitted: ' + this.name.value);
        console.info('A password was submitted: ' + this.password.value);
    }
}

export default UncontrolledForm;