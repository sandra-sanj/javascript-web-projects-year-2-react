const SingleView = (props) => {
  const {item, updateSelectedItem} = props;

  if (item) {
    return (
      <dialog open className="single-view-dialog">
        {}

        {item.media_type.includes('image') ? (
          <img src={item.thumbnail} alt={item.title} />
        ) : (
          <video width="80%" controls>
            <source src={item.filename} type={item.media_type} />
            Your browser does not support the video tag.
          </video>
        )}

        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>

        <button onClick={() => updateSelectedItem(null)}>Close</button>
      </dialog>
    );
  }
  return <dialog close></dialog>;
};
export default SingleView;
