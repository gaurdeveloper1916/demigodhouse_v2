const SwiperButtons = ({prev, next, swiperEl}) => {
    return (
    <>
        <button className="button button-prev ico"
          id={prev}
          onClick={() => {
            swiperEl.current.swiper.slidePrev();
          }}
        >
          <i className="fa-solid fa-angle-left" style={{color: "#ffffff",}}></i>
        </button>
        <button
          className="button"
          id={next}
          onClick={() => {
            swiperEl.current.swiper.slideNext();
          }}
        >
          <i className="fa-solid fa-angle-right" style={{color: "#ffffff",}}></i>
        </button>
    </>
    )
  }
  export default SwiperButtons;