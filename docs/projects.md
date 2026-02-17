<div class="project-grid">

  <a class="project-card" href="camel-hoe/">
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
      <p class="project-card__title">Camel Hoe — Sara Hildonen / Masha Skitseaeiva (2025)</p>
      <p class="project-card__meta">Role: Director of Photography</p>
    </div>
  </a>

  <a class="project-card" href="pillow-fort/">
    <div class="project-card__video">
      <iframe
        data-src="https://www.youtube.com/embed/YOUTUBE_ID_2?autoplay=1&mute=1x&controls=0&loop=1&playlist=YOUTUBE_ID_2&modestbranding=1"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__play">
      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
    </div>
    <div class="project-card__info">
      <p class="project-card__title">Pillow Fort — Atlas Sundvor (2025)</p>
      <p class="project-card__meta">Role: Director of Photography</p>
    </div>
  </a>

</div>

<script>
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
      iframe.src = '';
      loaded = false;
    }
  });
});
</script>

<h2 class="projects-category">Director / Gaffer</h2>

<div class="project-grid">
  <!-- dine eksisterende kort her -->
</div>

<h2 class="projects-category">Producer</h2>

<div class="project-grid">
  <!-- kort her -->
</div>

<h2 class="projects-category">Other</h2>

<div class="project-grid">
  <!-- kort her -->
</div>
