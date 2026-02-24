---
title: "The Condemnation of Sisyphus"
date: 2026-02-24T20:00:00.000Z
draft: "false"
description: The tragic story of Sisyphus is one of the most famous tales of Greek mythology, but is there a way Sisyphus could be relieved of his eternal burden? I think so!
summary: The tragic story of Sisyphus is one of the most famous tales of Greek mythology, but is there a way Sisyphus could be relieved of his eternal burden? I think so!
image: /img/post/sisyphus/thumb.png
socialimg: /img/post/sisyphus/thumb.png
---

I was recently thinking about the Greek myth of Sisyphus, the tragic protagonist who pokes fun at the gods and pays the ultimate consequence: eternal damnation. But, what if the story is not quite that simple?

You see, I think that it may - in fact - be possible for Sisyphus to escape from his struggles. How? The laws of physics. But, enough about that…

## The Story

Let us start by first recapping the unfortunate story of Sisyphus. Our knowledge of this bit of Greek mythology comes from Homer's Iliad, which is likely the origin of the story itself:

Sisyphus was an ancient Greek king who lived in Corinth with a reputation for being a trickster; he was described as "the craftiest of men," a title the likes of which I am sure Banksy is envious of!

But, Sisyphus' greatest bit of trickery came when he was called upon by Death, for he chained up Death himself! What did he do to be called upon by Death? Just the usual: he enraged Zeus by claiming that the God had made out with Asopus' daughter (Aegina) - proper gossip.

As Death was chained up, this meant that no one died, which was widely regarded as a good thing. However, Ares eventually came to Death's aid, freeing him from his chains. You can probably guess what happened next: Death came for Sisyphus once again…

![Sisyphus Angered Zeus](/img/post/sisyphus/story.png)

This time, our protagonist was not so lucky, being carted away to Hades (the underworld) by Death for his cunning plan. Now, you probably think this is the end - wrong! Sisyphus had yet another trick up his sleeve. You see, just before Death came for him, he had told his wife Merope not to bury him according to tradition, avoiding the usual funeral customs.

When Sisyphus reached the underworld, he told Death that his wife had done great evil in not holding a proper funeral, convincing Death to allow him to return home to punish his wife. When he reached home, it will not surprise you to learn that Sisyphus did not punish Merope and return to Hades - after all, who would?

This time, Sisyphus had truly fooled Death and lived into old age! All good things must come to an end, though, and eventually he died of that old age and returned to the underworld with Death. The Gods, understandably, were furious and condemned Sisyphus to push a boulder up a hill for the rest of eternity.

But, I think there is a way that eternity might not mean _eternity_. There might be a clever escape for Sisyphus…

## Physics

So, I said that Sisyphus might be able to escape from eternal damnation - just how did I come to that realisation?

Well, if Hades is all it's cracked up to be, the Gods would have wanted for Sisyphus' challenge to be as hard as possible. Which means they did not ignore friction - adding to the difficulty of the task.

If we take friction into account, as the Gods (probably) did, then the boulder (and the ground…) would wear away from the constant force exerted by Sisyphus. This means that, eventually, the boulder will cease to exist and our scrappy protagonist will be free from damnation! But, just how long will this take?

The equation that we need to use is Archard's Law:

$$
\frac{\mathrm{d}V}{\mathrm{d}s}=k\frac{L}{3\sigma_y}
$$

which says that the change in volume $V$ of the boulder per unit distance $s$ (in this case $\unit[1]{m}$), $\frac{\mathrm{d}V}{\mathrm{d}s}$, is equal to the load applied $L$ divided by 3 times the yield stress $\sigma_y$, with constant $k$ called the wear coefficient[^1] [^5] [^7].

Now, that all sounds like a lot! Let me break down each term:

