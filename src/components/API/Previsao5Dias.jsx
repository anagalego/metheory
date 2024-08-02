import { useEffect, useState } from "react"
import Card from "./Card"
export default function Previsao5Dias() {
    const [previsao5Dias, setPrevisao5Dias] = useState({})
    //definir local atual - Setúbal por defeito
    const [globalIdLocal, setGlobalIdLocal] = useState("1151200")
    const [districts, setDistricts] = useState("")
    const [searched, setSearched] = useState(false)

    const handleSearch = (district) => {
        if(district != ""){
            setSearched(true)
            fetch(`https://api.ipma.pt/open-data/distrits-islands.json`)
            .then(res => res.json())
            .then((json) => {
                const results = json.data.filter(
                    (l) => {
                        return l && l.local && l.local.toLowerCase().startsWith(district)
                    }
                )
                setDistricts(results)
                setGlobalIdLocal(results[0].globalIdLocal)
            })
        } else {
            if (searched) {
                setDistricts([])
            }
        }
    }

    useEffect(function() {
        fetch(`https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`)
        .then(res => res.json())
        .then(data => setPrevisao5Dias(data.data))  
    }, [globalIdLocal])  

    return (
        <div className="cards">
            <div className="card search">
                <input
                    type="text"
                    placeholder="Onde?"
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <ul>
                    {districts.length > 0 && (
                        districts.map((d, index) => (
                            <li>{d.local}</li>
                        ))
                    )}
                </ul>
            </div>
            {previsao5Dias.length > 0 && (
                previsao5Dias.map((p, index) => (
                <Card
                    key={index}
                    value={p}
                />
                ))
            )}
        </div>     
    )
}