<h2 class="projects-category">Director / Gaffer</h2>

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
      <p class="project-card__meta">Camel Hoe — Sara Hildonen / Masha Skitseaeiva (2025)</p>
    </div>
  </a>

  <a class="project-card" href="pillow-fort/">
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
      <p class="project-card__meta">Pillow Fort — Atlas Sundvor (2025)</p>
    </div>
  </a>

  <a class="project-card" href="film-3/">
    <div class="project-card__video">
      <iframe
        data-src="https://www.youtube.com/embed/YOUTUBE_ID_3?autoplay=1&mute=1&controls=0&loop=1&playlist=YOUTUBE_ID_3&modestbranding=1"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__play">
      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
    </div>
    <div class="project-card__info">
      <p class="project-card__meta">Filmtittel (2025)</p>
    </div>
  </a>

  <a class="project-card" href="film-4/">
    <div class="project-card__video">
      <iframe
        data-src="https://www.youtube.com/embed/YOUTUBE_ID_4?autoplay=1&mute=1&controls=0&loop=1&playlist=YOUTUBE_ID_4&modestbranding=1"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__play">
      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
    </div>
    <div class="project-card__info">
      <p class="project-card__meta">Filmtittel (2025)</p>
    </div>
  </a>

  <a class="project-card" href="film-5/">
    <div class="project-card__video">
      <iframe
        data-src="https://www.youtube.com/embed/YOUTUBE_ID_5?autoplay=1&mute=1&controls=0&loop=1&playlist=YOUTUBE_ID_5&modestbranding=1"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__play">
      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
    </div>
    <div class="project-card__info">
      <p class="project-card__meta">Filmtittel (2025)</p>
    </div>
  </a>

</div>

<h2 class="projects-category">Producer</h2>

<div class="project-grid">
</div>

<h2 class="projects-category">Other</h2>

<div class="project-grid">

  <a class="project-card" href="other-1/">
    <div class="project-card__video">
      <iframe
        data-src="https://www.youtube.com/embed/YOUTUBE_ID_6?autoplay=1&mute=1&controls=0&loop=1&playlist=YOUTUBE_ID_6&modestbranding=1"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__play">
      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
    </div>
    <div class="project-card__info">
      <p class="project-card__meta">Filmtittel (2025)</p>
    </div>
  </a>

  <a class="project-card" href="other-2/">
    <div class="project-card__video">
      <iframe
        data-src="https://www.youtube.com/embed/YOUTUBE_ID_7?autoplay=1&mute=1&controls=0&loop=1&playlist=YOUTUBE_ID_7&modestbranding=1"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__play">
      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
    </div>
    <div class="project-card__info">
      <p class="project-card__meta">Filmtittel (2025)</p>
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
