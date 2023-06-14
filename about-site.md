<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/photos/tom.png',
    name: 'Tom Kuyken',
    title: 'Head chef',
    desc: 'Initiative starter for this project, and has written most of the Wiki. ',
    links: [
      { icon: 'github', link: 'https://www.strava.com/athletes/14168591' },
      { icon: { 
        svg: '<svg xmlns="http://www.w3.org/2000/svg" aria-label="Strava" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#fc4c01"/><path fill="#ffffff" d="M120 288L232 56l112 232h-72l-40-96-40 96z"/><path fill="#fda580" d="M280 288l32 72 32-72h48l-80 168-80-168z"/></svg>',
        },
        link: "https://www.strava.com/athletes/14168591/",},
    ]
  },

  {
    avatar: '/photos/fredrik.png',
    name: 'Fredrik Sætereng Fyksen',
    title: 'Sous chef',
    desc: 'Built the tech stack, and contributed to wiki.',
    links: [
      { icon: 'github', link: 'https://www.strava.com/athletes/14168591' },
      { icon: { 
        svg: '<svg xmlns="http://www.w3.org/2000/svg" aria-label="Strava" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#fc4c01"/><path fill="#ffffff" d="M120 288L232 56l112 232h-72l-40-96-40 96z"/><path fill="#fda580" d="M280 288l32 72 32-72h48l-80 168-80-168z"/></svg>',
        },
        link: "https://www.strava.com/athletes/8460625/",},
    ]
  },

  {
    avatar: '/photos/ola.png',
    name: 'Ola Matre',
    title: 'Trainee',
    desc: 'Hasn\'t done shit..',

    links: [
      { icon: 'github', link: 'https://www.strava.com/athletes/14168591' },
      { icon: { 
        svg: '<svg xmlns="http://www.w3.org/2000/svg" aria-label="Strava" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#fc4c01"/><path fill="#ffffff" d="M120 288L232 56l112 232h-72l-40-96-40 96z"/><path fill="#fda580" d="M280 288l32 72 32-72h48l-80 168-80-168z"/></svg>',
        },
        link: "https://www.strava.com/athletes/4370517/",},
    ]
  }
]
</script>

# Our Team

 The development of this wiki is guided by an enthusiastic team, some of whom have chosen to be featured below. 

<VPTeamMembers size="small" :members="members" />

## Contribute

::: info
GitHub is a web-based platform where developers can store, manage, and collaborate on their code and software projects. You need to create a Github account to create issues or send Pull requests.
:::

* Want to add anything to a topic, or disagree with something written? Add a issue to our [issues page](https://github.com/fyksen/tresh.run/issues)
The source of this wiki is accessable on Github. This makes it easy for anyone to add a issue.

* Want to add something to the wiki, or change som spelling? Add a [Pull request](https://github.com/fyksen/tresh.run/pulls)!

* Just want to contact us about something? Send an [email](mailto:fredrik@fyksen.me).
