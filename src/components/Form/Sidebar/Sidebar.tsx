import { useEffect, useState } from "react"

export const Sidebar = () => {
  const [img, setImg] = useState<string>("")
  const [value, setValue] = useState<number>(0)

  useEffect(() => {
    console.log("Sidebar foi montado")
    setImg(
      "https://embratur.com.br/wp-content/uploads/2022/07/Embratur-Brasil-ultrapassa-marca-de-1-milhao-de-turistas-estrangeiros-recebidos-pela-primeira-vez-desde-2020-1.png"
    )
  }, [])

  useEffect(() => {
    console.log("Valor foi alterado", value)
  }, [value]) // array de dependencias

  const handleClick = () => {
    setValue(value + 1)
  }
  return (
    <div>
      <h2>Sidebar</h2>
      <img src={img} alt="" />
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}
