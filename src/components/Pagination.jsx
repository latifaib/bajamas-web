import '../styles/global.css'; // contains .pagination styles

const Pagination = () => {
  return (
    <div className="pagination">
      <button>{'<'}</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>{'>'}</button>
    </div>
  );
};

export default Pagination;
