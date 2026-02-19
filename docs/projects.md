<h2 class="projects-category">Director / Gaffer</h2>

<div class="project-grid">

  <a class="project-card" href="oracle/">
    <div class="project-card__thumbnail">
      <div style="background: #222; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #999; font-size: 14px;">Oracle</div>
    </div>
    <div class="project-card__video">
      <iframe
        data-src="https://drive.google.com/file/d/1U0nDwRXajUllmOyMOHaIpfCS4E7_QOwi/preview"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__play">
      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
    </div>
    <div class="project-card__info">
      <p class="project-card__meta">Oracle (2025)</p>
    </div>
  </a>

  <a class="project-card" href="camel-hoe/">
    <div class="project-card__thumbnail">
      <img src="https://img.youtube.com/vi/eyabwMCRvYk/maxresdefault.jpg" alt="Camel Hoe">
    </div>
    <div class="project-card__video">
      <iframe
        data-src="https://www.youtube.com/embed/eyabwMCRvYk?autoplay=1&mute=1&controls=0&loop=1&playlist=eyabwMCRvYk&modestbranding=1"
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

  <a class="project-card" href="web/">
    <div class="project-card__thumbnail">
      <img src="https://img.youtube.com/vi/TwKqE8Oni9Q/maxresdefault.jpg" alt="Web">
    </div>
    <div class="project-card__video">
      <iframe
        data-src="https://www.youtube.com/embed/TwKqE8Oni9Q?autoplay=1&mute=1&controls=0&loop=1&playlist=TwKqE8Oni9Q&modestbranding=1"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__play">
      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
    </div>
    <div class="project-card__info">
      <p class="project-card__meta">Web — Edy Orr Edwig (2023)</p>
    </div>
  </a>

  <a class="project-card" href="noe-til-kaffen/">
    <div class="project-card__thumbnail">
      <img src="https://img.youtube.com/vi/GBwhTfMuHWo/maxresdefault.jpg" alt="Noe til kaffen">
    </div>
    <div class="project-card__video">
      <iframe
        data-src="https://www.youtube.com/embed/GBwhTfMuHWo?autoplay=1&mute=1&controls=0&loop=1&playlist=GBwhTfMuHWo&modestbranding=1"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__play">
      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
    </div>
    <div class="project-card__info">
      <p class="project-card__meta">Noe til kaffen — Sara Hildonen (2024)</p>
    </div>
  </a>

  <a class="project-card" href="phaenotyp/">
    <div class="project-card__thumbnail">
      <img src="https://img.youtube.com/vi/erxkNA9QGq0/maxresdefault.jpg" alt="Phaenotyp">
    </div>
    <div class="project-card__video">
      <iframe
        data-src="https://www.youtube.com/embed/erxkNA9QGq0?autoplay=1&mute=1&controls=0&loop=1&playlist=erxkNA9QGq0&modestbranding=1"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__play">
      <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
    </div>
    <div class="project-card__info">
      <p class="project-card__meta">Phaenotyp // Moon Saloon (Music Video)</p>
    </div>
  </a>

</div>

<h2 class="projects-category">Producer</h2>

<div class="project-grid">
</div>

<h2 class="projects-category">Other</h2>

<div class="project-grid">

  <a class="project-card" href="ashes/" target="_blank">
    <div class="project-card__thumbnail">
      <div style="background: #222; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #999; font-size: 14px;">Ashes</div>
    </div>
    <div class="project-card__video">
      <div style="background: #222; width: 100%; height: 100%;"></div>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__info">
      <p class="project-card__meta">Ashes — Runner</p>
    </div>
  </a>

  <a class="project-card" href="unter-haien/" target="_blank">
    <div class="project-card__thumbnail">
      <div style="background: #222; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #999; font-size: 14px;">Unter Haien</div>
    </div>
    <div class="project-card__video">
      <div style="background: #222; width: 100%; height: 100%;"></div>
    </div>
    <div class="project-card__overlay"></div>
    <div class="project-card__info">
      <p class="project-card__meta">Unter Haien / Still Waters — Guilherme Caeiro (2025)</p>
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
