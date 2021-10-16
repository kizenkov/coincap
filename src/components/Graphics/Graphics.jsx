import {useEffect, useRef, useState} from 'react'
import {CartesianGrid, Line, Tooltip, XAxis, LineChart, YAxis} from 'recharts'

function Graphics({setLoading, setRequestError, loading}) {
    const [arrOfId, setArrOfId] = useState([])
    const [arrOfAllId, setArrOfAllId] = useState([])
    const graphics = useRef()

    useEffect(() => {
        setLoading(true)
        fetch('https://api.coincap.io/v2/assets', {
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'deflate',
                // 'API-Key': 'bfac3ee1-8300-4f22-a543-367f08e84350'
            }
        })
            .then((resp) => {
                resp.json().then(data => {
                    let arr = data.data.map(el => el.id)
                    setArrOfId(arr)
                    return arr
                })
                    .then((arr) => {
                        let arrOfAllAboutId = []
                        let arrOfFetch = []
                        for (let i = 0; i < arr.length; i++) {
                            arrOfFetch[i] = fetch(`https://api.coincap.io/v2/assets/${arr[i]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[i] = data.data
                            }))
                        }
                        Promise.allSettled(arrOfFetch)
                            .then(() => {
                                setArrOfAllId(arrOfAllAboutId)
                            }).catch(err => console.log(err))
                            .finally(() => {
                                setLoading(false)
                                graphics.current.style.opacity = '1';
                            })
                    })
            })
            .catch(() => {
                setLoading(false)
                setRequestError('Server error. Try again.')
            })
    },[])

    let arrOfAllId_Map = []
    let max = []
    let score = 0
    if (arrOfAllId.length > 0) {
        for (let i = 0; i < arrOfAllId.length; i++) {
            if (arrOfAllId[i]) {
                max[i] = 0
                for (let j = 0; j < arrOfAllId[i].length; j++) {
                    if (arrOfAllId[i][j].priceUsd > max[i]) max[i] = Math.ceil(arrOfAllId[i][j].priceUsd)
                }
                arrOfAllId_Map[i] = arrOfAllId[i].map(el => (
                    {name: el.date.slice(0, 10), usd: el.priceUsd}
                ))
                score++
            } else {
                arrOfAllId_Map[i] = null
            }
        }
    }

    let screenWidth = ((window.innerWidth > 0) ? window.innerWidth : window.screen.width)
    let width = (screenWidth > 700) ? screenWidth*0.96 : 700


    let arrOfAllId_Map_List = arrOfAllId_Map.map((el, i) => (el && <div key={i}>
        <h1>{arrOfId[i]}↓</h1>
        <LineChart
            width={width}
            height={400}
            data={arrOfAllId_Map[i]}
            margin={{top: 5, right: 20, left: 10, bottom: 5}}>
            <XAxis dataKey='name'/>
            <YAxis type='number' domain={[0, max[i]]}/>
            <Tooltip/>
            <CartesianGrid stroke='#f5f5f5'/>
            <Line type='monotone' dataKey='usd' stroke='#ff7300' yAxisId={0}/>
        </LineChart><br/>
    </div>))

    return <div className='graphics' ref={graphics}>
        {!loading && <div>
            <h2>Archive of prices for cryptocurrencies for a year (or since its creation if it is less than a year)</h2>
            <h4>Total currencies: {score}</h4><br/>
        </div>}
        {arrOfAllId_Map_List}
    </div>
}

export default Graphics