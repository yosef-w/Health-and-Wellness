import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MuscleDisplay(props) {
  const [image, setImage] = useState("");

  const fetchImage = async () => {
    try {
      const response = await axios.get(
        `https://muscle-group-image-generator.p.rapidapi.com/getImage?muscleGroups=${props.muscleGroups.join(
          ","
        )}`,
        {
          headers: {
            "X-RapidAPI-Key": "b6486a2244msh6b26351dc2d4ef3p1a6430jsna5b9d93cf69c",
            "X-RapidAPI-Host": "muscle-group-image-generator.p.rapidapi.com",
          },
          responseType: "arraybuffer",
        }
      );

      const imageFile = new Blob([response.data]);
      const imageUrl = URL.createObjectURL(imageFile);
      setImage(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <img
      src={image}
      alt={`Image of ${props.muscleGroups.join(", ")}`}
      style={{ maxWidth: "90%", height: "auto" }}
    />
  );
}
