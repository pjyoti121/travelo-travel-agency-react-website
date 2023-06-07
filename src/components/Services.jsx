import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Card = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const dogImages = [
    "https://images.unsplash.com/photo-1560807707-4a22e08df7d7", // Placeholder dog image 1
    "https://images.unsplash.com/photo-1571260891107-5b99e67cb60c", // Placeholder dog image 2
    "https://images.unsplash.com/photo-1560807707-4a22e08df7d7", // Placeholder dog image 1
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % dogImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CardContainer>
      <CardContent>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a cute dog card. The image on the right side will keep changing.
        </CardDescription>
      </CardContent>
      <CardImage src={dogImages[currentImage]} alt="Cute Dog" />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 0.5rem;
  height: 300px; /* Adjust the height as needed */
`;

const CardContent = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const CardDescription = styled.p`
  margin: 0;
  color: #666;
`;

const CardImage = styled.img`
  width: 200px; /* Adjust the width as needed */
  height: 100%; /* Occupy full height of the card */
  object-fit: cover;
  border-radius: 0.5rem;
  margin-left: 1rem;
`;

export default Card;
