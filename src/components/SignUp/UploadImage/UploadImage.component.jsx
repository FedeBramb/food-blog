import React, { useState, useEffect } from 'react';
import { Container, Input, Avatar, Button, Label } from './UploadImage.styles';

const UploadImage = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const defaultAvatarUrl = 'URL_DEL_TUO_AVATAR_PREDEFINITO'; // Sostituisci con il tuo URL predefinito

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

  useEffect(() => {
    if (imageUrl) {
      onUpload(imageUrl); // Chiamata a onUpload quando imageUrl è impostato
    }
  }, [imageUrl, onUpload]);

  const handleUpload = async () => {
    setLoading(true);
    if (image) {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'p4uzodz5'); // Sostituisci con il tuo preset
      try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/dzm2ylhty/image/upload`, {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        setImageUrl(data.secure_url); // Ottieni l'URL dell'immagine caricata
        console.log('Image URL:', data.secure_url); // Log dell'URL dell'immagine caricata
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      setImageUrl(defaultAvatarUrl);
      console.log('Default Avatar URL:', defaultAvatarUrl);
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
