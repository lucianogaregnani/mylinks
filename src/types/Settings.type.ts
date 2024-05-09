import { Style } from "./Style.type";

export interface Setting {
  id: string;
  type: Style;
  username: string;
  title: string;
  userId?: string;
}
