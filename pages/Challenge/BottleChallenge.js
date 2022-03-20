import { useState } from "react";
import { Container } from "react-bootstrap";

export const BottleChallenge = () => {

    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [d, setD] = useState("");
    const [e, setE] = useState("");
    const [f, setF] = useState("");
    const [solved, setSolved] = useState("");

    return (
        <Container>
            <div className={"row"}>
                Six Vials, each with a letter inside, can you solve the puzzle?
            </div>
            <div className={"row"}>
               <div className={"col"}>
                    <label htmlFor={"a"}>
                       Vial #1: &nbsp;
                   </label>
                   <input name={"a"} id={"a"} maxLength={"1"} type={"text"} value={a} onChange={({target}) => {setA(target.value)}} />
                </div>
                <div className={"col"}>
                    <label htmlFor={"b"}>
                       Vial #2: &nbsp;
                   </label>
                   <input name={"b"} id={"b"} type={"text"} value={b} onChange={({target}) => {setB(target.value)}} />
                </div>
                <div className={"col"}>
                    <label htmlFor={"d"}>
                       Vial #3: &nbsp;
                   </label>
                   <input name={"c"} id={"c"} type={"text"} value={c} onChange={({target}) => {setC(target.value)}} />
                </div>
                <div className={"col"}>
                    <label htmlFor={"d"}>
                       Vial #4: &nbsp;
                   </label>
                   <input name={"d"} id={"d"} type={"text"} value={d} onChange={({target}) => {setD(target.value)}} />
                </div>
                <div className={"col"}>
                    <label htmlFor={"e"}>
                       Vial #5: &nbsp;
                   </label>
                   <input name={"e"} id={"e"} type={"text"} value={e} onChange={({target}) => {setE(target.value)}} />
                </div>
                <div className={"col"}>
                   <label htmlFor={"f"}>
                       Vial #6: &nbsp;
                   </label>
                   <input name={"f"} id={"f"} type={"text"} value={f} onChange={({target}) => {setF(target.value)}} />
                </div> 
            </div>
            <div className={"row card"}>
                <label>{a + b + c + d + e + f}</label>
            </div>
            <div className={"row"}>
                <button className={"btn btn-primary"} onClick={() => {
                    setSolved(a + b + c + d + e + f === "PRINCE");
                }}>Solve!</button>
            </div>
            {
                solved &&
                <div className={"row"}>
                    <a className={"success-text"} href={"/Challenge/GemChallenge"}>You Solved it!  Your next clue is in the lair of the heart of the group</a>
                </div>
            }
        </Container>
    )
}

export default BottleChallenge;