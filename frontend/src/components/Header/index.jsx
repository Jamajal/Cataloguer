import FilterButton from '../FilterButton'
import React, { useState } from 'react'; 

export default function Header() {
    const { assertiveness, setAssertiveness } = useState("90")

    return (
        <StyledHeader>
            <div className="filter">
                <div className="selects">
                    <select 
                    value={assertiveness} 
                    onChange={setAssertiveness(e.target.value)} 
                    id="percent">
                        <option value="90">MAIS DE 90%</option>
                        <option value="80">MAIS DE 80%</option>
                        <option value="70">MAIS DE 70%</option>
                        <option value="50">MAIS DE 50%</option>
                        <option value="40">MAIS DE 40%</option>
                    </select>
                    <select name="latest" id="latest">
                        <option value="10">ÚLTIMOS 10 MINUTOS</option>
                        <option value="30">ÚLTIMOS 30 MINUTOS</option>
                        <option value="60">ÚLTIMA HORA</option>
                        <option value="180">ÚLTIMAS 3 HORAS</option>
                        <option value="2880">ÚLTIMO DIA</option>
                    </select>
                    <select name="gales" id="gales">
                        <option value="nogale">SEM GALE</option>
                        <option value="1gale">GALE 1</option>
                        <option value="2gale">GALE 2</option>
                    </select>
                </div>
                <div className="mobile-only filter-button-header">
                    <FilterButton />
                </div>
            </div>
        </StyledHeader>
    )
} 
