import { Component } from "react";
import { CategoriesWrapper, CategoryWrapper, CategoryText } from "./components";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface CategoryProps {
  isLoading: boolean;
  categories: Array<any>;
  handelCategoryClick: any;
  currentCategoryName: string;
}

class Category extends Component<CategoryProps & RouteComponentProps> {
  render() {
    const { isLoading, categories, handelCategoryClick, currentCategoryName } =
      this.props;
    const { pathname } = this.props.location;

    return (
      <CategoriesWrapper>
        {pathname !== "/" ? (
          <CategoryWrapper>
            <CategoryText
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              home
            </CategoryText>
          </CategoryWrapper>
        ) : (
          !isLoading &&
          categories.map((category) => (
            <CategoryWrapper
              isCategoryActive={category.name === currentCategoryName}
              key={category.name}
            >
              <CategoryText onClick={handelCategoryClick}>
                {category.name}
              </CategoryText>
            </CategoryWrapper>
          ))
        )}
      </CategoriesWrapper>
    );
  }
}
export default withRouter(Category);
