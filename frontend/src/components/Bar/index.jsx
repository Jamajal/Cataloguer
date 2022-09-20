import { Link } from 'react-router-dom'
import { StyledBar } from './StyledBar'

export default function Bar(){
    return (
        <StyledBar>
            <Link to="/login">Login</Link>
            <Link to="new-card">Nova Estratégia</Link>
        </StyledBar>
    )
}