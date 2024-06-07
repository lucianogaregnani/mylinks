import StyleCard from "./StyleCard";
import { styles } from "../../../../../utils/styles";
import { Style } from "../../../../../types/Style.type";
import StyleLoader from "./StyleLoader";

function StyleSection({
  type,
  loadingStatus,
}: {
  type: Style;
  loadingStatus: boolean;
}) {
  return (
    <article className="flex gap-4 bg-white w-full p-3 rounded-3xl overflow-x-auto">
      {loadingStatus ? (
        <StyleLoader length={Object.keys(styles).length} />
      ) : (
        Object.keys(styles).map((style) => (
          <StyleCard
            key={style}
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
