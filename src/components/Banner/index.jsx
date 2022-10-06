const Banner = (props) => {
  const text = props.text
  const bg = props.bg

  return (
    <div className={` banner ${bg} `}>
      <span>{text}</span>
    </div>
  )
}

export default Banner
