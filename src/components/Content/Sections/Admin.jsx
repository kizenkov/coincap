import arrowBack from './../../../files/arrowBack.png'
import {NavLink} from 'react-router-dom'
import post from '../../../files/post.png'
import {useHistory} from 'react-router-dom'

function Admin() {
    let history = useHistory()
    return (
        <div className='structure'>
            <span>АДМИНИСТРАТИВНЫЕ ПРОЦЕДУРЫ</span>
            <img onClick={() => history.goBack()} className='back' src={arrowBack} alt='back'/>
            <div>
                <div className='container-fluid fw-bold text-end fs-4'>
                    <div className='row pt-4'>
                        <div className='col item m-4 p-4'>
                            <NavLink to='/page1'>
                                <div>
                                    СТРАНИЦА 1
                                </div>
                            </NavLink>
                            <img src={post} alt='post'/>
                        </div>
                        <div className='col item m-4 p-4'>
                            <NavLink to='/'>
                                <div>
                                    ПРОЦЕДУРА 2
                                </div>
                            </NavLink>
                            <img src={post} alt='post'/>
                        </div>
                        <div className='col item m-4 p-4'>
                            <NavLink to='/'>
                                <div>
                                    ПРОЦЕДУРА 3
                                </div>
                            </NavLink>
                            <img src={post} alt='post'/>
                        </div>
                    </div>
                    <div className='row pt-4'>
                        <div className='col m-4 p-4'>
                        </div>
                        <div className='col item  m-4 p-4'>
                            <NavLink to='/'>
                                <div>
                                    ПРОЦЕДУРА 4
                                </div>
                            </NavLink>
                            <img src={post} alt='post'/>
                        </div>
                        <div className='col m-4 p-4'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin