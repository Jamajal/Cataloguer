import { StyledRegistrateCard } from './StyledRegistrateCard'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../../http/api'
export default function RegistrateCard() {
    const [strategy, setStrategy] = useState("Normal")
    const [textName, setTextName] = useState("")
    const [squareNumber, setSquareNumber] = useState(1)
    const [square1Color, setSquare1Color] = useState("gray");
    const changeColor = e => {
        const element = e.target
        const elementColor = element.style.backgroundColor

        if (elementColor === "rgb(232, 21, 56)")
            element.style.backgroundColor = "#000000"

        else if (elementColor === "rgb(0, 0, 0)")
            element.style.backgroundColor = "#FFFFFF"

        else if (elementColor === "rgb(255, 255, 255)")
            element.style.backgroundColor = "#E81538"
    }

    const square = {
        class: "square",
        color: "#E81538",
        function: changeColor
    }

    const [renderedSquares, setRenderedSquares] = useState([square])

    const handleSquareNumber = (e, square) => {
        e.preventDefault()
        const updateRenderedSquares = [
            ...renderedSquares
        ]
        if (e.target.value === "more" && squareNumber < 8) {
            setSquareNumber(squareNumber + 1)
            updateRenderedSquares.push(square)
            setRenderedSquares(updateRenderedSquares)
        }
        else if (e.target.value === "less" && squareNumber > 1) {
            setSquareNumber(squareNumber - 1)
            updateRenderedSquares.pop()
            setRenderedSquares(updateRenderedSquares)
        }
        console.log(squareNumber)
        console.log(square1Color)
        console.log(updateRenderedSquares)
    }



    const handleSubmit = async e => {
        e.preventDefault()
        const squares = [...document.querySelector(".squares").children]
        var squaresToDB = ""

        squares.forEach(square => {
            if (square.style.backgroundColor === "rgb(232, 21, 56)")
                squaresToDB += "V "

            else if (square.style.backgroundColor === "rgb(0, 0, 0)")
                squaresToDB += "P "

            else if (square.style.backgroundColor === "rgb(255, 255, 255)")
                squaresToDB += "B "

        })
        const data = {
            name: textName,
            strategy: strategy.toLowerCase(),
            squares: squaresToDB
        }

        const response = await api.post(`/createstrategy?name=${data.name}&type=${data.strategy}&strategy=${data.squares}`)
        alert(response.data.message)
    }

    return (

        <StyledRegistrateCard>
            <Link to="/"><button>Voltar</button></Link>
            <div className="cadastrate-card-box">
                <form method="POST" action="/">
                    <input
                        type="text"
                        onChange={e => setTextName(e.target.value)}
                        placeholder="Nome da Estratégia"
                    />

                    <select
                        value={strategy}
                        onChange={e => setStrategy(e.target.value)}
                        id="strategy"
                    >
                        <option value="Normal">Normal</option>
                        <option value="Minority">Minoria</option>
                        <option value="Majority">Maioria</option>
                    </select>
                    <div className="squares">
                        {
                            renderedSquares.map((square, index) => (
                                <div
                                    key={index}
                                    className={square.class}
                                    style={{ backgroundColor: square.color }}
                                    onClick={square.function}
                                />
                            ))
                        }
                        <span>-</span>
                        <div className="square" style={{ backgroundColor: "#E81538" }} onClick={changeColor} />
                    </div>
                    <div className="square-number-controls">
                        <button
                            onClick={e => handleSquareNumber(e, square)}
                            value="less"
                        >Diminuir</button>
                        <button
                            onClick={e => handleSquareNumber(e, square)}
                            value="more"
                        >Adicionar</button>
                    </div>


                    <input
                        type="submit"
                        value="Cadastrar"
                        onClick={e => handleSubmit(e)}
                    />

                </form>
            </div>
        </StyledRegistrateCard>
    )
}