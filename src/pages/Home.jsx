import "../App.css"
import seekinghumankindness from "../assets/seekinghumankindness.jpg"

function Home() {
    return (
        <div>
            <h1>What is Night Nest?</h1>
            <img style={styles} src={seekinghumankindness} alt="Logo"/>
            <div style={{width: '50%', margin: 'auto'}}>
                <text>
                Living in LA, we often see unhoused people struggling to find safe areas to stay. With situations changing often, it is difficult to find a comprehensive and reliable list of places that allow overnight parking. 
                </text>
            </div>
        </div>
    
    
    )
}

export default Home

const styles = {
    width: "50%",
}