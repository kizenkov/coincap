import arrowBack from './../../../files/arrowBack.png'
import {useHistory} from 'react-router-dom'

function Structure() {
    let history = useHistory()
    return (
        <div className='structure'>
            <h1>СТРУКТУРА</h1>
            <img onClick={() => history.goBack()} className='back' src={arrowBack} alt='back'/>
        </div>
    )
}

export default Structure