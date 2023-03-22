import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onRightClick = () => {
    const {reviewsList} = this.props
    this.setState(prevState => {
      if (prevState.index < reviewsList.length) {
        return {index: prevState.index + 1}
      }
      return {index: prevState.index}
    })
  }

  onLeftClick = () => {
    this.setState(prevState => {
      if (prevState.index >= 0) {
        return {index: prevState.index - 1}
      }
      return {index: prevState.index}
    })
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div>
        <div>
          <h1>Reviews</h1>
          <div>
            <button type="button" onClick={this.onLeftClick} className="left">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                onClick={this.onLeftClick}
                className="left"
              />
            </button>

            <div>
              <img src={imgUrl} alt={username} />
              <p>{username}</p>
              <p>{companyName}</p>
              <p>{description}</p>
            </div>
            <button type="button" onClick={this.onRightClick} className="right">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                onClick={this.onRightClick}
                className="right"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
