const SortDropdown = ({ onSortChange }) => {
  return (
    <div className="sort-dropdown">
      <label>
        Sort By:{' '}
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="popularity">Price</option>
          <option value="name">Name</option>
          <option value="popularity">Popularity</option>
        </select>
      </label>
    </div>
  );
};

export default SortDropdown;
