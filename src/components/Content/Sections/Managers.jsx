import arrowBack from './../../../files/arrowBack.png'
import {useHistory} from 'react-router-dom';

function Managers() {
    let history = useHistory()
    return (
        <div className='structure'>
            <h1>РУКОВОДСТВО</h1>
            <img onClick={() => history.goBack()} className='back' src={arrowBack} alt='back'/>
        </div>
    )
}

export default Managers