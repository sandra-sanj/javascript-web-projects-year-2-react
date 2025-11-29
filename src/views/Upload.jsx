import {useFile, useMedia} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';
import {useState} from 'react';
import {useNavigate} from 'react-router';

const Upload = () => {
  const [file, setFile] = useState(null);
  const {postFile} = useFile();
  const {postMedia} = useMedia();
  const navigate = useNavigate();

  const initValues = {
    title: '',
    description: '',
  };

  const doUpload = async (inputs) => {
    const token = localStorage.getItem('token');

    try {
      console.log(inputs.file);

      const fileData = await postFile(file, token);
      console.log('fileData', fileData);

      const mediaData = await postMedia(fileData.data, inputs, token);
      console.log('mediaData posted', mediaData);

      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doUpload,
    initValues,
  );

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit} className="justify-self-center p-15 gap-5">
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file ? URL.createObjectURL(file) : 'https://placehold.co/600x400'
          }
          alt="preview"
          width="200"
        />
        <button
          type="submit"
          disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
