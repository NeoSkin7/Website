---
title: "Films"
subtitle: What have I watched?
summary: Read my recent film reviews.
image: "/img/cogs.webp"
socialimg: /img/cogs.webp
---

## My Recent Film Reviews

{{<rawhtml>}}

<div id="letterboxd-embed-wrapper-tc">Loading...</div>
<script>
  fetch('https://lb-embed-content.bokonon.dev?username=neoski')
  .then(response => response.text())
  .then(data => {
    document.getElementById('letterboxd-embed-wrapper-tc').innerHTML = data;
  });
</script>

<style>
  .letterboxd-embed-tc-footer,
  .letterboxd-embed-tc-divider:last-of-type {
    display: none;
  }

  .letterboxd-embed-tc-title {
    font-family: var(--title-font);
    text-transform: uppercase;
    font-size: 1.25rem;
  }

  .letterboxd-embed-tc-year {
    color: var(--grey-4);
    font-size: 0.875rem;
  }

  .letterboxd-embed-tc-date {
    color: var(--grey-4);
    font-size: 0.875rem;
  }

  .letterboxd-embed-tc-review {
    color: var(--black);
    font-size: 0.875rem;
  }
</style>

{{</rawhtml>}}

{{<rawhtml>}}

<br style="clear: both">

<center>
    <a rel="nofollow" href="https://link.neoski.uk/letterboxd"><img alt="Letterboxd" style="border:0" src="https://a.ltrbxd.com/logos/letterboxd-logo-h-neg-rgb.svg" class="v-mid raise w-20" /></a>
  </center>
{{</rawhtml>}}
