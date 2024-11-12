import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Container, Input, Button, Label } from './UploadImage.styles';

const UploadImage = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [error, setError] = useState('');
  const editorRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setError('');
      setImage(selectedImage);
    }
  };

  const handleScaleChange = (e) => {
    const scaleValue = parseFloat(e.target.value);
    setScale(scaleValue);
  };

  const handleUpload = async () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas().toDataURL();
      const blob = await (await fetch(canvas)).blob();
      
      const formData = new FormData();
      formData.append('file', blob);
      formData.append('upload_preset', 'p4uzodz5');

      try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/dzm2ylhty/image/upload`, {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        onUpload(data.secure_url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <Container>
      <Label className="custom-file-upload">
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        Sfoglia
      </Label>
      {image && (
        <>
          <AvatarEditor
            ref={editorRef}
            image={image}
            width={200}
            height={200}
            border={50}
            borderRadius={100}
            scale={scale}
            rotate={0}
          />
          <input
            type="range"
            min="1"
            max="2"
            step="0.01"
            value={scale}
            onChange={handleScaleChange}
            style={{ marginTop: '10px' }}
          />
        </>
      )}
      <Button onClick={handleUpload} disabled={!image}>
        Carica Immagine
      </Button>
    </Container>
  );
};

export default UploadImage;