![Archard's Law](/img/post/sisyphus/archard-law.png)

### The Wear Coefficient

The wear coefficient $k$ is a number that relates our result $\frac{\mathrm{d}V}{\mathrm{d}s}$ to the things on the right hand side and is a value that we can find experimentally. However, I am not blessed with unlimited resources to go out and take measurements of rock friction (give me a grant please!), so we are going to have to make some assumptions.

The first assumption I will make is the type of rock that Sisyphus is condemned to push: granite. As Homer did not state what type of rock the boulder was made of, I have assumed the worst possible scenario and chosen the hardest rock that could reasonably be used. This assumption will be important later too, but for now we just need to work out a value for the wear coefficient.

The value of the wear coefficient is specific to a material, and there are often even differences in the experimental value between different samples of the same material[^6]. Once again, I cannot experiment with samples, so this means that I have to make more assumptions: in this case that the boulder is uniform and that there is very little difference in the wear coefficient between granite samples (samples are also uniform).

With all this taken into account, a bit of searching gives me a value for $k$ of $\unitfrac[0.0017]{mg}{Nm}$[^3] or $\unitfrac[1.7\times10^{-9}]{kg}{Nm}$ (the units used here are chosen so the equation make sense). Phew!

### Applied Load

The second part of Archard's Law is the 'applied load' $L$ which is a fancy way of stating how much force pushes the boulder into the surface. This is a bit more complicated to calculate, and, would you believe it? We need to make more assumptions!

We first need to establish what causes the load, so we will have to draw a diagram of the setup involved, which looks something like this:

![Always Draw a Diagram](/img/post/sisyphus/setup.png)

The boulder, which I have handily represented as a box, sits on a slope angled at $\vartheta$ to the ground. The forces acting on the boulder have been drawn as arrows; the weight acts downwards towards the floor with a magnitude of the mass $m$ multiplied by the gravitational field strength $\mathrm{g}$ - $m\mathrm{g}$. Then, Sisyphus pushes up the slope with a force $P$ whilst friction $F$ acts down the slope.

By Newton's Third Law (explained below), we also have a force of the slope pushing back against weight, called the normal force - represented by $N$. The other forces drawn in the diagram are ‘components' of the main forces, which will be useful later: $L$ is the load we are interested in, and $W$ is the component of weight acting down the slope - the force of gravity which is trying to slide the boulder towards the floor.

![Resolving the Forces](/img/post/sisyphus/components.png)

With our forces defined, how do we calculate the applied load? Here is where the assumptions come back: we first need to know the mass (for the weight) of the boulder. Again, Homer is not particularly helpful, but the average maximum pushing force is $\unit[250]{N}$[^4] for males ($\unit{N}$ is for Newtons, the unit of force), so we can use this as the force $P$.

Putting this together gives the equation:

$$
P=F+W
$$

which we can expand as $W$ is the component of gravity equal to $m\mathrm{g}\sin{\vartheta}$ by trigonometry and $F$ is the friction equal to $\mu N$, with $\mu$ being the coefficient of friction describing how rough the surface is:

$$
P=\mu N+m\mathrm{g}\sin{\vartheta}
$$

But, using Newton's Third Law again, $N=L=m\mathrm{g}\cos{\vartheta}$ as they ($N$ and $L$) are the only forces acting vertically:

$$
P=\mu m\mathrm{g}\cos{\vartheta}+m\mathrm{g}\sin{\vartheta}
$$

The unknowns in this equation are $m$ - which we are trying to calculate - $\mu$ and $\vartheta$. We can tackle $\mu$ first by assuming that Sisyphus is on a rather steep slope with an incline of $15^\circ$, which I have chosen as the steepest street in the world is a $20^\circ$ slope[^8] and I suspect that this is slightly too much for a consistent $\units[250]{N}$ force (to be fair, $15^\circ$ is probably still too much, but I think this is a fair assumption).

> ### Newton’s Third Law
>
> I have mentioned Newton's Third Law quite a bit here, but what actually is it? Well, to put it simply, every force you apply has an equal and opposite reaction - if you push against something, it pushes back on you with an equal force.
>
> This offers an explanation for why we do not simply sink through the ground, as the force we apply onto the Earth is balanced by the one that it pushes back on you, allowing us to walk on the surface of the Earth instead of wading through the ground.
>
> For our equation, we can use Newton's Third Law to say that the force acting on the slope because of the boulder's weight is balanced by a reaction force, which we call the normal force. Once again, this prevents the boulder from being pulled through the slope.

Then, the coefficient of friction depends not only on the material of the boulder, but also on the material of the slope. For maximal pain, I have opted for the slope to also be made of granite so that the slope does not erode before the boulder! Consulting the internet gives $\mu$ as $0.95$ for granite on granite[^3].

![What Have We Assumed?](/img/post/sisyphus/assumptions.png)

We are now in the position to actually do a calculation! Let us attempt to find the mass of the boulder. The first step is to rearrange our expression for $P$ to find the mass:

$$
P=\mu m\mathrm{g}\cos{\vartheta}+m\mathrm{g}\sin{\vartheta}\implies m=\frac{P}{\mu\mathrm{g}\cos{\vartheta}+\mathrm{g}\sin{\vartheta}}
$$

And, substituting in the values I assumed, this gives the mass as $\unit[30.397]{kg}$.

Now, can you remember what we needed the mass for? We needed it for the load! The equation I gave you before for this was:

$$
L=m\mathrm{g}\cos{\vartheta}
$$

For a gradient of $15^\circ$ and a mass of $\unit[30.397]{kg}$, this works out as $\unit[288.03]{N}$. Wow! That was a lot of work…

### Yield Stress

Now for something a bit easier! The yield stress is the stress (force per unit area) that an object can resist before permanently deforming and breaking. This another value which we can conveniently just grab straight from a search: $\unit[310]{MPa}$[^2] or $\unit[3.1\times10^8]{Pa}$ is the largest value for granite (here $\unit{Pa}$ is for Pascals, the unit of stress as force per unit area) - again assuming the hardest possible job for Sisyphus.

### The Result

We are now within touching distance of the answer, we just need to do the big calculation with Archard's Law and then work out the time for the boulder to erode. That big calculation gives a final value of $\unitfrac[5.2651\times10^{-16}]{m^{3}}{m}$ for the volume worn away by Sisyphus per metre.

![And, Finally...](/img/post/sisyphus/archard-calc.png)

So, how do we calculate how long it takes for the boulder to fully erode? With one more assumption and a bit more mathematics!

First of all, we need to work out what equation to use to find the time, this looks something like this:

$$
t=\frac{V}{v\frac{\mathrm{d}V}{\mathrm{d}s}}
$$

where we can find the erosion time $t$ by dividing the total volume $V$ of the boulder by the amount of volume eroded in one second. We find the erosion volume per unit time by multiplying our Archard's Law result by the speed of Sisyphus, as the speed $v$ is simply the distance moved in one second. The speed is our final assumption: I chose $\unitfrac[1]{m}{s}$ as a casual walking pace and reasonable continuous strenuous pushing rate - although this is probably optimistic!

> ### Understanding Speed
>
> Speed is an incredibly useful quantity which describes the rate at which things move. You probably already have an intuitive understanding of how this works, so I will keep my explanations brief!
>
> The key idea is that we can calculate the change of distance with time, which we call speed. In practice, this is done by measuring how far something travels during a certain amount of time and then dividing by that time, giving:
>
> $$
> v=\frac{s}{t}
> $$
>
> or speed $v$ is equal to distance $s$ divided by time $t$.
>
> I will highlight that this is not what your car does! When reading a speedometer, you are in fact reading the current power produced by the engine of your car - how many revolutions it produces per minute, measured using a fancy sensor. Your speedometer is calibrated against this power measurement and this means that it can sometimes be wrong, so make sure your car is serviced regularly!
>
> For our use of speed here, you might be able to see that multiplying the speed by the change in volume for unit distance gives us the change in volume per unit time:
>
> $$
> \frac{\mathrm{d}V}{\mathrm{d}t}=\frac{\mathrm{d}V}{\mathrm{d}s}\frac{\mathrm{d}s}{\mathrm{d}t}
> $$
>
> where all of the $\mathrm{d}$s used here signify small changes in the quantities they are in front of - for example a small change in distance is $\mathrm{d}s$.

Finally, we do not yet know the volume so we need to calculate it from the mass we found earlier. The density $\rho$ of granite from the internet is $\unitfrac[2660]{kg}{m^3}$[^2], which we can plug into the density formula below:

$$
\rho=\frac{m}{V}\implies V=\frac{m}{\rho}
$$

This gives a value of $\unit[0.011428]{m^3}$.

Putting everything together, our final result is (drumroll please): $\unit[2.1705\times10^{13}]{s}$, or $\unit[687800]{years}$!

### Interpretation

This result, $\unit[687800]{years}$ might seem like a long time, but it is most definitely shorter than Sisyphus was condemned for: eternity! Eternity is an awfully long time.

However, I am not quite done…

## Closing Comments

There are a number of things we can say about this result, some philosophical and some physical. The job of a physicist is to accurately predict nature, not explain why it works, and I think that this applies here too!

This exercise involved making many assumptions on Homer's behalf, mostly because writers do not intend for their work to be taken literally. We cannot say, for example, that the Gods would not simply give Sisyphus another boulder after wearing one away, or that it simply did not erode following our model. This is incredibly disheartening, for both us and - more importantly - Sisyphus, sorry…

![Though Provoking?](/img/post/sisyphus/philosophy.png)

We can, however, say that this is a great exercise in thinking critically about the information we are presented with - is everything reasonable? Surely not! Life would be boring if we never challenge what are presented as truths. This rather trivial example has taught me, and I hope you, how to think about erosion and the forces involved in pushing uphill. We have explored the concept of rate and the fantastic skill of making assumptions, alongside performing careful calculations and the importance of diagrams. What I am trying to say is: was this interesting? If it was, it was not the story that gripped you, but the sheer force of physics (excuse the pun), and that was my goal!

I leave you now with a few considerations, exercises for you;

### The Problem of Erosion

You may remember that I remarked about the ground in our discussion of friction. This was no coincidence. You see, if the boulder is eroded by friction, so too is the ground. From the assumptions that we made, both the boulder and the ground are made of granite, which means that the wear rate on the slope will be identical to that of the boulder.

What does this mean? Well, the challenge faced by Sisyphus may become easier if the wear reduces the angle of the slope. And, if the boulder is replaced, eventually the ground will erode away completely and Sisyphus will simply be rolling a boulder along a flat surface - a much easier task! My question to you is: does the erosion of the slope matter? What assumptions can we make to suggest different alternatives?

Another interesting problem is that the wear rate is actually not a constant, as the applied load is dependant on the mass of the boulder - which changes as it erodes away. This makes the calculation a lot more complicated, and is considerably more interesting to physicists than the simple analysis I have completed here!

This problem is not one which I pose to you, but if any physicists are interested, the equation for the applied load under our assumptions so far becomes this, accounting for a changing mass:

$$
L=\rho\mathrm{g}\left(V_i-\frac{\mathrm{d}V}{\mathrm{d}s}v\right)\cos{\vartheta}
$$

with $V_i$ equalling the initial volume of the boulder, 0.011428 m cubed. Archard's Law is then:

$$
\frac{\mathrm{d}V}{\mathrm{d}s}=\frac{k}{3\sigma_y}\rho\mathrm{g}\left(V_i-\frac{\mathrm{d}V}{\mathrm{d}s}v\right)\cos{\vartheta}
$$

forming a differential equation.

![Give This a Go!](/img/post/sisyphus/better-model.png)

I add this last point as a technicality, to show that problems are often more complicated than they first appear. In this case, the final rate of volume change is quite easily calculable - at least from my first glance. But, I have already done way too much mathematics for this article, so I hope that some brave soul will complete the necessary calculations for me!

Bonus points are to be awarded for spotting the assumptions I have neglected to mention…

---

### Sources

References:

[^1]: Delaney, B. and Wang, Q.J. (2025). Archard’s Law: Foundations, Extensions, and Critiques. Encyclopedia, [online] 5(3), p.124. doi:https://doi.org/10.3390/encyclopedia5030124.

[^2]: Matmake (2018). Properties of Granite. [online] Matmake. Available at: https://matmake.com/materials-data/granite-properties.html [Accessed 24 Feb. 2026].

[^3]: Sukhomlinov, S.V., Müser, M.H. and Persson, J. (2026). Granite sliding on granite: friction, wear rates, surface topography, and the scale-dependence of rate-state effects. arXiv: Physics Geophysics. [online] doi:https://doi.org/10.48550/arXiv.2512.01765.

[^4]: Welly (2025). How many newtons is a normal push? Understanding human force. [online] Welly. Available at: https://welly.it.com/how-many-newtons-is-a-normal-push [Accessed 24 Feb. 2026].

[^5]: Wikipedia Contributors (2020). Abrasion (mechanical). [online] Wikipedia. Available at: https://en.wikipedia.org/wiki/Abrasion_(mechanical) [Accessed 24 Feb. 2026].

[^6]: Wikipedia Contributors (2021). Wear coefficient. [online] Wikipedia. Available at: https://en.wikipedia.org/wiki/Wear_coefficient [Accessed 24 Feb. 2026].

[^7]: Wikipedia Contributors (2023). Archard equation. [online] Wikipedia. Available at: https://en.wikipedia.org/wiki/Archard_equation [Accessed 24 Feb. 2026].

[^8]: Wikipedia Contributors (2023). List of steepest roads and streets. [online] Wikipedia. Available at: https://en.wikipedia.org/wiki/List_of_steepest_roads_and_streets [Accessed 24 Feb. 2026].

Story Sources:

- Britannica Editors (2018). Sisyphus. In: Encyclopædia Britannica. [online] Available at: https://www.britannica.com/topic/Sisyphus [Accessed 24 Feb. 2026].
- Kapach, A. (2022). Sisyphus. [online] Mythopedia. Available at: https://mythopedia.com/topics/sisyphus/ [Accessed 24 Feb. 2026].

[Read more about how I use Wikipedia.](https://neoski.uk/post/wikipedia)

Image and Video Credit:

- "Sisyphus" by Antonio Zanchi, Public domain, via Wikimedia Commons [modified]
- "Hermaic Stele of Zeus" by George E. Koronaios, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons
- "Pyxis of Zeus and Aigina" by Caeciliusinhorto, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons
