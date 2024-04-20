/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function useUploadImage() {
  const [thumbnail, setThumbnail] = useState<File>();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (thumbnail) {
      setPreview(URL.createObjectURL(thumbnail));

      return () => {
        URL.revokeObjectURL(preview);
      };
    }
  }, [thumbnail]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setThumbnail(e.target.files[0]);
  };

  return { thumbnail, preview, handleChange }
}

export default useUploadImage;