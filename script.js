const trendingMovies = [
  { title: "Beyond Earth", img: "https://picsum.photos/300/200?1" },
  { title: "Bottom Gear", img: "https://picsum.photos/300/200?2" },
  { title: "Undiscovered Cities", img: "https://picsum.photos/300/200?3" }
];

const recommendedMovies = [
  { title: "The Great Lands", img: "https://picsum.photos/300/200?4" },
  { title: "The Diary", img: "https://picsum.photos/300/200?5" },
  { title: "Earth's Untouched", img: "https://picsum.photos/300/200?6" },
  { title: "No Land Beyond", img: "https://picsum.photos/300/200?7" },
  { title: "During The Hunt", img: "https://picsum.photos/300/200?8" },
  { title: "Autosport The Series", img: "https://picsum.photos/300/200?9" },
  { title: "Same Answer II", img: "https://picsum.photos/300/200?10" },
  { title: "Below Echo", img: "https://picsum.photos/300/200?11" }
];

function renderMovies(movies, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = movies
    .map(
      (movie) => `
      <div class="card">
        <img src="${movie.img}" alt="${movie.title}" />
        <p>${movie.title}</p>
      </div>
    `
    )
    .join("");
}

renderMovies(trendingMovies, "trending");
renderMovies(recommendedMovies, "recommended");