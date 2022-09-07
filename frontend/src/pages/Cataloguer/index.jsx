import Header from '../../components/Header'
import Analyser from '../../components/Analyser'
import CardField from '../../components/CardField'
import Game from '../../components/Game'

import './styles.css'

export default function Cataloguer(){
    return(
        <>
           <Header />
           <main>
                <div>
                    <Game />
                    <Analyser />
                </div>
                <CardField />
           </main>

        </>
    )
}