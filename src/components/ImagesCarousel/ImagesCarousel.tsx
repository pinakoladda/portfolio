import React from 'react'
import styles from './index.module.css'
import { ArrowRightFilledIcon } from '../../shared/images/ArrowRightFilledIcon'
import { ArrowLeftFilledIcon } from '../../shared/images/ArrowLeftFilledIcon'

interface ImagesCarouselProps {
  images: string[]
}

export const ImagesCarousel = ({ images }: ImagesCarouselProps) => {
  const [currentImgIndex, setCurrentImgIndex] = React.useState(0)

  const photosRef = React.useRef<HTMLDivElement>(null)

  const onNextImg = () => {
    setCurrentImgIndex((value) => {
      if (value === images.length - 1) {
        return 0
      }
      return value + 1
    })
  }

  const onBackImg = () => {
    setCurrentImgIndex((value) => {
      if (value === 0) {
        return images.length - 1
      }
      return value - 1
    })
  }

  React.useEffect(() => {
    const container = photosRef?.current
    const selectedImg = container?.querySelector("img[data-selected='true']")
    const selectedImgPosition = selectedImg?.getBoundingClientRect().left

    container?.scrollTo({
      left: selectedImgPosition,
      behavior: 'smooth',
    })
  }, [currentImgIndex])

  return (
    <section className={styles.carousel}>
      <div className={styles.mainImgContainer}>
        <img
          className={styles.imgMain}
          src={images[currentImgIndex]}
          alt="screenshot of pet-care project"
        />
        <span className={styles.imgArrowRight} onClick={onNextImg}>
          <ArrowRightFilledIcon />
        </span>
        <span className={styles.imgArrowLeft} onClick={onBackImg}>
          <ArrowLeftFilledIcon />
        </span>
      </div>
      <div ref={photosRef} className={styles.imagesContainer}>
        {images.map((img, index) => {
          return (
            <img
              data-selected={index === currentImgIndex}
              key={index}
              className={styles.imgSecondary}
              src={img}
              alt="dog"
              onClick={() => setCurrentImgIndex(index)}
            />
          )
        })}
      </div>
    </section>
  )
}
