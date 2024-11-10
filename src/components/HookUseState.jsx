import {useState} from 'react'

const HookUseState = () => {
    // 1 - useState
    let username = 'Daniel'

    const [name, setName] = useState("Robert")
    const [age, setAge] = useState(18)

    const changeNames = () => {
        username = 'New User'
        setName("Daniel Estevão")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age)
    }


    return (<>
        <hr />
        <h2>useState</h2>
        <p>Variavel: {username}</p>
        <p>useState: {name}</p>

        <button onClick={changeNames}>CHANGE NAMES</button>

        <form onSubmit={handleSubmit} >
            <input type="text"
            value={age}
            onChange={e => setAge(e.target.value)} />

            <input type="submit" value="enviar" />
        </form>

        <p>Você tem {age} anos</p>

        <hr />

    </>)
}

export default HookUseState