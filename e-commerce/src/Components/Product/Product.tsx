import "./Product.scss";

const Product = (props: any) => {
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__image">
          <img src={props.img} alt="Hi" />
        </div>
        <div className="product__description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            praesentium dolor quo repudiandae?
          </p>
          <div className="product__footer">
            <div className="buttons"> 
              <button>View</button>
              <button>Edit</button>
            </div>
            <span className="time">9 mins</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
