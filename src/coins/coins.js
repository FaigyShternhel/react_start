import React, { useEffect, useState } from 'react'

export default function Coins() {
    const [counter, setCounter] = useState(0);
    const [rnd, setRnd] = useState(0);
    const [result, setResult] = useState(0);
    const [img, setImg] = useState(0);

    useEffect(() => {
        setCounter(5);
        setImg(`/dice_images/pexels-pixabay-208147.jpg`);
    }, [])
    function rollDice() {
        if (counter == 0) {
            alert(" אין מספיק מטבעות, לך תביא כסף");
            setCounter(5);
            return;

        }
        setCounter(counter - 1);
        let random = Math.random() * 6;
        random = Math.ceil(random);
        setRnd(random);
        setImg(`/dice_images/dice_images/dice${rnd}.jpg`);

        if (random == 5 || random == 6) {
            setCounter(counter + 2);
            setResult("win");

        }
        else {
            setResult("less");           
        }

    }
    return (
        <div>
            <h2 >the result of the dice: <span>{rnd}</span></h2>
            <h2 >coins: <span>{counter}</span></h2>
            <h2 className={result=="win"?"text-success":"text-danger"}>{result}</h2>
            <img  src={img} alt="dice" width="100" />
            <button onClick={rollDice}>roll</button>
        </div>
    )

}