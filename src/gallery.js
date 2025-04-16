const importAll = (r) => {
  return r.keys().map((key, index) => ({
    id: index + 1,
    name: key.replace("./", ""),
    src: r(key),
  }));
};

const galleryPhotos = importAll(
  require.context("./assets/gallery", false, /\.(jpe?g)$/)
);

export default galleryPhotos;
