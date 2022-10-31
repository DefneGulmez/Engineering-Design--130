import { Right } from 'react-bootstrap/lib/Media';
import './styles.css';
export default function NavBar() {
    return(
        <nav className="nav">
            <ul>
            <li>
                <a href = '/plant' > My plants </a>
            </li>
            </ul>
    
            <li >
                <a href = '/newPlant'> Add a plant</a>
            </li>
        </nav>
    )
}