import styled, { css } from "styled-components";

export const ProductDescriptionWrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 72px;
  padding-top: 72px;
  ${({ isMiniCartOpen }) =>
    isMiniCartOpen && `background: rgba(57, 55, 72, 0.22)`}
`;

export const ProductDescriptionContent = styled.div<any>`
  display: flex;
  width: calc(100% - 202px);

  position: relative;
  ${({ inStock }) => !inStock && `opacity: 0.5`}
`;

export const OutOfStockProductDescriptionPage = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: Ral-r;
  font-size: 18px;
  text-transform: uppercase;
`;

export const ProductImagesWrapper = styled.div`
  display: flex;
  width: auto;
`;

export const SmallImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-right: 32px;
`;

export const SmallImage = styled.img`
  width: 87px;
  height: 87px;
  object-fit: contain;
  border: 1px solid #f5f5f5;
  :not(:last-child) {
    margin-bottom: 32px;
  }
  cursor: pointer;
`;
export const BigImage = styled.img`
  width: 632px;
  min-height: 532px;
  object-fit: contain;
  border: 1px solid #f5f5f5;
`;

export const DescriptionDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 292px;
  margin-left: 64px;
`;

export const BrandName = styled.div`
  font-family: Ral-b;
  font-size: 30px;
`;

export const ProductName = styled.div`
  font-family: Ral-R;
  font-size: 30px;
  margin-top: 14px;
`;

export const PriceText = styled.div`
  font-family: Rob-b;
  font-size: 18px;
  text-transform: uppercase;
`;

export const AttributesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const AttributeItemsWrapper = styled.div`
  display: flex;
  width: auto;
  flex-wrap: wrap;
  row-gap: 2px;
  margin-top: 8px;
  margin-bottom: 10px;
`;

export const AttributeItem = styled.div<any>`
  width: 63px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Rob-r;
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;
  :not(:last-child) {
    margin-right: 12px;
  }
  border: 1px solid #a6a6a6;
  ${({ selected }) =>
    selected &&
    css`
      color: #ffffff;
    `}
  ${({ inStock }) =>
    !inStock &&
    `pointer-events: none
`}
`;

export const SizeText = styled.div`
  font-family: Rob-b;
  font-size: 18px;
  text-transform: uppercase;
`;

export const PriceAmount = styled.div`
  font-family: Ral-b;
  font-size: 24px;
  margin-top: 10px;
  text-transform: uppercase;
`;

export const AddToCart = styled.button<any>`
  background: #5ece7b;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Ral-r;
  font-size: 16px;
  margin-top: 20px;
  text-transform: uppercase;
  outline: none;
  width: 100%auto;
  height: 52px;
  border: none;
  cursor: pointer;
  ${({ inStock }) => !inStock && `  pointer-events: none`}
`;

export const Description = styled.div`
  font-family: Rob-r;
  font-size: 16px;
  margin-top: 10px;
  margin-top: 40px;
  height: 103px;
  overflow-y: auto;
`;
