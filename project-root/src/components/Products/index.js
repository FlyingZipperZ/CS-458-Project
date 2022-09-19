import React from 'react'

const Products = () => {
  return (
    <ProductsPageContainer>
        <OurProductsContainer>
            <OurProductsHeader> </OurProductsHeader>
            <OurProductsWrapper>
                <OurProductsLink></OurProductsLink>
                <OurProductsLink></OurProductsLink>
                <OurProductsLink></OurProductsLink>
                <OurProductsLink></OurProductsLink>
                <OurProductsLink></OurProductsLink>
            </OurProductsWrapper>
        </OurProductsContainer>
        <CoilImageContainer>
            <CoilImage></CoilImage>
        </CoilImageContainer>
        <ElectronicsImageContainer>
            <ElectronicImage></ElectronicImage>
            <ElectronicImage></ElectronicImage>
            <ElectronicImage></ElectronicImage>
            <ElectronicImage></ElectronicImage>
            <ElectronicImage></ElectronicImage>
            <ElectronicImage></ElectronicImage>
            <ElectronicImage></ElectronicImage>
            <ElectronicImage></ElectronicImage>
        </ElectronicsImageContainer>
        <MagneticsContainer>
            <MagneticsHeader></MagneticsHeader>
            <MagneticsP></MagneticsP>
            <MagneticsImage></MagneticsImage>
        </MagneticsContainer>
    </ProductsPageContainer>
  )
}

export default Products