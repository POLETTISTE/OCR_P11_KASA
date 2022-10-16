const Banner = (props) => {
  const text = props.text
  const bg = props.bg

  return (
    <div className={` banner ${bg} `}>
      <div>{text}</div>
    </div>
  )
}

export default Banner
