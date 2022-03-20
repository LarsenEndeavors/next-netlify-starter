import { Container } from "react-bootstrap";
import { useState } from 'react';

export const ShaftChallenge = () => {

    const [count, setCount] = useState(0);
    const [password, setPassword] = useState("");

    const validate = (value) => {
        return value === "I love you";
    }

    return (
        <Container>
            <div className={"row"}>
                Your fairy awaits, an old house rests on a lake where monsters have taken up residence.  Find your fairy for she will guide you, but be warned, she's a LOUD ONE
            </div>
            <div className={"row"}>
                <button className={"btn btn-primary"} onClick={() => {if (count < 1 ) setCount(1)}}>I have arrived!</button>
            </div>
            {
                count > 0 &&
                <>
                <div className={"row"}>
                    The fairy will guide you to your chosen weapon, slay the beast from a distance, then gather the scrolls and enter the password (First letter capital, the rest lower case with spaces, no period).
                </div>
                <div className={"row"}>
                    <input type={"text"} value={password} onChange={({target}) => {setPassword(target.value)}}/>
                </div>
                <div className={"row"}>
                    <button className={"btn btn-primary"} onClick={() => {if (validate(password)) { setCount(2) } }}>Solve!</button>
                </div>
                </>
                
            }
            {
                count > 1 && 
                <div className={"row"}>
                    <a className={"success-text"} href={"/Challenge/BottleChallenge"}>
                        Travel to the den of tinctures and salves, there you will find your next trial.
                    </a>
                </div>
            }

        </Container>
    )
}

export default ShaftChallenge;