import Map from './Map';
import Menu from './Menu';

import { useContext } from 'react'

export default function Body(){
    return(
        <div id='row'>
            <Map/>
            <Menu/>
        </div>
    )
}