---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/photos/tom.png',
    name: 'Tom Kuyken',
    title: 'Head chef',
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

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of this wiki is guided by an enthusiastic team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>