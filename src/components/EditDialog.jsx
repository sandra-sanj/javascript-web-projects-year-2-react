import {useNavigate} from 'react-router';
import useForm from '../hooks/formHooks';

const EditDialog = ({item, modifyMedia, onClose}) => {
  //console.log(item);
  //console.log(modifyMedia);

  const navigate = useNavigate();

  const initValues = {
    title: item.title,
    description: item.description,
  };

  const doEditItem = async (inputs) => {
    const token = localStorage.getItem('token');

    try {
      const newItem = {...item};
      newItem.title = inputs?.title;
      newItem.description = inputs?.description;
      console.log(newItem);

      if (
        newItem.title !== item.title ||
        newItem.description !== item.description
      ) {
        await modifyMedia(newItem.media_id, newItem, token);
        onClose(); // close dialog! so navigation works
        navigate(0); // reload page
      } else {
        alert('Media item values have not been modified!');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doEditItem,
    initValues,
  );

  return (
    <>
      <dialog open>
        <h3>Edit media forms</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={inputs.title}
            onChange={handleInputChange}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={inputs.description}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            disabled={inputs.title.length > 3 ? false : true}
          >
            Save
          </button>
        </form>
        <button onClick={onClose}>Cancel</button>
      </dialog>
    </>
  );
};

export default EditDialog;
