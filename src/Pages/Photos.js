import "../CSS/gallery.css";

const importAllImages = (r) => r.keys().map(r);
const images = importAllImages(
  require.context("../Images/gallery", false, /\.(jpg|jpeg|png)$/)
);

export default function Photos() {
  return (
    <div class="page concs">
      <div class="subPage">
      <h1 class="titleText purp">Gallery</h1>

        <div class="gallery">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`gallery-item-${index}`} />
          ))}
        </div>
        <a href="/schedule" target="_self" class="tixBtn w-1/4 text-center">
          SEE THE SCHEDULE!!!
        </a>
      </div>
    </div>
  );
}
