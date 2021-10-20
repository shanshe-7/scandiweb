import styled, { css } from "styled-components";

export const CartPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 72px;
`;

export const CartPageContent = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: calc(100% - 202px);
`;

export const CartHeader = styled.h2`
  font-family: Ral-b;
  font-size: 32px;
  width: auto;
  text-transform: uppercase;
  margin-bottom: 59px;
`;

export const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItemWrapper = styled.div<any>`
  display: flex;
  width: calc(100% - 215px);
  border-top: 1px solid #e5e5e5;
  justify-content: center;
  align-items: center;
  ${({ isMini }) =>
    isMini &&
    css`
      width: calc(100% - 32px);
      border: none;
    `}
`;

export const CartItemContentWrapper = styled.div<any>`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 185px;
  ${({ isMini }) =>
    isMini &&
    css`
      margin-top: 25px;
      height: 137px;
      margin-bottom: 0px;
    `}
`;

export const ItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const ItemBrand = styled.div<any>`
  font-family: Ral-b;
  font-size: 30px;
  text-transform: capitalize;
  ${({ isMini }) =>
    isMini &&
    css`
      font-family: Ral-b;
      font-size: 16px;
      margin-top: 5px;
    `}
`;

export const ItemName = styled.div<any>`
  font-family: Ral-l;
  font-size: 30px;
  margin-top: 16px;
  text-transform: capitalize;
  ${({ isMini }) =>
    isMini &&
    css`
      font-size: 16px;
      margin-top: 5px;
    `}
`;

export const ItemPrice = styled.div<any>`
  font-family: Ral-b;
  font-size: 24px;
  margin-top: 12px;
  ${({ isMini }) =>
    isMini &&
    css`
      font-family: Ral-b;
      font-size: 16px;
      margin-top: 5px;
    `}
`;

export const ItemAttribute = styled.span<any>`
  font-family: Ral-l;
  font-size: 16px;
  max-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  border: 1px solid #1d1f22;
  ${({ isMini }) =>
    isMini &&
    css`
      margin-right: 3px;
      margin-top: 25px;
      font-size: 14px;
    `}
`;

export const ItemAttributesWrapper = styled.span<any>`
  margin-top: 12px;
  row-gap: 5px;
  flex-wrap: wrap;
  max-width: auto;
  display: flex;
  ${({ isMini }) =>
    isMini &&
    css`
      font-size: 14px;
    `}
`;

export const ItemAttributeText = styled.div<any>`
  font-family: Ral-l;
  padding: 15px 28px;
  ${({ isMini }) =>
    isMini &&
    css`
      font-size: 14px;
      padding: 3px 6px;
    `}
`;
export const ItemQuantityAndImageWrapper = styled.div`
  display: flex;
  width: auto;
  justify-content: flex-end;
`;

export const PlusMinusSignAndQuantiWrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 45px;
  margin-right: 12px;
  ${({ isMini }) =>
    isMini &&
    css`
      min-width: 24px;
    `}
`;

export const SignWrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 100%;
  border: 1px solid #1d1f22;
  position: relative;
  cursor: pointer;
  ${({ isMini }) =>
    isMini &&
    css`
      height: 24px;
    `}
`;

export const VerticalLine = styled.div<any>`
  width: 15px;
  height: 1px;
  background: #1d1f22;
  transform: rotate(90deg);
  position: absolute;
  ${({ isMini }) =>
    isMini &&
    css`
      width: 8px;
    `}
`;

export const HorizontalLine = styled.div<any>`
  width: 15px;
  height: 1px;
  background: #1d1f22;
  ${({ isMini }) =>
    isMini &&
    css`
      width: 8px;
    `}
`;

export const Quantity = styled.div<any>`
  font-family: Ral-r;
  font-size: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isMini }) =>
    isMini &&
    css`
      font-size: 16px;
    `}
`;

export const ItemImage = styled.img<any>`
  width: 141px;
  height: 100%;
  border: 0.1px solid #1d1f22;
  object-fit: contain;
  ${({ isMini }) =>
    isMini &&
    css`
      width: 105px;
    `}
`;

export const TotalPriceWrapper = styled.div<any>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 42px;
  width: calc(100% - 215px);
  align-items: center;
  ${({ isMini }) =>
    isMini &&
    css`
      width: calc(100% - 32px);
    `}
`;

export const ToTalPriceText = styled.div<any>`
  font-family: Ral-b;
  font-size: 32px;
  width: auto;
  ${({ isMini }) =>
    isMini &&
    css`
      font-size: 16px;
    `}
`;

export const ToTalPrice = styled.div<any>`
  font-family: Ral-b;
  font-size: 30px;
  width: auto;
  ${({ isMini }) =>
    isMini &&
    css`
      font-size: 16px;
    `}
`;

export const ProceedToCheckout = styled.button<any>`
  font-family: Ral-r;
  font-size: 30px;
  color: #fff;
  width: 300px;
  height: 60px;
  background: #5ece7b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  outline: none;
  border-radius: 3px;
  ${({ isMini }) =>
    isMini &&
    css`
      font-size: 14px;
      height: 100%;
      cursor: pointer;
      width: calc((100% / 2) - 12px);
      margin-top: 0px;
    `}
`;

export const ItemsNotFound = styled.div`
  font-family: Ral-r;
  font-size: 20px;
`;
