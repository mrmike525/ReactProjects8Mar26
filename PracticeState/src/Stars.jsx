import { useState, useEffect } from "react"
function Stars() {
    const StarTemplate = [{character: "✨", Element: "span", }]
    const [data, setData] = useState(StarTemplate)
    const addStars = () => setData((prev)=>[...prev,{character: "*"}])
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            addStars();
            console.log(data)
        }, 2500);
        return () => clearInterval(intervalId)
    }, [])
    
    
    return (
        <>
            {data.map(({ character }, idx) =>
                <span key={idx}>{character}</span>
            )}
        </>
            
            
    )
}

export default Stars