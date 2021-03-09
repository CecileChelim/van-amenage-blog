import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import SkeletonLoader from "tiny-skeleton-loader-react"
import { motion, useAnimation } from "framer-motion"

import Context from "../../context"
import ContentWrapper from "../../styles/contentWrapper"
import Underlining from "../../styles/underlining"
import { parseDate } from "../../utils"
import { articlesIsolation, shownArticles } from "../../../config"
// import { rssFeed, shownArticles } from "../../../config"
import { lightTheme, darkTheme } from "../../styles/theme"
import Img from "gatsby-image"

const StyledSection = motion.custom(styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`)

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    padding-right: 0;
    padding-left: 0;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
    .articles {
      display: flex;
      justify-content: center;
      flex-direction: column;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      margin: -2rem 0 0 0;
      padding: 0 2rem;
      &::-webkit-scrollbar {
        display: none;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 0 1rem;
      }
      /* Show scrollbar if desktop and wrapper width > viewport width */
      @media (hover: hover) {
        scrollbar-color: ${({ theme }) => theme.colors.scrollBar} transparent; // Firefox only
        &::-webkit-scrollbar {
          display: block;
          -webkit-appearance: none;
        }

        &::-webkit-scrollbar:horizontal {
          height: 0.8rem;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 8px;
          border: 0.2rem solid ${({ theme }) => theme.colors.background};
          background-color: ${({ theme }) => theme.colors.scrollBar};
        }

        &::-webkit-scrollbar-track {
          background-color: ${({ theme }) => theme.colors.background};
          border-radius: 8px;
        }
      }
    }
    .card {
      width: 70%;
      height: 12rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 1rem;
      margin: 0 auto;
      margin-bottom:2rem;
      box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadow};
      border-radius: ${({ theme }) => theme.borderRadius};
      background: ${({ theme }) => theme.colors.card};
      transition: box-shadow 0.3s ease-out;
      
      &:hover {
        box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadowHover};
      }
      &:hover ${Underlining} {
        box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.secondary};
      }
      .category {
        color: ${({ theme }) => theme.colors.primary};
        text-transform: uppercase;
        letter-spacing: +1px;
        font-weight: 700;
      }
      .title {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        opacity:0;
      }
      .date {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.subtext};
        letter-spacing: +0.5px;
      }
      
      .card-img{
      dispay:flex;
      border-radius:.3rem;
      width:10rem;
      height:10rem;
      position:relative;
      overflow: hidden;
      margin-right:2rem;
      img{
      position:absolute;
      top:0;
      left:0;
      height: auto;
      width:auto;
      min-width: 10rem;
      min-height: 10rem;
      max-width: 15rem;
      max-height: 15rem;
      }
      }
      .card-content{
      display:flex;
      flex-direction: column;
      text-align: initial;
      }
    }
  }
`

const Hast = styled.div`
  width: 20rem;
height: 2.5rem;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 1rem;
border: 0.125rem solid ${({ theme }) => theme.colors.primary};
border-radius: ${({ theme }) => theme.borderRadius};
background: ${({ theme }) => theme.colors.card};
margin 0 auto;
margin-top:3rem;
margin-bottom:2rem;
`



const ArticlesIsolation = () => {
  const MAX_ARTICLES = shownArticles

  const { isIntroDone, darkMode } = useContext(Context).state
  const [articles, setArticles] = useState()
  const articlesControls = useAnimation()

  // Load and display articles after the splashScreen sequence is done
  useEffect(() => {
    const loadArticles = async () => {
      if (isIntroDone) {
        await articlesControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 1 },
        })

      }
    }
    loadArticles()
  }, [isIntroDone, articlesControls, MAX_ARTICLES])


  return (
    <StyledSection
      id="articles"
      initial={{ opacity: 0, y: 20 }}
      animate={articlesControls}
    >
      <StyledContentWrapper>



        <div className="articles">
          <Hast>
            #LIÈGE PROJETÉ
          </Hast>
          <a
            href={"https://www.fourgonlesite.com/van-lifestyle/27503-le-liege-projete-une-isolation-performante-mais-couteuse-pour-les-fourgons/"}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >

            <div className="card">
              <div className={"card-img"}>
                <img src={"https://www.fourgonlesite.com/wp-content/uploads/2020/04/Isolation_LIEGE_OLIVIER_03.jpg"}/>
              </div>
              <div className={"card-content"}>
                <span className="date">fourgonlesite.com • 27/04/2020</span>
                    <span className="category">
                      <Underlining color="tertiary" hoverColor="secondary">
                        Le liège projeté…. Une isolation performante mais coûteuse
                      </Underlining>
                    </span>
              <h4 className="title">Le liège projeté…. Une isolation performante mais coûteuse</h4>
              </div>
            </div>
          </a>

          <a
            href={"https://levanmigrateur.com/isolation-naturelle-le-liege-projete-pour-fourgon/"}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >

            <div className="card">
              <div className={"card-img"}>
                <img src={"https://levanmigrateur.com/wp-content/uploads/2020/10/Lie%CC%80ge-projete%CC%81-fourgon.jpg"}/>
              </div>
              <div className={"card-content"}>
                <span className="date">levanmigrateur.com • 28/11/2020</span>
                <span className="category">
                      <Underlining color="tertiary" hoverColor="secondary">
                        ISOLATION NATURELLE : LE LIÈGE PROJETÉ POUR FOURGON
                      </Underlining>
                    </span>
                <h4 className="title">ISOLATION NATURELLE : LE LIÈGE PROJETÉ POUR FOURGON</h4>
              </div>
            </div>
          </a>



          <Hast>
            #LIÈGE PANNEAU
          </Hast>

          <a
            href={"https://lemondedetikal.com/fr/isolation-liege-sol/"}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >

            <div className="card">
              <div className={"card-img"}>
                <img src={"https://i1.wp.com/lemondedetikal.com/tikal/wp-content/uploads/2016/05/st-hilliers-1894.jpg?ssl=1"}/>
              </div>
              <div className={"card-content"}>
                <span className="date">lemondedetikal.com • 20/06/2016</span>
                <span className="category">
                      <Underlining color="tertiary" hoverColor="secondary">
                        Isolation fourgon aménagé : la pose du liège et l’isolation du sol
                      </Underlining>
                    </span>
                <h4 className="title">Isolation fourgon aménagé : la pose du liège et l’isolation du sol</h4>
              </div>
            </div>
          </a>

          <a
            href={"https://www.poimobile.fr/isolation-du-toit-du-liege/"}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >

            <div className="card">
              <div className={"card-img"}>
                <img src={"http://www.poimobile.fr/wp-content/uploads/2014/05/coller-liege-1024x682.jpg"}/>
              </div>
              <div className={"card-content"}>
                <span className="date">poimobile.fr.com • 22/02/2016</span>
                <span className="category">
                      <Underlining color="tertiary" hoverColor="secondary">
                        Isolation du toit avec du liège
                      </Underlining>
                    </span>
                <h4 className="title">Isolation du toit avec du liège</h4>
              </div>
            </div>
          </a>

          <a
            href={"https://www.rollingbears.fr/isolation-liege-van-amenage/"}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >

            <div className="card">
              <div className={"card-img"}>
                <img src={"https://www.rollingbears.fr/wp-content/uploads/2018/08/rollingbears_liegeSurRenforts.png"}/>
              </div>
              <div className={"card-content"}>
                <span className="date">rollingbears.fr • 07/08/2018</span>
                <span className="category">
                      <Underlining color="tertiary" hoverColor="secondary">
                        Isolation – Liège
                      </Underlining>
                    </span>
                <h4 className="title">Isolation – Liège</h4>
              </div>
            </div>
          </a>

          <Hast>
            #LAINE MOUTON / CHANVRE
          </Hast>

          <a
            href={"https://zebravan.fr/isolation-van/"}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >

            <div className="card">
              <div className={"card-img"}>
                <img src={"https://zebravan.fr/wp-content/uploads/2019/08/IMG_5259-3-768x1024@2x.jpg"}/>
              </div>
              <div className={"card-content"}>
                <span className="date">rollingbears.fr.fr.com • 01/07/2019</span>
                <span className="category">
                      <Underlining color="tertiary" hoverColor="secondary">
                        L’isolation du Van
                      </Underlining>
                    </span>
                <h4 className="title">L’isolation du Van</h4>
              </div>
            </div>
          </a>

          <a
            href={"https://levanmigrateur.com/isoler-a-laine-de-chanvre-de-mouton-lexemple-de-fourgon/"}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >

            <div className="card">
              <div className={"card-img"}>
                <img src={"https://levanmigrateur.com/wp-content/uploads/2018/04/DSC07900-1170x783.jpg"}/>
              </div>
              <div className={"card-content"}>
                <span className="date">lavanmigrateur.com • 2016</span>
                <span className="category">
                      <Underlining color="tertiary" hoverColor="secondary">
                       ISOLER À LA LAINE DE CHANVRE ET DE MOUTON : L’EXEMPLE DE NOTRE FOURGON
                      </Underlining>
                    </span>
                <h4 className="title">ISOLER À LA LAINE DE CHANVRE ET DE MOUTON : L’EXEMPLE DE NOTRE FOURGON</h4>
              </div>
            </div>
          </a>


        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default ArticlesIsolation
