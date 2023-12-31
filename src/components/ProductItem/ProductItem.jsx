import "./ProductItem.css";
import PropTypes from "prop-types";

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    imgUrl: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    model: PropTypes.string,
  }).isRequired,
};

export function ProductItem({ item }) {
  return (
    <div className="item-container">
      <div className="item-container__image-wrapp">
        <img src={item.imgUrl} width="100" alt={item.brand} />
      </div>
      <ul className="item-settings">
        <li className="item-settings__setting">
          <strong>Brand: </strong>
          {item.brand}
        </li>
        <li className="item-settings__setting">
          <strong>Model: </strong>
          {item.model}{" "}
        </li>
        <li className="item-settings__setting">
          <strong>Price: </strong>
          {item.price}{" "}
        </li>
      </ul>
    </div>
  );
}
