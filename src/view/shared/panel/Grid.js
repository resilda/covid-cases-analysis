import React from 'react'
import { GridContainer } from './styles/GridContainer'
import CardComponent from './cards/CardComponent'
import { sharedGridComponents } from './sharedGridComponets'

function Grid() {
  return (
    <GridContainer>
      <div className="container">
        <div className="card-style">
          {sharedGridComponents.map((cardElement) => (
            <div key={cardElement.id}>
              <CardComponent
                imageSrc={cardElement.imgSrc}
                title={cardElement.title}
                description={cardElement.description}
                link={cardElement.link}
              />
            </div>
          ))}
        </div>
      </div>
    </GridContainer>
  )
}

export default Grid
