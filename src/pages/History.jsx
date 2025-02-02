import { useState } from 'react';

function History() {
    const [like, setLike] = useState(false);


    return (
        <>
        <h1>history</h1>
        <button onClick={() => setLike( (prevState) => !prevState)}>Like: { like ? "❤️" : "♡" }</button>
        </>
    )
}
export default History