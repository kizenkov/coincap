import './App.css'
import {useEffect, useState} from "react";
import {CartesianGrid, Line, Tooltip, XAxis, LineChart, YAxis} from "recharts";

function Weather() {
    const [arrOfId, setArrOfId] = useState([])
    const [arrOfAllId, setArrOfAllId] = useState([])

    useEffect(() => {
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
                        Promise.allSettled([

                            fetch(`https://api.coincap.io/v2/assets/${arr[0]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[0] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[1]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[1] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[2]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[2] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[3]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[3] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[4]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[4] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[5]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[5] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[6]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[6] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[7]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[7] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[8]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[8] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[9]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[9] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[10]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[10] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[11]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[11] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[12]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[12] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[13]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[13] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[14]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[14] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[15]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[15] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[16]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[16] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[17]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[17] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[18]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[18] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[19]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[19] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[20]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[20] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[21]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[21] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[22]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[22] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[23]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[23] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[24]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[24] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[25]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[25] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[26]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[26] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[27]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[27] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[28]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[28] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[29]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[29] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[30]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[30] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[31]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[31] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[32]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[32] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[33]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[33] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[34]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[34] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[35]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[35] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[36]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[36] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[37]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[37] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[38]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[38] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[39]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[39] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[40]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[40] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[41]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[41] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[42]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[42] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[43]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[43] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[44]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[44] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[45]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[45] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[46]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[46] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[47]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[47] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[48]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[48] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[49]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[49] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[50]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[50] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[51]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[51] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[52]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[52] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[53]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[53] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[54]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[54] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[55]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[55] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[56]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[56] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[57]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[57] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[58]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[58] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[59]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[59] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[60]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[60] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[61]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[61] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[62]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[62] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[63]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[63] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[64]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[64] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[65]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[65] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[66]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[66] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[67]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[67] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[68]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[68] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[69]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[69] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[70]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[70] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[71]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[71] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[72]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[72] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[73]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[73] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[74]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[74] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[75]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[75] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[76]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[76] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[77]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[77] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[78]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[78] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[79]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[79] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[80]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[80] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[81]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[81] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[82]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[82] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[83]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[83] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[84]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[84] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[85]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[85] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[86]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[86] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[87]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[87] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[88]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[88] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[89]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[89] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[90]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[90] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[91]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[81] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[92]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[82] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[93]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[83] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[94]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[84] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[95]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[85] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[96]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[86] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[97]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[87] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[98]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[88] = data.data
                            })),
                            fetch(`https://api.coincap.io/v2/assets/${arr[99]}/history?interval=d1`).then(resp => resp.json().then(data => {
                                arrOfAllAboutId[89] = data.data
                            })),
                        ])
                            .then(() => {
                                setArrOfAllId(arrOfAllAboutId)
                            }).catch(err => console.log(err))
                    })
            })
    }, [])

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
                    {name: el.date.slice(0, 10), uv: el.priceUsd}
                ))
                score++
            } else {
                arrOfAllId_Map[i] = null
            }
        }
    }

    let arrOfAllId_Map_List = arrOfAllId_Map.map((el, i) => (el && <div key={i}>
        <h1>{arrOfId[i]}↓</h1>
        <LineChart
            width={1500}
            height={400}
            data={arrOfAllId_Map[i]}
            margin={{top: 5, right: 20, left: 10, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis type="number" domain={[0, max[i]]}/>
            <Tooltip/>
            <CartesianGrid stroke="#f5f5f5"/>
            <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0}/>
            <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1}/>
        </LineChart>
    </div>))

    return <div>
        <div>Total currency: {score}</div>
        {arrOfAllId_Map_List}
    </div>
}

function App() {
    return (
        <div className='App'>
            <Weather/>
        </div>
    )
}

export default App