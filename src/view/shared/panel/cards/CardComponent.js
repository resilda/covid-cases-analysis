import React from 'react'
import { Link } from 'react-router-dom'
import { CardWrapper, CardContainer } from './styles/CardContainer'

function CardComponent(props) {
  const { title, imageSrc, description, link } = props

  return (
    <CardWrapper>
      <div className="card-component">
        <CardContainer>
          <Link to={`${link}`} className="card-link">
            <div className="card-wrapper">
              <img
                src={`${imageSrc}`}
                alt={`${title}`}
                width="265px"
                height={`${
                  title === `Covid-19 cases in Albania` ? `200px` : `210px`
                }`}
              />
              <h4
                className={`${
                  title === `Covid-19 cases in Albania`
                    ? `card-title-modified`
                    : `card-title`
                }`}
              >
                {title}
              </h4>
              <p className="card-description">{description}</p>
            </div>
          </Link>
        </CardContainer>
      </div>
    </CardWrapper>
  )
}

export default CardComponent
