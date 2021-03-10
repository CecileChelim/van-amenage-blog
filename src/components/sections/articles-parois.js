import React, { useState, useEffect, useContext } from "react"
import { useAnimation } from "framer-motion"
import Context from "../../context"
import Underlining from "../../styles/underlining"
import { shownArticles } from "../../../config"
import {StyledSection,StyledContentWrapper,Hast} from "./articles-isolation";


const ArticlesParois = () => {
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
          <Hast>#LIÈGE PROJETÉ</Hast>
          <a
            href={
              "https://www.fourgonlesite.com/van-lifestyle/27503-le-liege-projete-une-isolation-performante-mais-couteuse-pour-les-fourgons/"
            }
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <div className="card">
              <div className={"card-img"}>
                <img
                  src={
                    "https://www.fourgonlesite.com/wp-content/uploads/2020/04/Isolation_LIEGE_OLIVIER_03.jpg"
                  }
                />
              </div>
              <div className={"card-content"}>
                <span className="date">fourgonlesite.com • 27/04/2020</span>
                <span className="category">
                  <Underlining color="tertiary" hoverColor="secondary">
                    Le liège projeté…. Une isolation performante mais coûteuse
                  </Underlining>
                </span>
                <h4 className="title">
                  Le liège projeté…. Une isolation performante mais coûteuse
                </h4>
              </div>
            </div>
          </a>

          <a
            href={
              "https://levanmigrateur.com/isolation-naturelle-le-liege-projete-pour-fourgon/"
            }
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <div className="card">
              <div className={"card-img"}>
                <img
                  src={
                    "https://levanmigrateur.com/wp-content/uploads/2020/10/Lie%CC%80ge-projete%CC%81-fourgon.jpg"
                  }
                />
              </div>
              <div className={"card-content"}>
                <span className="date">levanmigrateur.com • 28/11/2020</span>
                <span className="category">
                  <Underlining color="tertiary" hoverColor="secondary">
                    ISOLATION NATURELLE : LE LIÈGE PROJETÉ POUR FOURGON
                  </Underlining>
                </span>
                <h4 className="title">
                  ISOLATION NATURELLE : LE LIÈGE PROJETÉ POUR FOURGON
                </h4>
              </div>
            </div>
          </a>

          <Hast>#LIÈGE PANNEAU</Hast>

          <a
            href={"https://lemondedetikal.com/fr/isolation-liege-sol/"}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <div className="card">
              <div className={"card-img"}>
                <img
                  src={
                    "https://i1.wp.com/lemondedetikal.com/tikal/wp-content/uploads/2016/05/st-hilliers-1894.jpg?ssl=1"
                  }
                />
              </div>
              <div className={"card-content"}>
                <span className="date">lemondedetikal.com • 20/06/2016</span>
                <span className="category">
                  <Underlining color="tertiary" hoverColor="secondary">
                    Isolation fourgon aménagé : la pose du liège et l’isolation
                    du sol
                  </Underlining>
                </span>
                <h4 className="title">
                  Isolation fourgon aménagé : la pose du liège et l’isolation du
                  sol
                </h4>
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
                <img
                  src={
                    "http://www.poimobile.fr/wp-content/uploads/2014/05/coller-liege-1024x682.jpg"
                  }
                />
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
                <img
                  src={
                    "https://www.rollingbears.fr/wp-content/uploads/2018/08/rollingbears_liegeSurRenforts.png"
                  }
                />
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

          <Hast>#LAINE MOUTON / CHANVRE</Hast>

          <a
            href={"https://zebravan.fr/isolation-van/"}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <div className="card">
              <div className={"card-img"}>
                <img
                  src={
                    "https://zebravan.fr/wp-content/uploads/2019/08/IMG_5259-3-768x1024@2x.jpg"
                  }
                />
              </div>
              <div className={"card-content"}>
                <span className="date">
                  rollingbears.fr.fr.com • 01/07/2019
                </span>
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
            href={
              "https://levanmigrateur.com/isoler-a-laine-de-chanvre-de-mouton-lexemple-de-fourgon/"
            }
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <div className="card">
              <div className={"card-img"}>
                <img
                  src={
                    "https://levanmigrateur.com/wp-content/uploads/2018/04/DSC07900-1170x783.jpg"
                  }
                />
              </div>
              <div className={"card-content"}>
                <span className="date">lavanmigrateur.com • 2016</span>
                <span className="category">
                  <Underlining color="tertiary" hoverColor="secondary">
                    ISOLER À LA LAINE DE CHANVRE ET DE MOUTON : L’EXEMPLE DE
                    NOTRE FOURGON
                  </Underlining>
                </span>
                <h4 className="title">
                  ISOLER À LA LAINE DE CHANVRE ET DE MOUTON : L’EXEMPLE DE NOTRE
                  FOURGON
                </h4>
              </div>
            </div>
          </a>

          <Hast>#ARMAFLEX</Hast>

          <a
            href={
              "https://www.youtube.com/watch?v=CvnldgSmoA0&ab_channel=C%C3%A9dricleNomade"
            }
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <div className="card">
              <div className={"card-video"}>
                <iframe
                  width="100"
                  height="200"
                  src="https://www.youtube.com/embed/CvnldgSmoA0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={"card-content"}>
                <span className="date">VANLIFE • 2020</span>
                <span className="category">
                  <Underlining color="tertiary" hoverColor="secondary">
                    VANLIFE - ISOLATION ARMAFLEX AF (fourgon aménagé)
                  </Underlining>
                </span>
                <h4 className="title">
                  VANLIFE - ISOLATION ARMAFLEX AF (fourgon aménagé)
                </h4>
              </div>
            </div>
          </a>

          <a
            href={
              "https://www.youtube.com/watch?v=dKsoWDipSwU&ab_channel=LivHahn"
            }
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <div className="card">
              <div className={"card-video"}>
                <iframe width="100" height="200" src="https://www.youtube.com/embed/dKsoWDipSwU" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </div>
              <div className={"card-content"}>
                <span className="date">Liv Hahn • 2020</span>
                <span className="category">
                  <Underlining color="tertiary" hoverColor="secondary">
                    Isolation fourgon facile et pas chère avec Armaflex autocollant
                  </Underlining>
                </span>
                <h4 className="title">
                  isolation fourgon facile et pas chère avec Armaflex autocollant
                </h4>
              </div>
            </div>
          </a>
        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default ArticlesParois
