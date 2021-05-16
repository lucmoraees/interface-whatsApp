import React from 'react';
import './login';
import api from '../Api';

const Login = () => {
  const handleFacebookLogin = async () => {
    const data = await api.facebookLogin();
    if (!data) {
      alert('Erro ao efetuar o login, tente novante!');
    }
  }

  return (
    <div className="login">
      <button onClick={handleFacebookLogin}>
        Logar com o Facebook
      </button>
    </div>
  )
}
