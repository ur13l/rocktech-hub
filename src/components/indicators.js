import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import "../styles/global.css"
import fetch from "cross-fetch"

/**
 * HeaderWrapper element, used to set style to a component.
 */
const IndicatorsWrapper = styled.div`
  background: #171717;
  height: 60px;
  width: 100vw;
  color: white;
  overflow: hidden;

  div {
    hr {
      border-top: 1px solid white;
    }
  }

  .short-name {
    font-weight: 700;
  }

  @-webkit-keyframes ticker {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes ticker {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  #indicators {
    margin-bottom: 60px;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    height: 30px;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    padding-left: 100%;
    box-sizing: content-box;
  }

  .indicators-inner {
    display: inline-block;
    margin: 0;
    height: 30px;
    padding-top: 2px;
    box-sizing: content-box;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: 1700s;
    animation-duration: 1700s;
  }
  .quote {
    display: inline-block;
    height: 30px;
    align-content: center;
    margin-right: 24px;
  }

  .positive {
    color: green;
  }

  .negative {
    color: red;
  }

  span {
    margin: auto 0;
    align-self: center;
  }
`

class Indicators extends Component {
  constructor() {
    super()
    this.state = { indicators: [] }
  }

  componentDidMount() {
    this.collectIndicators()
  }

  collectIndicators = () => {
    fetch("https://s3.us-east-2.amazonaws.com/hub.rocktech/prices.json")
    .then(response => response.json())
    .then(json => {
      let array = []
      const keys = Object.keys(json);
      for(let i = 20 ; i >= 0 ; i--) {
        for(const key of keys) {
          array.push(json[key]['price'])
        }
      }


     this.setState({
        indicators: array
     }) 
    });
    return [];
  }

  render() {
    return (
      <IndicatorsWrapper>
        <div id="indicators">
          <div className="indicators-inner">
            {this.state.indicators.map((quote, index) => (
              <div className="quote" key={quote.symbol + "_" +index}>
                <span className="short-name">{quote.shortName}: </span>
                <span>${quote.regularMarketPrice.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</span>
                <span
                  className={
                    quote.regularMarketChange >= 0 ? "positive" : "negative"
                  }
                >
                  {"  " +
                    (quote.regularMarketChange >= 0 ? "+" : "-") +
                    "" +
                    Math.abs(quote.regularMarketChange).toLocaleString(navigator.language, { minimumFractionDigits: 2 })}
                </span>
              </div>
            ))}
          </div>
        </div>
      </IndicatorsWrapper>
    )
  }
}
Indicators.propTypes = {
  location: PropTypes.string,
}

Indicators.defaultProps = {
  location: `/`,
}

export default Indicators
