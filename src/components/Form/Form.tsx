import { ChangeEvent, useState } from "react"

export const Form = () => {
  // Estado interno de um componente
  // useState (Hooks)
  // estado (variável)
  // setEstado (função que atualiza o estado)
  const [nome, setNome] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleClick = () => {
    console.log("nome", nome)
    console.log("email", email)
    console.log("password ", password)
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value)
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleShowPassword = () => {
    // setShowPassword(showPassword === true ? false : true)
    setShowPassword(!showPassword)
  }

  return (
    <>
      <div>
        <label htmlFor="name">nome</label>
        <input id="name" onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input id="email" onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">senha</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          onChange={handlePasswordChange}
        />
        <button type="button" onClick={handleShowPassword}>
          {showPassword ? "Esconder senha" : "Mostrar senha"}
        </button>
      </div>

      <button onClick={handleClick}>Salvar</button>
    </>
  )
}
