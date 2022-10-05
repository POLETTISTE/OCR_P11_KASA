const Banner = (props) => {
  const text = props.text
  const bg = props.bg

  //si texte = ''=> return h1 non
  //sinon oui

  return (
    <div className={` banner ${bg} `}>
      <h1>{text}</h1>
    </div>
  )
}

export default Banner
