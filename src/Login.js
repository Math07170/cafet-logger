import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Main from './Main';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NetworkContext from './Context/NetworkContext';
import socketIOClient from "socket.io-client";
import './CSS/Login.css';
import UserContext from './Context/UserContext';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ShowLoginError, setShowLoginError] = useState({value: true});
  function checkLogin(event){
    event.preventDefault();
    const superagent = require('superagent');
    superagent.post('http://localhost:5000/login')
    .send({ username: username, password: password})
    .set('X-API-Key', 'foobar')
    .end((err, res)=>{
      console.log(res);
      if(!res.body.sucess === true){
        setShowLoginError(true);
      }else{
        localStorage.setItem('logged', 'true');
        const UserData = {
          username: username,
          prenom: res.body.prenom,
          nom: res.body.nom,
          access: res.body.access
        }
        const ENDPOINT = "http://localhost:5000";
        const socket = socketIOClient(ENDPOINT);
        const ContexNetwork = {
          socketIOClient: socket
        }
        ReactDOM.render(
          <NetworkContext.Provider value={ContexNetwork}>
          <UserContext.Provider value={UserData}>
              <Main />
          </UserContext.Provider></NetworkContext.Provider>,
          document.getElementById('root'));
      }
      console.log(err);
    });
  }

  return (
    <div className="App">
      <div className="Login">
        <Form onSubmit={checkLogin}>
          <Form.Group size="lg" controlId="username">
            <Form.Label>Identifiant</Form.Label>
            <Form.Control autoFocus type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control autoFocus type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Label className="WrongPass" hidden={ShowLoginError.value}>Identifiant ou mot de passe incorect</Form.Label>
          <Button onClick={checkLogin}>Submit</Button>
        </Form>
        
      </div>
    </div>
  );
}

export default Login;
