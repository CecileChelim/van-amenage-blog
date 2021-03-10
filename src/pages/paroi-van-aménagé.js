import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import GlobalStateProvider from "../context/provider"
import Layout from "../components/layout"
import styled from "styled-components"
import ContentWrapper from "../styles/contentWrapper"
import ArticlesParois from "../components/sections/articles-parois"

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


const ParoiPage = ({ data }) => {
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
            <h3 className="section-title">
              Parois et cloisons van / fourgon aménagé
            </h3>
            <p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Vous avez fini votre isolation OUF ! Il faut maintenant cacher
              tout ça pour que ca soit propre.
              <br />
              Sur ce sujet la plupart des aménageurs on utilisé du bois souple,
              souvent du contre plaqué ou MDF peu épais.
              <br />
              <br />
              PS : pensez à faire passez vos cables électrique quand même avant
              de cloisonner !
            </p>
          </StyledContentWrapper>
        </StyledSection>
        <StyledSection id="header">
          <StyledContentWrapper>
            <ArticlesParois />
          </StyledContentWrapper>
        </StyledSection>
      </Layout>
    </GlobalStateProvider>
  )
}

ParoiPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ParoiPage

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
  }
`
