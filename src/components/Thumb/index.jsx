//mapper les cards a l'intérieur

const Thumb = (props) => {
  const text = props.text
  const bg = props.bg
  return (
    <div className={` thumb  `}>
      <p>{text}</p>
    </div>
  )
}

export default Thumb
