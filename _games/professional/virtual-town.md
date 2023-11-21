---
layout:      project_custom
title:       Virtual Town
category:    games
tags:        professional
genres:      Metaverso
image:
  path:      /assets/img/projects/virtual-town.jpg
  #srcset:
    #1920w:   /assets/img/projects/hyde-v2.jpg
    #960w:    /assets/img/projects/hyde-v2@0,5x.jpg
    #480w:    /assets/img/projects/hyde-v2@0,25x.jpg
# video:       https://www.youtube.com/embed/lY6tEi-s06U?si=GPZJOztngnI78tRf
order: 3
stores:
  site:      https://virtual.town/virtualtown/
tools:       unity,dot-net
platforms:   webgl,android,ios
featured:    false
---
<!-- This is commented out. -->

**Virtual Town** is a *metaverse platform* created in Unity by [**VRGlass**][vrglass].

Distributed as [*SAAS*][sass], the platform offers several possibilities for customization and integrations with different types of services.

***

## My Contribution
As a metaverse platform, this project pushed me out of my comfort zone and brought back memories of my backend days.

Here is a list of what I worked on:
- I collaborated with other programmers on the *project's refactoring*. Our goal was to transition the project into a *modular platform*, using *addressables* and *creating libraries* with the behaviours of the main project.

- I was appointed to set up an internal company [*npm registry*][npmregistry] server. After selecting which one we were going to use, I had to make changes in all of the *project modules* to turn them into *packages* and upload them to the server. I also configured Unity to show all existing packages in the *registry server*.

- I worked on *fixing* some of the company's *minigames*. Most of them were *multiplayer* and it also required some modifications in the *multiplayer server*.

- Lastly, I collaborated with a team to create a *user-friendly 3D Environment Generator* what would be accessible to the clients. This would allow clients to independently create their own environments in a *sandbox* scene.

Despite the challenges, this period was truly rewarding. The company had a wonderful team and it was a great experience.

***

## Responsibilities
- *Refactoring* of the main project using [*Addressables*][addressables] and [*Packages*][unitypackages]
- Implementation of a internal [*npm registry*][npmregistry] server
- Creation of *modules* (and modification of existent ones) to perform as standalone libraries
- Enhancements and *bug fixes* for company's *minigames*
- Minor adjustments to the *multiplayer server*
- Creation of the *sandbox* functionality (3D environment generator)

[vrglass]: https://vrglass.com/
[sass]: https://en.wikipedia.org/wiki/Software_as_a_service
[npmregistry]: https://docs.npmjs.com/cli/v8/using-npm/registry
[addressables]: https://docs.unity3d.com/Manual/com.unity.addressables.html
[unitypackages]: https://docs.unity3d.com/Manual/PackagesList.html