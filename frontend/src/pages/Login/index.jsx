import { StyledLogin } from './StyledLogin'

export default function Login(){
    function handleClick(){
        console.log("Clicou!")
    }

    return(
        <StyledLogin>
            <a href="/"><button>Voltar</button></a>
            <div className="login-box">
                <h2>Faça seu login</h2>
                <form method="GET" action="#">
                    <input type="email" placeholder="Digite seu email" />
                    <input type="password" name="password" placeholder="Digite sua senha" id="password" />
                    <input type="button" value="Entrar" onClick={handleClick} />
                </form>
                <div className="problems">
                    <p>Esqueci minha senha</p>
                    <p>Não sou cadastrado</p>
                </div>
            </div>
        </StyledLogin>
    )
}