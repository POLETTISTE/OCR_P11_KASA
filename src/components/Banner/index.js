const Banner = (props) => {
  const { color } = props
  console.log(color)
  return (
    <div className="banner-top">
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
