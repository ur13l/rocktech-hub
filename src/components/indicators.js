import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
var yf = require("yahoo-finance")

/**
 * HeaderWrapper element, used to set style to a component.
 */
const IndicatorsWrapper = styled.div`
  background: #171717;
  height: 60px;
  color: white;

  div {
    hr {
      border-top: 1px solid white;
    }
  }

  .short-name {
    font-weight: 800;
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
    -webkit-animation-duration: 45s;
    animation-duration: 45s;
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

/**
 * Indicators component
 * @param {string} location
 */
const updateIndicators = () => {
  yf.quote({ symbol: "MEX-TIIE28.MX", modules: ["price"] }, (err, quotes) => {
    localStorage.tiie = JSON.stringify(quotes.price)
  })
  yf.quote({ symbol: "MEX-CETES-I.MX", modules: ["price"] }, (err, quotes) => {
    localStorage.cetes = JSON.stringify(quotes.price)
  })

  yf.quote({ symbol: "USDMXN=X", modules: ["price"] }, (err, quotes) => {
    localStorage.usdmxn = JSON.stringify(quotes.price)
  })
  yf.quote({ symbol: "^MXX", modules: ["price"] }, (err, quotes) => {
    localStorage.ipc = JSON.stringify(quotes.price)
  })

  yf.quote({ symbol: "^NYA", modules: ["price"] }, (err, quotes) => {
    localStorage.nyse = JSON.stringify(quotes.price)
  })

  yf.quote({ symbol: "^IXIC", modules: ["price"] }, (err, quotes) => {
    localStorage.nasdaq = JSON.stringify(quotes.price)
  })

  yf.quote({ symbol: "EWW", modules: ["price"] }, (err, quotes) => {
    localStorage.eww = JSON.stringify(quotes.price)
  })

  yf.quote({ symbol: "SPY", modules: ["price"] }, (err, quotes) => {
    localStorage.spy = JSON.stringify(quotes.price)
  })

  yf.quote({ symbol: "BTC-USD", modules: ["price"] }, (err, quotes) => {
    localStorage.btcusd = JSON.stringify(quotes.price)
  })

  yf.quote({ symbol: "XRP-USD", modules: ["price"] }, (err, quotes) => {
    localStorage.xrpusd = JSON.stringify(quotes.price)
  })

  yf.quote({ symbol: "ETH-USD", modules: ["price"] }, (err, quotes) => {
    localStorage.ethusd = JSON.stringify(quotes.price)
  })
}

const collectIndicators = () => {
  let ind = []
  if (localStorage.cetes) ind.push(JSON.parse(localStorage.cetes))
  if (localStorage.tiie) ind.push(JSON.parse(localStorage.tiie))
  if (localStorage.usdmxn) ind.push(JSON.parse(localStorage.usdmxn))
  if (localStorage.ipc) ind.push(JSON.parse(localStorage.ipc))
  if (localStorage.nyse) ind.push(JSON.parse(localStorage.nyse))
  if (localStorage.nasdaq) ind.push(JSON.parse(localStorage.nasdaq))
  if (localStorage.eww) ind.push(JSON.parse(localStorage.eww))
  if (localStorage.spy) ind.push(JSON.parse(localStorage.spy))
  if (localStorage.btcusd) ind.push(JSON.parse(localStorage.btcusd))
  if (localStorage.xrpusd) ind.push(JSON.parse(localStorage.xrpusd))
  if (localStorage.ethusd) ind.push(JSON.parse(localStorage.ethusd))
  return ind
}

const Indicators = ({ location }) => {
  updateIndicators()
  const indicators = collectIndicators()

  return (
    <IndicatorsWrapper>
      <div className="container" id="indicators">
        <div className="indicators-inner">
          {indicators.map(quote => (
            <div className="quote" key={quote.symbol}>
              <span className="short-name">{quote.shortName}: </span>
              <span>${quote.regularMarketPrice.toFixed(2)}</span>
              <span
                className={
                  quote.regularMarketChange >= 0 ? "positive" : "negative"
                }
              >
                {"  " +(quote.regularMarketChange >= 0 ? "+" : "-") + "" + Math.abs(quote.regularMarketChange).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </IndicatorsWrapper>
  )
}

Indicators.propTypes = {
  location: PropTypes.string,
}

Indicators.defaultProps = {
  location: `/`,
}

export default Indicators
