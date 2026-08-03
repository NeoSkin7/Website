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

{{</rawhtml>}}

{{<rawhtml>}}

<br style="clear: both">
<br>

<center>
    <a rel="nofollow" href="https://link.neoski.uk/letterboxd">View more on <img alt="Letterboxd" style="border:0" src="https://a.ltrbxd.com/logos/letterboxd-logo-h-neg-rgb.svg" class="v-mid" /> →</a>
  </center>
{{</rawhtml>}}
