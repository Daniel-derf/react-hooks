import {useState} from 'react'

const HookUseState = () => {
    // 1 - useState
    let username = 'Daniel'

    const [name, setName] = useState("Robert")

    const changeNames = () => {
        username = 'New User'
        setName("Daniel Estevão")
    }


    return (<>
        <h2>useState</h2>
        <p>Variavel: {username}</p>
        <p>useState: {name}</p>

        <button onClick={changeNames}>CHANGE NAMES</button>

    </>)
}

export default HookUseState