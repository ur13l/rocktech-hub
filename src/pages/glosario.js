import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import PageLayout from "../components/page-layout"
import styled from "styled-components"
import SideNav from "../components/sidenav"
import TextTruncate from "react-text-truncate"
import htmlToText from "html-to-text"

const LayoutWrapper = styled.div`
  .alpha {
    padding: 0px 9px;
    font-weight: 800;
    color: #8c8c8c;
    cursor: pointer;
  }

  .alpha-disabled {
    color: #d0d0d0;
    cursor: inherit;
  }

  .alpha-selected {
    color: #000;
  }

  /**
    Input styling
   */
  .large-input {
    background: none;
    border: none;
    border-bottom: 2px solid #fff;
    color: white;
    font-size: 30px;
    transition: width 0.3s;
    padding-right: 48px;
    width: 0%;
    height: 0%;
    float: right;
    box-sizing: border-box;
  }

  .large-input:focus {
    outline: 0;
  }

  .closable {
    position: relative;
    display: inline-block;
    width: 100%;
    font-size: 40px !important;
  }

  .input-full-width {
    width: 100% !important;
    height: 45px;
  }

  .closable_close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0px 0px 27px 0px;
    cursor: pointer;
    color: #fff;
  }

  /** Glosary display */
  .glosary-display {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 9px;
  }

  .glosary-item {
    padding: 33px 0;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 768px) {
    .glosary-display {
      grid-template-columns: 100%;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    .glosary-display {
      grid-template-columns: 100%;
    }
  }
`

class Glosario extends Component {
  constructor() {
    super()
    this.state = {
      displayedEntries: [],
    }
  }

  componentDidMount() {
    const glosary = this.props.data.glosary.edges
    this.onClickLetter("", "A", glosary)
  }

  alphabetHTML(entries) {
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "Ñ",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Z",
    ]
    let div = []
    alphabet.forEach((letter, i) => {
      let selectedClass = ""
      let disabledClass = ""

      // A is the selected letter by default
      if (letter === "A") {
        selectedClass = " alpha-selected"
      }

      // Every letter is verified to check if exists content starting with that
      let index = entries.findIndex(entry =>
        entry.node.title.startsWith(letter)
      )
      if (index === -1) {
        disabledClass = " alpha-disabled"
      }

      div.push(
        <span
          key={i}
          className={"alpha" + selectedClass + disabledClass}
          onClick={e => {
            this.onClickLetter(disabledClass, letter, entries, e.target)
          }}
        >
          {letter}
        </span>
      )
    })
    return div
  }

  /**
   * Executed when a letter is clicked, it changes the entries displayed for those starting
   * with the selected letter.
   * @param {string} disabled
   * @param {string} letter
   * @param {Array} glosary
   * @param {any} target
   */
  onClickLetter(disabled, letter, glosary, target) {
    if (target) {
      let activeItems = document.getElementsByClassName("alpha-selected")
      if (activeItems) {
        for (let i = 0; i < activeItems.length; i++) {
          activeItems[i].classList.remove("alpha-selected")
        }
      }
      console.log(target)

      target.classList.add("alpha-selected")
    }
    if (disabled === "") {
      const newList = glosary.filter(entry =>
        entry.node.title.startsWith(letter)
      )
      this.setState({
        displayedEntries: newList,
      })
    }
  }

  render() {
    return (
      <LayoutWrapper>
        <PageLayout
          title="Glosario"
          description="m. Catálogo de palabras de una misma disciplina que aparecen explicadas."
          descriptionDef="Del lat. glossarium."
          location="/glosario"
        >
          <div className="content-item1">
            <div className="alphabet hide-on-med-and-down">
              {this.alphabetHTML(this.props.data.glosary.edges)}
            </div>

            <div className="glosary-display">
              {this.state.displayedEntries.map(entry => (
                <div className="glosary-item" key={entry.node.id}>
                  <h4>{entry.node.title + ":"}</h4>
                  <TextTruncate
                    line={4}
                    element="span"
                    truncateText=""
                    text={htmlToText.fromString(entry.node.content)}
                    textTruncateChild={
                      <a
                        className="truncate-text"
                        href={"/glosario/" + entry.node.slug}
                      >
                        Ver más...
                      </a>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="content-item2">
            <SideNav />
          </div>
          <div className="content-item3"></div>
        </PageLayout>
      </LayoutWrapper>
    )
  }
}

export default Glosario

Glosario.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export const postsQuery = graphql`
  query {
    glosary: allWordpressPost(
      sort: { fields: [title], order: ASC }
      filter: { categories: { elemMatch: { name: { eq: "glosario" } } } }
    ) {
      edges {
        node {
          id
          title
          content
          excerpt
          slug
          date
          categories {
            id
            name
          }
        }
      }
    }
  }
`
