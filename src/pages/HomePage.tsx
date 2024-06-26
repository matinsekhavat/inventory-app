import CategoryView from "../components/CategoryView";
import Header from "../components/Header";
import MainCategory from "../components/MainCategory";
import ProductOverView from "../components/ProductOverview";
import ProductView from "../components/ProductView";
function HomePage() {
  return (
    <>
      <Header />
      <MainCategory>
        <CategoryView />
        <ProductView />
        <ProductOverView />
      </MainCategory>
    </>
  ); //Header //main //categoryView //ProductView //main</>;
}

export default HomePage;
