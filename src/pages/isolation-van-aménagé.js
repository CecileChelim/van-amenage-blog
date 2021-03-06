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
    text-align: center;
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

const ListMateriau = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  > li {
    padding: 1rem;
    border: 2px solid black;
    border-radius: 0.5rem;
    margin-right: 1rem;
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
            <p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Il n'y a pas 100 milliards de matériaux pour isoler son fourgon.
              La plupart des aménageurs ont utilisés :
              <ListMateriau>
                <li><b>Le liège</b> : en panneau ou projeté, pour appliquer directement sur la tôle de votre camion. </li>
                <li>
                  <b>La laine</b> : de bois, de mouton en rouleau, en rouleau aiguilletée ou en vrac
                </li>
                <li>
                  <b>L'armaflex</b> : l'isolant avec une très grand résistance thermique qui intègre même un pare-vapeur
                </li>

              </ListMateriau>
              <br />
              Le choix d'un de ces matériaux résulte de plusieurs questions
              comme la facilité de pose, la résistance au feu, la force
              d'isolation thermique ou phonique du matériau, et évidemment le
              budget !
              <br />
            </p>
          </StyledContentWrapper>
        </StyledSection>
        <StyledSection id="header">
          <StyledContentWrapper>
            <ArticlesIsolation />
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
  }
`
