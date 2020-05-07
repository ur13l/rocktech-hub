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

  @keyframes ticker {
   from {
      /* left: 0; */
      transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
      /* left: -197800px; */
    }
  }
  

  #indicators {
    margin-bottom: 60px;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    height: 30px;
    width: 100%;
    overflow: hidden;
    padding-left: 100%;
    box-sizing: content-box;
    outline: 1px solid transparent;
  }

  .indicators-inner {
    display: inline-block;
    margin: 0;
    height: 30px;
    padding-top: 2px;
    box-sizing: content-box;
    white-space: nowrap;
    padding-right: 100%;
    position: absolute;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: 1700s;
    animation-duration: 1700s;
    animation-play-state: paused;
    outline: 1px solid transparent;
  }
  .quote {
    display: inline-block;
    height: 30px;
    align-content: center;
    margin-right: 24px;
    outline: 1px solid transparent;
  }

  .positive {
    color: rgb(56,216,199);
  }

  .negative {
    color: red;
  }

  span {
    margin: auto 0;
    align-self: center;
    font-weight: 700;
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
        }, () => {
          let elem = document.getElementsByClassName("indicators-inner")[0]
          setTimeout(()=> {
            elem.style="animation-play-state: running"
          }, 100)
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
                {quote.from === "yahoo" ?
                  <>
                    <span>${
                      typeof quote.regularMarketPrice === "object" ?
                        quote.regularMarketPrice.raw.toLocaleString(navigator.language, { minimumFractionDigits: 2 }) :
                        quote.regularMarketPrice.toLocaleString(navigator.language, { minimumFractionDigits: 2 })
                    }</span>
                    <span
                      className={
                        typeof quote.regularMarketChange === "object" ?
                          (quote.regularMarketChange.raw >= 0 ? "positive" : "negative") :
                          (quote.regularMarketChange >= 0 ? "positive" : "negative")
                      }
                    >
                      {"  " +
                      (
                        typeof quote.regularMarketChange === "object" ?
                          (quote.regularMarketChange.raw >= 0 ? "+" : "-") :
                          (quote.regularMarketChange >= 0 ? "+" : "-")
                      ) +
                      "$" +
                      Math.abs(typeof quote.regularMarketChange === "object" ? quote.regularMarketChange.raw : quote.regularMarketChange)
                        .toLocaleString(navigator.language, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        }) + " (" +
                      Math.abs(typeof quote.regularMarketChangePercent === "object" ? quote.regularMarketChangePercent.raw * 100 :
                        quote.regularMarketChangePercent * 100)
                        .toLocaleString(navigator.language, { maximumFractionDigits: 2 }) + "%)"

                      }
                    </span>
                  </> :
                  <>
                    <span className={"positive"}>
                      {" (" +
                      Math.abs(quote.regularMarketChangePercent * 100)
                        .toLocaleString(navigator.language, { maximumFractionDigits: 2 }) + "%)"}
                    </span>
                  </>

                }
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
