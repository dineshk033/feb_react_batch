export const RenderBlog = ({ list, handleDelete }) => {
  return (
    <div className="row p-3">
      {list.map((item) => (
        <div className="card mb-3 pt-3" key={item.id}>
          <h3 className="fs-5">{item.title}</h3>
          <p className="text-muted">{item.tags.join(",")}</p>
          <div className="mb-3 text-end">
            <button className="btn btn-sm btn-primary me-2">View</button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
