import Bar from '../../components/Bar'
import Header from '../../components/Header'
import Analyser from '../../components/Analyser'
import CardField from '../../components/CardField'
import Game from '../../components/Game'
import FilterButton from '../../components/FilterButton'

import { StyledCataloguer } from './StyledCataloguer'

/* 
    Ao diminuir o layout para mobile, eu queria fazer trocas de containers para outro
    a ideia que tive foi de criar ementos iguais em diferentes containers e controlar
    quais estão aparecendo utilizando classes com display: none. Os nomes dessas classe
    são tipo screen-only, sendo screen as telas em que o elemento irá aparecer
*/

export default function Cataloguer(){
    return(
        <StyledCataloguer>
            <Bar />
            <main>
                <div className="left-side">
                    <Header />
                    <div className="desk-tablet-only game-screen">
                        <Game />
                    </div>
                    <div className="mobile-only card-field-left">
                        <CardField />
                    </div>
                    <Analyser />
                </div>
                <div className="right-side">
                    <div className="desk-tablet-only filter-button-box">
                        <FilterButton />
                    </div>
                    <div className="desk-tablet-only card-field-box">
                        <CardField />
                    </div>
                    <div className="mobile-only game-screen">
                        <Game />
                    </div>
                </div>
           </main>
        </StyledCataloguer>
    )
}