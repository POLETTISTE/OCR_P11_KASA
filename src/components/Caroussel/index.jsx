import arrowPrevious from '../../assets/arrow-previous.png'
import arrowNext from '../../assets/arrow-next.png'
import { Fragment, useState } from 'react'

const Caroussel = (props) => {
  const images = props.images
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePreviousImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }
  const handleNextImage = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <Fragment>
      <div className="caroussel">
        <img
          src={arrowPrevious}
          alt="arrow"
          className="arrow-previous"
          onClick={handlePreviousImage}
        />

        <img
          src={images[currentIndex]}
          alt="appartement en location"
          className="logement-image"
        />

        <img
          src={arrowNext}
          alt="arrow"
          className="arrow-next"
          onClick={handleNextImage}
        />
      </div>
      <p className="caroussel-count">{`${currentIndex + 1} / ${
        images.length
      }`}</p>
    </Fragment>
  )
}

export default Caroussel
