import StyleCard from "./StyleCard";
import { styles } from "../../../../../utils/styles";
import { Style } from "../../../../../types/Style.type";
import useStyleType from "../hooks/useStyleType";

function StyleSection() {
  const { type, typeLoadingStatus } = useStyleType();

  return (
    <article className="flex gap-4 bg-white w-full p-3 rounded-3xl">
      {typeLoadingStatus ? (
        <p>Cargando...</p>
      ) : (
        Object.keys(styles).map((style) => (
          <StyleCard
            isSelected={style === type}
            text={style as Style}
            bgColor={styles[style as Style].background}
          />
        ))
      )}
    </article>
  );
}

export default StyleSection;
