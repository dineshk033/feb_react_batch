export const RenderBlog = ({ list }) => {
  return (
    <div className="row">
      {list.map((item) => (
        <div className="card mb-3" key={item.id}>
          <h3>{item.title}</h3>
          <p className="text-muted">{item.comment}</p>
        </div>
      ))}
    </div>
  );
};
