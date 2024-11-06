import React, { useContext, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import NoteContext from 'context/notes/noteContext';

const UpdatePassword = (props) => {
  const [Cpassword, setCPassword] = useState('');
  const [password, setPassword] = useState('');
  const p = useContext(NoteContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (Cpassword === password) {
      if(props.Name == "Admin"){
        p.updatePassword(Cpassword);
     }
      // console.log('Password:', password)
      window.alert("Password is updated");
    } else {
      window.alert("Passwords do not match. Please try again.");
      // Reload the page
      window.location.reload();
    }
    
  };

  return (
    <Form onSubmit={handleSubmit} className='content mx-4 '>
    <div className="form-group row p-2">
      <Label for="exampleEmail" className="col-sm-2 col-form-label">password</Label>
      <div className="col-sm-10">
        <Input
          type="password"
          name="password"
          id="examplepassword"
          placeholder="xyz@123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
    <div className="form-group row p-2">
      <Label for="examplePassword" className="col-sm-2 col-form-label">Confirm Password</Label>
      <div className="col-sm-10">
        <Input
          type="password"
          name="Cpassword"
          id="exampleCPassword"
          placeholder="Re-enter password"
          value={Cpassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-10 offset-sm-2">
        <Button>Submit</Button>
      </div>
    </div>
  </Form>
);
};
export default UpdatePassword;
