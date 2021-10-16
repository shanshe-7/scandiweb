import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 191px;
`;

export const ProductsContent = styled.div`
  display: flex;
  width: calc(100% - 202px);
  flex-direction: column;
`;

export const ProductsHeader = styled.div`
  font-family: Ral-r;
  font-size: 42px;
  margin-top: 80px;
`;

export const IndividualsProductsWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 103px;
  margin-top: 103px;
`;

export const ProductWrapper = styled.div<any>`
  height: 444px;
  width: calc(calc(100% - 57px) / 3);
  cursor: pointer;
  :hover {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
  }
  :last-child {
    margin-left: 28.5px;
    margin-right: auto;
  }
  ${({ inStock }) => !inStock && `opacity: 0.5`};
`;

export const ProductContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 16px;
  position: relative;
  :hover > :first-child {
    visibility: visible;
  }
`;

export const ProductImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 338px;
  border: 2px solid #f5f5f5;
`;

export const OutOfStockText = styled.span`
  position: absolute;
  font-family: Ral-r;
  font-size: 18px;
  top: 169px;
  text-transform: uppercase;
`;

export const ProductName = styled.div`
  margin-top: 24px;
  font-family: Ral-l;
  font-size: 18px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ProductPrice = styled.div`
  font-family: Ral-r;
  font-size: 18px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 5px;
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: #5ece7b;
  border-radius: 50%;
  position: absolute;
  top: 312px;
  right: 15px;
  visibility: hidden;
`;
export const Cart = styled.img``;
