import {useState} from 'react'
import Loader from './components/Loader/Loader'
import Graphics from './components/Graphics/Graphics'

function App() {
    const [loading, setLoading] = useState(false)
    const [requestError, setRequestError] = useState(null)

    return (
        <div className='app'>
            {loading && <Loader/>}
            {requestError
                ? <div className='errorWindow'>
                    <h1>{requestError}</h1>
                    <button className='btn btn-primary' onClick={() => window.location.reload()}>Reload</button>
                </div>
                : <Graphics setLoading={setLoading} setRequestError={setRequestError} loading={loading}/>}
        </div>
    )
}

export default App