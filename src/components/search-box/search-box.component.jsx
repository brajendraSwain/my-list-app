import "./search-box.styles.css";

export const SearchBox = props => {
  return (
    <input
      className="search"
      placeholder="Search..."
      onChange={props.handleChange}
    />
  );
};
