import arrowBack from './../../../files/arrowBack.png'
import {useHistory} from 'react-router-dom'

function Graphic() {
    let history = useHistory()
    return (
        <div className='structure'>
            <h1>ГРАФИК ПРИЁМА</h1>
            <img onClick={() => history.goBack()} className='back' src={arrowBack} alt='back'/>
        </div>
    )
}

export default Graphic