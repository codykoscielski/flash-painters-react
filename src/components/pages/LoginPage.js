// import React from 'react'
// import Signup from '../layout/Login';

// const LoginPage = () => {

//     const [formState, setFormStart] = useState({
//         displayName: '',
//         email: '',
//         password:''
//     })

//     const [step, setStep] = useState(1)

//     function updateState() {

//         const currentState = {...formState} 
//         currentState.email = 'mail@gmail.com'
//         setFormState(currentState)
//     }

//     nextStep = () => {
//         const { step } = this.state
//         this.setState({
//             step : step + 1
//         })
//     }

//     prevStep = () => {
//         const { step } = this.state
//         this.setState({
//             step : step - 1
//         })
//     }

//     handleChange = (event) => {
//         this.setState({[event.target.name]: event.target.value})
//     }
    
//     const renderForm = () => {
//         switch(step) {
//             case 1:
//                 return <UserDetails
//                         nextStep={this.nextStep}
//                         handleChange = {this.handleChange}
//                         inputValues={ formState }
//                         />
//             case 2:
//                 return <AddressDetails
//                         nextStep={this.nextStep}
//                         prevStep={this.prevStep}
//                         handleChange = {this.handleChange}
//                         inputValues={inputValues}
//                         />
//             case 3:
//                 return <Confirmation
//                         nextStep={this.nextStep}
//                         prevStep={this.prevStep}
//                         inputValues={inputValues}
//                         />
//             }
//     }

//     return(
//         renderForm()
//     )
        

// }


// export default LoginPage
