import { Link } from "../types/Link.type";

interface changeLinkProperty {
  links: Link[];
  linkId: string;
  property: "title" | "thumbnailUrl" | "link";
  newProperty: string;
}

function changeLinkProperty({
  links,
  property,
  newProperty,
  linkId,
}: changeLinkProperty) {
  const linksAux = links.map((link) => ({ ...link }));
  const linkIndex = linksAux.findIndex((link) => link.id === linkId);
  const linkAux = linksAux[linkIndex];

  linkAux[property] = newProperty;

  linksAux[linkIndex] = linkAux;

  return linksAux;
}

export default changeLinkProperty;
