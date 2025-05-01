import { useState } from 'react';
import './guess.css'
import Result from './result';
function Guess() {
    const [guessdata, setGuessdata] = useState('')
    const secretnumber = Math.floor(Math.random() * 10) + 1;
    console.log(secretnumber)

    function handlechange(e) {
        console.log('e val', e.target.value)
        setGuessdata(() => e.target.value)
        return;
    }
    console.log(guessdata)
    return (
            <div className='parentDiv'>
                <div className='container'>
                    <label>Guess the number between 1 to 10</label>
                    <input type='text' name="guessno" onChange={handlechange} maxLength={1} />
                    <Result secretnumber={secretnumber} guess={guessdata} />
                </div>
            </div>
    )
}
export default Guess;