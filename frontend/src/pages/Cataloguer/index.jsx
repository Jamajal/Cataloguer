import Bar from '../../components/Bar'
import Header from '../../components/Header'
import Analyser from '../../components/Analyser'
import CardField from '../../components/CardField'
import Game from '../../components/Game'

import { StyledCataloguer } from './StyledCataloguer'

export default function Cataloguer(){
    return(
        <StyledCataloguer>
            <Bar />
            <main>
                <div className="left-side">
                    <Header />
                    <Game />
                    <Analyser />
                </div>
                <div className="right-side">
                    <button value="Filtrar">Filtrar</button>
                    <CardField />
                </div>
           </main>
        </StyledCataloguer>
    )
}