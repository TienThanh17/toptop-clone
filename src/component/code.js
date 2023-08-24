import { useEffect } from "react";
import { useState } from "react";
import style from "./code.module.css";
import clsx from "clsx";

const Code = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    console.log("clean up")
    return () => image && URL.revokeObjectURL(image.preview);
  }, [image])

  const handleChoose = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };

  return (
    <div>
      <input type="file" onChange={handleChoose} className={style.inputFile} />
      {image && <img src={image.preview} width="100%"></img>}
    </div>
  );
};

export default Code; 
