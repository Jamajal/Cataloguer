import { StyledHeader } from './styledHeader';

export default function Header(){
    return (
            <StyledHeader>
                <div className="bar" />
                <div className="filter">
                    <div className="selects">
                        <select name="percent" id="percent">
                            <option value="90">MAIS DE 90%</option>
                            <option value="80">MAIS DE 80%</option>
                            <option value="70">MAIS DE 70%</option>
                            <option value="50">MAIS DE 50%</option>
                            <option value="40">MAIS DE 40%</option>
                        </select>
                        <select name="latest" id="latest">
                            <option value="10min">ÚLTIMOS 10 MINUTOS</option>
                            <option value="30min">ÚLTIMOS 30 MINUTOS</option>
                            <option value="1h">ÚLTIMA HORA</option>
                            <option value="3h">ÚLTIMAS 3 HORAS</option>
                            <option value="1d">ÚLTIMO DIA</option>
                        </select>
                        <select name="gales" id="gales">
                            <option value="nogale">SEM GALE</option>
                            <option value="1gale">GALE 1</option>
                            <option value="2gale">GALE 2</option>    
                        </select>
                    </div>
                    <button value="Filtrar">Filtrar</button>
                </div>
            </StyledHeader>
    )
}