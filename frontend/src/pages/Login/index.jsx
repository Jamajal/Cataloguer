import { Link, useNavigate } from 'react-router-dom';
import { StyledLogin } from './StyledLogin';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

export default function Login() {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ error, setError ] = useState();

    function handleLogin() {
        if(!email | !password){
            setError("Preencha todos os campos!");
            return;
        }

        const res = signin(email, password);
        
        if(res){
            setError(res);
            return;
        };

        navigate("/");
    }

    return (
        <StyledLogin>
            <Link to="/"><button>Voltar</button></Link>
            <div className="login-box">
                <h2>Faça seu login</h2>
                <form method="GET" action="#">
                    <input 
                        type="email" 
                        placeholder="Digite seu email" 
                        onChange={e => [setEmail(e.target.value), setError("")]}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Digite sua senha" 
                        id="password" 
                        onChange={e => [setPassword(e.target.value), setError("")]}
                    />
                    <input 
                        type="button" 
                        value="Entrar" 
                        onClick={handleLogin} 
                    />
                </form>
                <div className="problems">
                    <p>{error}</p>
                </div>
            </div>
        </StyledLogin>
    )
}