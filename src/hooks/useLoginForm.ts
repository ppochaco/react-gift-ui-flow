import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginEnabled, setIsLoginEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoginEnabled(username !== '' && password !== '');
  }, [username, password]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    if (!isLoginEnabled) {
      /* eslint-disable no-alert */
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    sessionStorage.setItem('authToken', username);
    navigate('/');
  };

  return {
    username,
    password,
    isLoginEnabled,
    handleInputChange,
    handleLogin,
  };
};
