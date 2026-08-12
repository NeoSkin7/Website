---
title: "Why Does the Sky Turn Red at Sunset?"
date: 2026-08-12T08:00:00.000Z
draft: "false"
description: You ask, I answer. What gives the sky its colour?
summary: You ask, I answer. What gives the sky its colour?
image: /img/post/sunset/thumb.png
socialimg: /img/post/sunset/thumb.png
tags: ["Physics", "Questions"]
---

This is a very interesting question, and reminds me of a reasonably well-known quote from Philip Plait (in _Bad Astronomy_):

> If a little kid ever asks you just why the sky is blue, you look him or her right in the eye and say, "It's because of quantum effects involving Rayleigh scattering combined with a lack of violet photon receptors in our retinae."

You might, reasonably, think that this is one of the less helpful things that Dr Plait has said - and I would be inclined to agree with you were it not for the fact that this little quote does in fact provide me with an explanation. But, it explains why the sky is _blue_, not _red_.

Another popular account that features Rayleigh scattering is the XKCD webcomic - [number 1145](https://xkcd.com/1145/). This one has the added advantage that it is quite funny, although equally unhelpful.

However, luckily for me, the effect at work is the same. What makes the sky blue in the day also causes the red, pink, and orange tones we see before dusk. So, what is Rayleigh scattering?

## Rayleigh Scattering

Here comes the physics explainer... Light is, as you may know, made up of tiny particles called photons. At the smallest level, these photons are what interact with the world, and we will start by looking at what happens when a single one passes close to an atom.

![Light is both a wave and a particle](/img/post/sunset/light.png)

Photons have oscillating electric fields - the defining feature of light - which cases the electrons in the atom to vibrate at the same frequency (with the frequency related to the wavelength and colour of light). The vibrating electrons, in turn, produce their own light waves with identical properties to the original photon, but random directions of travel.

The random directions of the emitted photons causes the scattering effect that we see, with the original photon disappearing as it transfers its energy first to the electrons and then to the photons they produce, neatly switching one photon for another with a randomly selected direction.

![A diagram of Rayleigh scattering](/img/post/sunset/rayleigh.png)

Rayleigh scattering is governed by the laws of quantum mechanics, meaning that the actual process runs slightly differently to this, with the dual wave-particle properties of light featuring front-and-centre in the counterintuitive reality of the effect. However, this simple explanation gives us enough of an overview for our needs.

There is an equation which describes Rayleigh scattering that is helpful for the rest of this explanation:

$$
I_s=I_0\frac{8\pi^4\alpha^2}{\lambda^4R^2}\left(1+\cos^2\vartheta\right)
$$

This particularly clunky thing gives the relationship between the scattered and input 'light intensities' when interacting with gas particles (made up of atoms). Simply put, the larger $I_s$ is compared to $I_0$, the greater the scattering effect - causing light to be spread out more by particles.

The key point here is that the scattering is dependent on the wavelength of light $\lambda$ and the radius of the gas particles $R$. In fact, to make things slightly easier, I will simplify our equation to:

$$
\frac{I_s}{I_0}=\frac{\kappa}{\lambda^4R^2}\propto\frac{1}{\lambda^4R^2}
$$

Here, most of the horrible formula is hidden in the $\kappa$ symbol (that is $\kappa=8\pi^4\alpha^2\left(1+\cos^2\vartheta\right)$ for the physicists still paying attention), so that we can focus on the main relationships. The part on the right is called a statement of 'proportionality' and removes the constant terms (numbers and quantities) to just show the effects of changing different variables (equation inputs).

![The Rayleigh scattering equation](/img/post/sunset/scattering-eq.png)

We would usually call the fraction on the left a 'flux' and say that it is inversely proportional to wavelength to the power 4 and the radius squared. Or at least that is what my professors would like me to say in this situation. I will call it a flux, but say that the flux decreases as wavelength and radius increase, with wavelength producing a greater effect than the radius.

The radius is fixed for our interactions, as air is mostly made up of nitrogen and oxygen, so we can just focus our efforts on the effect of changing the wavelength of light.

## Why Is the Sky _Blue_?

![The light spectrum](/img/post/sunset/spectrum.png)

Now, what does this equation say about different colours of light? Looking at the light spectrum, red and blue (violet) light sit at opposite ends, with long wavelength red light opposing the short wavelengths of blue light.

This means that red and blue light experience the greatest difference in scattering - a useful comparison point for this explanation:

_Red light_ is not scattered very much by gas particles due to its long wavelength (causing a small scattered flux) and thus reaches the Earth's surface following a straight line path from the Sun.

_Blue light_, meanwhile, experiences a large amount of Rayleigh scattering from its short wavelength and is scattered to reach the ground from many different directions.

Because blue light appears to come from all directions when we look at the sky, our eyes see it as the most intense colour, which explains why the sky is blue during the day. The other point made by Dr Plait is that our eyes are not very sensitive to violet light, explaining why we see blue rather than the violet which experiences the most scattering.

## Why Does the Sky Turn _Red_?

When the Sun gets lower in the sky, the distance light has to travel to get to our eyes increases and the properties which gave blue light an advantage during the day begin to work against it. The longer travel distance means that light experiences more scattering, spreading out the blue light even further than during the day.

As the blue light spreads out, red light remains on its focussed path and ends up being the main colour reaching our eyes when looking at the sky. So, we see reds, oranges, and pinks at sunset.

I hope that answers your question!

> _Question from Kemiru via Instagram._
>
> You can submit your questions on my [contact form](https://neoski.uk/contact) or send them direct to [hello@neoski.uk](mailto:hello@neoski.uk).

---

### Sources

- Helmenstine, A. (2025). Rayleigh Scattering – Definition, Examples, Formula. _Science Notes and Projects_. Available at: [sciencenotes.org/rayleigh-scattering-definition-examples-formula](https://sciencenotes.org/rayleigh-scattering-definition-examples-formula/) [Accessed 12 Aug. 2026].
- Kher, A. (n.d.). Why does the sky turn red at sunrise and sunset? _Time and Date_. Available at: [timeanddate.com/astronomy/red-sunset.html](https://www.timeanddate.com/astronomy/red-sunset.html) [Accessed 12 Aug. 2026].
- National Aeronautics and Space Administration (1998). _Rayleigh Scattering_. [online] NASA. Available at: [acd-ext.gsfc.nasa.gov/anonftp/acd/daac_ozone/Lecture4/Text/Semifinal/rayleigh.html](https://acd-ext.gsfc.nasa.gov/anonftp/acd/daac_ozone/Lecture4/Text/Semifinal/rayleigh.html) [Accessed 12 Aug. 2026].
- Todd, I. (2025). Why the sky is sometimes red. _BBC Sky at Night Magazine_. [online] 6 Aug. Available at: [skyatnightmagazine.com/space-science/red-sky](https://www.skyatnightmagazine.com/space-science/red-sky) [Accessed 12 Aug. 2026].
- Wikipedia Contributors (2001). Rayleigh scattering. In: _Wikipedia_. [online] Wikimedia Foundation. Available at: [en.wikipedia.org/wiki/Rayleigh_scattering](https://en.wikipedia.org/w/index.php?title=Rayleigh_scattering&oldid=1360731485) [Accessed 12 Aug. 2026].
- Yadav, S. and Tripathi, R. (2023). _Rayleigh Scattering Formula_. [online] Formuladen.com. Available at: [formuladen.com/en/rayleigh-scattering-formula/Formula-42271](https://www.formuladen.com/en/rayleigh-scattering-formula/Formula-42271) [Accessed 12 Aug. 2026].

[Read more about how I use Wikipedia.](https://neoski.uk/post/wikipedia)

Image Credit:

- "Sunset at Porto Covo, west coast of Portugal" by Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons [modified]
- "Colorful spectrum simulation" by AirBa, CC BY-SA 3.0, via Wikimedia Commons
