import React from 'react'
import '../FlipCards/flipcard.css'

const Flipcards = () => {
  return (
    <div>
        <div className="d-flex justify-content-between align-items-center w-100">
    <div className="col-lg-2">
    <div class="wrapper" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="card-front">
            <div class="logo">
              <h2 class="initial">D</h2>
            </div>
            <div class="oval"></div>
          </div>
          <div class="card-back">
            <h1 class="name">Daniel Destefanis</h1>
            <h3 class="h3 about">Front End Development & Web Design</h3>
            <h3 class="h3 contact-info">
              <a href="http://www.danielrd.com">Danielrd.com</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-2">
    <div class="wrapper" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="card-front">
            <div class="logo">
              <h2 class="initial">D</h2>
            </div>
            <div class="oval"></div>
          </div>
          <div class="card-back">
            <h1 class="name">Daniel Destefanis</h1>
            <h3 class="h3 about">Front End Development & Web Design</h3>
            <h3 class="h3 contact-info">
              <a href="http://www.danielrd.com">Danielrd.com</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-2">
    <div class="wrapper" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="card-front">
            <div class="logo">
              <h2 class="initial">D</h2>
            </div>
            <div class="oval"></div>
          </div>
          <div class="card-back">
            <h1 class="name">Daniel Destefanis</h1>
            <h3 class="h3 about">Front End Development & Web Design</h3>
            <h3 class="h3 contact-info">
              <a href="http://www.danielrd.com">Danielrd.com</a>
            </h3>
          </div>
        </div>
    </div>
    </div>
    <div className="col-lg-2">
    <div class="wrapper" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="card-front">
            <div class="logo">
              <h2 class="initial">D</h2>
            </div>
            <div class="oval"></div>
          </div>
          <div class="card-back">
            <h1 class="name">Daniel Destefanis</h1>
            <h3 class="h3 about">Front End Development & Web Design</h3>
            <h3 class="h3 contact-info">
              <a href="http://www.danielrd.com">Danielrd.com</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Flipcards