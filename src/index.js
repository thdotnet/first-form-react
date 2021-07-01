import React, { useState } from 'react'
import ReactDom from 'react-dom'


const FormComponent = function () {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email);
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div>
          <button onClick={handleSubmit}>Send</button>
        </div>
      </form>
    </>
  );
}

export default FormComponent;

ReactDom.render(<FormComponent />, document.getElementById('root'));