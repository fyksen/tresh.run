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
      { icon: 'github', link: 'https://www.strava.com/athletes/14168591' }
    ]
  },
  {
    avatar: '/photos/fredrik.png',
    name: 'Fredrik Sætereng Fyksen',
    title: 'Sous chef',
    links: [
      { icon: 'github', link: 'https://www.strava.com/athletes/14168591' }
    ]
  },
  {
    avatar: '/photos/ola.png',
    name: 'Ola Matre',
    title: 'Trainee',
    links: [
      { icon: 'github', link: 'https://www.strava.com/athletes/14168591' }
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