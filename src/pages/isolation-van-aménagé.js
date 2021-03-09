import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import GlobalStateProvider from "../context/provider"
import Layout from "../components/layout"
import styled from "styled-components"
import ContentWrapper from "../styles/contentWrapper"
import ArticlesIsolation from "../components/sections/articles-isolation"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: #fff;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0rem;
    text-align:center;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-bottom: 0rem;
    }
    .greetings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .emoji {
      margin-left: 0.75rem;
      width: 2.2rem;
      height: 2.2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 0;
      }
      span {
        font-size: 2rem;
      }
    }
    .subtitle {
      margin-top: -0.75rem;
      font-size: 1.2rem !important;
    }
    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
  }
`


const IsolationPage = ({ data }) => {
  const { frontmatter } = data.index.edges[0].node
  const { seoTitle, useSeoTitleSuffix, useSplashScreen } = frontmatter

  const globalState = {
    // if useSplashScreen=false, we skip the intro by setting isIntroDone=true
    isIntroDone: useSplashScreen ? false : true,
    // darkMode is initially disabled, a hook inside the Layout component
    // will check the user's preferences and switch to dark mode if needed
    darkMode: false,
  }




  return (

    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <StyledSection id="header">
          <StyledContentWrapper>
            <h3 className="section-title">Isolation van / fourgon aménagé</h3>
            <p>Il n'y a pas 100 millairds de matériaux pour isoler son fourgon. La plupart des aménageurs ont utilisés :
              <ul>
                <li>Le bois : panneau de laine de bois, fibre de bois en panneau</li>
                <li>Laine de mouton : rouleau, rouleau aiguilletée ou en vrac</li>
                <li>Le liège : en panneau ou projeté </li>
              </ul>
              <br/>
              Le choix d'un de ces matériaux résulte de plusieurs questions comme la facilité de pose, la résistance au feu, la force d'isolation thermique ou phonique du matériau, et évidemment le budget !
            <br/>
            </p>
          </StyledContentWrapper>
        </StyledSection>
        <StyledSection id="header">
          <StyledContentWrapper>
            <ArticlesIsolation/>
          </StyledContentWrapper>
        </StyledSection>
      </Layout>
    </GlobalStateProvider>



  )
}

IsolationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IsolationPage

export const pageQuery = graphql`
  {
    index: allMdx(filter: { fileAbsolutePath: { regex: "/index/index/" } }) {
      edges {
        node {
          frontmatter {
            seoTitle
            useSeoTitleSuffix
            useSplashScreen
          }
        }
      }
    }
    hero: allMdx(filter: { fileAbsolutePath: { regex: "/index/hero/" } }) {
      edges {
        node {
          body
          frontmatter {
            greetings
            title
            subtitlePrefix
            subtitle
            icon {
              childImageSharp {
                fluid(maxWidth: 60, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    interests: allMdx(
      filter: { fileAbsolutePath: { regex: "/index/interests/" } }
    ) {
      edges {
        node {
          exports {
            shownItems
            interests {
              name
              icon {
                childImageSharp {
                  fixed(width: 20, height: 20, quality: 90) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          frontmatter {
            title
          }
        }
      }
    }
    about: allMdx(filter: { fileAbsolutePath: { regex: "/index/about/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    projects: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/index/projects/" }
        frontmatter: { visible: { eq: true } }
      }
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            category
            emoji
            external
            github
            screenshot {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            position
            buttonVisible
            buttonUrl
            buttonText
          }
        }
      }
    }
    contact: allMdx(
      filter: { fileAbsolutePath: { regex: "/index/contact/" } }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            name
            email
            profileImage {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
