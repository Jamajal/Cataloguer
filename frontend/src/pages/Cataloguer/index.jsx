import Bar from '../../components/Bar'
import Header from '../../components/Header'
import Analyser from '../../components/Analyser'
import CardField from '../../components/CardField'
import Game from '../../components/Game'
import FilterButton from '../../components/FilterButton'

import { StyledCataloguer } from './StyledCataloguer'

import { useState } from 'react'

/* 
    Ao diminuir o layout para mobile, eu queria fazer trocas de containers para outro
    a ideia que tive foi de criar ementos iguais em diferentes containers e controlar
    quais estão aparecendo utilizando classes com display: none. Os nomes dessas classe
    são tipo screen-only, sendo screen as telas em que o elemento irá aparecer
*/
/* 
export default function Cataloguer(){
    return(
        <StyledCataloguer>
            <Bar />
            <Header />
            <main>
                <div className="left-side">
                    <Game />
                    <Analyser />
                </div>
                <div className="right-side">
                    <CardField />
                </div>
            </main>

        </StyledCataloguer>
    )
}
 */

export default function Cataloguer() {
    const [ assertiveness, setAssertiveness ] = useState("90")
    const [ latest, setLatest] = useState("10")
    const [ gales, setGales ] = useState("nogale")

    return (
        <StyledCataloguer>
            <Bar />
            <main>
                <div className="left-side">
                    {/* <Header /> */}
                    <div className="filter">
                        <div className="selects">
                            <select 
                            value={assertiveness}
                            onChange={e => setAssertiveness(e.target.value)} 
                            id="percent"
                            >
                                <option value="90">MAIS DE 90%</option>
                                <option value="80">MAIS DE 80%</option>
                                <option value="70">MAIS DE 70%</option>
                                <option value="50">MAIS DE 50%</option>
                                <option value="40">MAIS DE 40%</option>
                            </select>
                            <select 
                            value={latest}
                            onChange={e => setLatest(e.target.value)}
                            id="latest"
                            >
                                <option value="10">ÚLTIMOS 10 MINUTOS</option>
                                <option value="30">ÚLTIMOS 30 MINUTOS</option>
                                <option value="60">ÚLTIMA HORA</option>
                                <option value="180">ÚLTIMAS 3 HORAS</option>
                                <option value="2880">ÚLTIMO DIA</option>
                            </select>
                            <select value={gales}
                            onChange={e => setGales(e.target.value)} 
                            id="gales"
                            >
                                <option value="nogale">SEM GALE</option>
                                <option value="1gale">GALE 1</option>
                                <option value="2gale">GALE 2</option>
                            </select>
                        </div>
                        <div className="mobile-only filter-button-header">
                            <FilterButton />
                        </div>
                    </div>
                    <div className="desk-tablet-only game-screen">
                        <Game />
                    </div>
                    <div className="mobile-only card-field-left">
                        <CardField galeFilters={gales} precisionFilters={latest} />
                    </div>
                    <Analyser />
                </div>
                <div className="right-side">
                    <div className="desk-tablet-only filter-button-box">
                        <FilterButton />
                    </div>
                    <div className="desk-tablet-only card-field-box">
                        <CardField galeFilters={gales} precisionFilters={latest} />
                    </div>
                    <div className="mobile-only game-screen">
                        <Game />
                    </div>
                </div>
            </main>
        </StyledCataloguer>
    )
} 
