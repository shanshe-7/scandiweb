import styled from "styled-components";

export const NavigationWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationContent = styled.div`
  width: calc(100% - 202px);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const HalfCircle = styled.img``;

export const TrapezoidShape = styled.div`
  width: 30px;
  height: 28px;
  background: #52d67a;
  transform: perspective(2px) rotateX(1deg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const CategoriesWrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
`;

export const CategoryWrapper = styled.div<any>`
  height: 100%;
  ${({ isCategoryActive }) =>
    isCategoryActive && `border-bottom: 2px solid #52d67a;`}
`;

export const CategoryText = styled.div`
  padding-top: 28px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
  font-family: Ral-r;
  text-transform: uppercase;
  cursor: pointer;
`;

export const CurrencyAndCartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CurrencyText = styled.div`
  font-family: Ral-m;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: 20px;
`;

export const EmptyCart = styled.img``;

export const CurrencyUpDown = styled.img<any>`
  height: 100%;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
  ${({ isCurrencyOpen }) =>
    isCurrencyOpen &&
    `
  transform: rotate(180deg);
  `}
  transition: all 0.1s ease-in-out;
`;

export const CurrencyDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: calc(100% + 40px);
  top: calc(100% + 7.5px);
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
  background: #ffffff;
  cursor: pointer;
  z-index: 1;
`;

export const CurrencyDropDownText = styled.div<any>`
  padding-left: 20px;
  font-family: Ral-m;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 2px;
  padding-top: 10px;
  padding-bottom: 10px;

  :first-child {
    margin-top: 10px;
  }
  :last-child {
    margin-bottom: 10px;
  }

  :hover {
    background: #f5f5f5;
  }
`;

export const CartIconAndItemsCountWrapper = styled.div<any>`
  position: relative;
  margin-left: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ notOpen }) => notOpen && "pointer-events: none"}
`;

export const CartIconItemsCount = styled.div`
  position: absolute;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  font-family: Rob-b;
  font-size: 14px;
  color: #ffffff;
  background: #1d1f22;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 10px;
  bottom: 10px;
`;

export const MiniCartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 325px;
  position: absolute;
  top: 48px;
  right: 0px;
  z-index: 10;
  cursor: initial;
  background: #fff;
`;

export const MiniCartItemsHeaderWrapper = styled.div`
  margin-top: 8px;
  width: calc(100% - 32px);
`;
export const MiniCartItemsHeaderBold = styled.span`
  font-size: 16px;
  font-family: Ral-b;
  width: auto;
`;

export const MiniCartItemsHeadedRegular = styled.span`
  font-size: 16px;
  font-family: Ral-r;
`;

export const ViewBag = styled.button<any>`
  font-family: Ral-b;
  font-size: 14px;
  color: #1d1f22;
  width: calc((100% / 2) - 12px);
  height: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  outline: none;
  border: 1px solid #1d1f22;
  border-radius: 3px;
  height: 100%;
`;

export const ViewBagAndProceedToCheckoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
  height: 43px;
  width: calc(100% - 32px);
  margin-bottom: 20px;
`;
