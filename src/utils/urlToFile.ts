async function urlToImage(url: string) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  return new File([buffer], "", { type: "img/jpeg" });
}

export default urlToImage;
