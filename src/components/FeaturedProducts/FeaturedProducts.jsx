import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{`${type} products`}</h1>
      </div>
      <div className="bottom">
        {error ? ( <p>Error: {error.message}</p> ) : loading ? ( 
          <p>Loading...</p>
        ) : (
          data.map((item) => (
            <Card item={item} key={item.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
