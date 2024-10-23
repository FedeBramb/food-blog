import React, { useState, useEffect } from 'react';
import { Container, Input, Avatar, Button, Label } from './UploadImage.styles';

const UploadImage = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const img = new Image();
      img.src = URL.createObjectURL(selectedImage);
      img.onload = () => {
        if (img.width > 250 || img.height > 250) {
          setError('L\'immagine non può superare i 250px in larghezza o altezza.');
          setImage(null);
        } else {
          setError('');
          setImage(selectedImage);
        }
      };
    }
  };


  const handleUpload = async () => {
    setLoading(true);
    if (image) {
      const formData = new FormData();
      formData.append('file', image);
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
    setLoading(false);
  };

  return (
    <Container>
      <Label className="custom-file-upload">
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        Sfoglia
      </Label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button onClick={handleUpload} disabled={loading}>
        {loading ? 'Caricamento...' : 'Carica Immagine'}
      </Button>
      {image && <Avatar src={URL.createObjectURL(image)} alt="Avatar" />} {/* Mostra l'avatar */}
    </Container>
  );
};

export default UploadImage;
