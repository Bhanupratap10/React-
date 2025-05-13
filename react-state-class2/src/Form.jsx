import { useState } from "react"

export default function Form() {
    let[formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });
    

    let handleInputChange = (event) => {
        

    setFormData( (currData) => {
        return { ...currData, [event.target.name]: event.target.value };  // completed property value
    });
};
    
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
         fullName: "",
         username: "",
         password: "",
        });
    };

    return (
     <form onSubmit={handleSubmit} >
      <label htmlFor="FullName">Full Name</label>
      <input 
       placeholder="enetr full name"
       type="text" 
       value={formData.fullName} 
        onChange={handleInputChange}
       id="FullName"
       name="fullName"
       />

      <br></br> <br></br>

      <label htmlFor="username">User Name</label>
      <input 
       placeholder="enetr username"
       type="text" 
       value={formData.username} 
       onChange={handleInputChange}
       id="username"
       name="username"
       />
       <br></br> <br></br>
        <label htmlFor="password">Password</label>
      <input 
       placeholder="enetr your password"
       type="text" 
       value={formData.password} 
       onChange={handleInputChange}
       id="password"
       name="password"
       />
       
      <button>Submit</button>
     </form>
    );
}