import React, { useState } from 'react';

const styles = {
  ImageContainer: {
    top: '74px',
    left: '764px',
    width: '111px',
    height: '108px',
    borderRadius: '100000px',
    border: '1px solid #c2c2c2',
    boxSizing: 'border-box',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: '10px',
    marginBottom: '10px',
    cursor: 'pointer', // Make the cursor change to indicate clickability
  },
};

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHw2fHxhc2lhbnxlbnwxfHx8fDE2Nzk2NDAwOTQ&ixlib=rb-4.0.3&q=80&w=1080',
};

const ImageProfile = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    // Trigger click on the file input when the image profile is clicked
    document.getElementById('profile-picture-input').click();
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        id="profile-picture-input"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <div
        style={{
          ...styles.ImageContainer,
          backgroundImage: `url(${selectedImage ?? props.image})`,
        }}
        onClick={handleUploadClick}
      />
    </div>
  );
};

export default ImageProfile;