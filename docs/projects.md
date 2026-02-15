<div class="projects-header">
  <h1>Projects</h1>
</div>

<div class="project-grid">

  <a class="project-card" href="camel-hoe/">
    <img class="project-card__thumb" src="assets/images/camel-hoe-thumb.jpg" alt="Camel Hoe">
    <div class="project-card__video">
      <iframe
        data-src="https://www.youtube.com/embed/YOUTUBE_ID_1?autoplay=1&mute=1&controls=0&loop=1&playlist=YOUTUBE_ID_1&modestbranding=1"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__play">
      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
    </div>
    <div class="project-card__info">
      <p class="project-card__title">Camel Hoe</p>
      <p class="project-card__meta">Sara Hildonen / Masha Skitseaeiva &mdash; 2025 &nbsp;&middot;&nbsp; Director of Photography</p>
    </div>
  </a>

  <a class="project-card" href="pillow-fort/">
    <img class="project-card__thumb" src="assets/images/pillow-fort-thumb.jpg" alt="Pillow Fort">
    <div class="project-card__video">
      <iframe
        data-src="https://www.youtube.com/embed/YOUTUBE_ID_2?autoplay=1&mute=1&controls=0&loop=1&playlist=YOUTUBE_ID_2&modestbranding=1"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__play">
      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
    </div>
    <div class="project-card__info">
      <p class="project-card__title">Pillow Fort</p>
      <p class="project-card__meta">Atlas Sundvor &mdash; 2025 &nbsp;&middot;&nbsp; Director of Photography</p>
    </div>
  </a>

  <!-- Legg til flere prosjekter her med samme struktur -->

</div>

<script>
/* Hover-to-play: last inn iframe src kun ved hover */
document.querySelectorAll('.project-card').forEach(card => {
  const iframe = card.querySelector('iframe');
  let loaded = false;

  card.addEventListener('mouseenter', () => {
    if (iframe && !loaded) {
      iframe.src = iframe.dataset.src;
      loaded = true;
    }
  });

  card.addEventListener('mouseleave', () => {
    if (iframe) {
      /* Reset iframe for å stoppe avspillingen */
      const src = iframe.src;
      iframe.src = '';
      loaded = false;
      setTimeout(() => { /* klargjort for neste hover */ }, 100);
    }
  });
});
</script>
