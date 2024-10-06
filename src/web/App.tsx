import './App.css'
import { Menu } from './components/menu'
import { Version } from './components/version'

export const App = () => {
    return (
        <div className="container">
            <Menu></Menu>
            <Version></Version>
        </div>  
    )
}
