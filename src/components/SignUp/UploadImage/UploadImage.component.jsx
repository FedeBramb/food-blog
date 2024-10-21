import React, { useState } from 'react';

import {
    Container,
    Input,
    Avatar,
    Button,
    Label
} from './UploadImage.styles';

const UploadImage = () => {
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

    const handleUpload = async () => {
        setLoading(true);
        const finalImage = image || defaultAvatarUrl; // Usa l'immagine caricata o l'avatar predefinito

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
                console.log('Image URL:', data.secure_url);
                // Qui potresti inviare l'URL al tuo backend per salvarlo nel database

            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            // Se non ci sono immagini caricate, usa l'URL dell'avatar predefinito
            setImageUrl(defaultAvatarUrl);
            console.log('Default Avatar URL:', defaultAvatarUrl);
            // Qui potresti inviare l'URL dell'avatar predefinito al tuo backend
        }

        setLoading(false);
    };

    return (
        <Container>
            <Label class="custom-file-upload">
                <Input type="file" accept="image/*" onChange={handleImageChange} />
                Sfoglia
            </Label>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button onClick={handleUpload} disabled={loading}>
                {loading ? 'Caricamento...' : 'Carica Immagine'}
            </Button>
            { image && <Avatar src={imageUrl} alt="Avatar" />}
        </Container>
    );
};

export default UploadImage;
