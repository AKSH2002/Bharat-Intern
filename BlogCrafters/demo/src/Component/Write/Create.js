import React, { useState } from 'react';

const Create = () => {
  const [content, setContent] = useState([]);

  const addText = () => {
    const newText = prompt('Enter your text:');
    if (newText) {
      setContent([...content, { type: 'text', data: newText }]);
    }
  };

  const addImage = () => {
    const imageUrl = prompt('Enter image URL:');
    if (imageUrl) {
      setContent([...content, { type: 'image', data: imageUrl }]);
    }
  };

  const addVideo = () => {
    const videoUrl = prompt('Enter video URL:');
    if (videoUrl) {
      setContent([...content, { type: 'video', data: videoUrl }]);
    }
  };

  return (
    <div style={{marginTop:'50px'}}>
      <h1>Blog Editor</h1>
      <div>
        <button onClick={addText}>Add Text</button>
        <button onClick={addImage}>Add Image</button>
        <button onClick={addVideo}>Add Video</button>
      </div>
      <div>
        {content.map((element, index) => (
          <div key={index}>
            {element.type === 'text' && <p>{element.data}</p>}
            {element.type === 'image' && <img src={element.data} alt={`Image-${index}`} />}
            {element.type === 'video' && (
              <iframe
                width="560"
                height="315"
                src={element.data}
                title={`Video-${index}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Create;
