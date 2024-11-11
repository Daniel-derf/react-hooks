import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {
  // 1 - useEffect, sem dependencias
	useEffect(()=>{
		console.log('Estou sendo executado!')
	})

	const [number, setNumber] = useState(1)

	const changeSomething = () => {
		setNumber(number + 1)
	}

	// array de dependencias vazio
	useEffect(()=>{
		console.log("Serei executado apenas uma vez!")
	}, [])

	// item no array de deps
	const [anotherNumber, setAnotherNumber] = useState(0)

	useEffect(()=>{
		console.log("Sou executado apenas quando o anotherNumber muda!")
	}, [anotherNumber])

	// cleanup useEffect
	useEffect(()=>{
		const timer = setTimeout(()=>{
			console.log("Hello World!")
		}, 2000);

		return () => clearTimeout(timer)
	}, [anotherNumber])


  return (
    <div>
			<h2>useEffect</h2>

			<p>Number: {number}</p>
			<button onClick={changeSomething} >Executar</button>
			<p>Another Number: {anotherNumber}</p>
			<button onClick={()=>setAnotherNumber(anotherNumber+1)}>Mudar another number</button>
			<hr />
		</div>
  )
}

export default HookUseEffect