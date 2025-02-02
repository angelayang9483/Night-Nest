import React, { useState } from 'react';

function History() {
    const [like, setLike] = useState(false);


    return (
        <>
        <section id="history">
            <h1>history</h1>
        <button onClick={() => setLike( (prevState) => !prevState)}>Like: { like ? "❤️" : "♡" }</button>
        </section>
        </>
    )
}

export default History