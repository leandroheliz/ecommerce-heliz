import React from 'react'
import { SvgXml } from 'react-native-svg'
import star from '../../assets/star'
import { StoreCard, StoreCardCover, Title, Address, Info, Rating, Section, SectionEnd,
   //Icon
   } from './Styles'

export const StoreInfo = ({ store = {} }) => {
  const {
    name = "Camelia Blanco & Más",
    icon,
    photos = ["https://media.istockphoto.com/photos/all-your-necessities-stored-in-one-place-picture-id1157106624?k=20&m=1157106624&s=612x612&w=0&h=jLXRK4qRL_3QITpschx1Wy2Aj2Vyy47Q1Q_R7hVcPQg="],
    address = "Calle de la Provincia, 1, Madrid",
    rating = 4,
    isClosed = false,
  } = store

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <StoreCard elevation={5}
    >
      <StoreCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosed && <SvgXml xml={star} width={30} height={30} />}
            {/* <Icon source={{ uri: icon }} /> */}
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </StoreCard>
  )
}