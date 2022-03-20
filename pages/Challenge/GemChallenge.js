import { useState } from "react"
import { Container } from "react-bootstrap"

export const GemChallenge = () => {

    const [eggCount, setEggCount] = useState(0);
    const [foundText, setFoundText] = useState("");

    const setFoundTextFound = () => {
        setFoundText("You did it!  That's all of them, the fairy will now escort you to your destination.")
    }

    const setFoundTextNotFound = () => {
        setFoundText(`You still have ${ 7 - eggCount } remaining!`)
    }

    const handleButtonClick = () => {
        if (eggCount >= 7) {
            setFoundTextFound();
        } else {
            setFoundTextNotFound();
        }
    }

    return (
        <Container>
            <div className={"row"}>
                <p>
                    Hidden in the lair of the Kitty there are chickens who shit gems, fortunately for you the eggs are colorful so you don't have to guess, go find the gems and report back, tell me how many you've found and I'll let you know when you've found them all.
                </p>
                <input value={eggCount} className={"form-control"} type={"number"} onChange={({target}) => setEggCount(target.value)}/>
                <button className={"btn btn-primary"} onClick={handleButtonClick}>Have I found all of the gems?</button>
            </div>
            <div className={"row"}>
                <p>{foundText}</p>
            </div>
        </Container>
    )
}

export default GemChallenge;