<template>
    <div class="newsletter">
      <form @submit.prevent="subscribe">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
      };
    },
    methods: {
      async subscribe() {
        try {
          const username = 'listmonk';
          const password = import.meta.env.VITE_LISTMONK_PASSWORD; // Load password from .env
  
          const response = await fetch(
            'https://listmonk.tresh.run/api/subscribers',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + btoa(username + ':' + password),
              },
              body: JSON.stringify({
                email: this.email,
                name: this.name,
                status: 'enabled',
                lists: [4],
              }),
            }
          );
  
          if (response.ok) {
            alert('You have been subscribed to our newsletter!');
            this.name = '';
            this.email = '';
          } else {
            alert('Failed to subscribe. Please try again later.');
          }
        } catch (error) {
          console.error(error);
          alert('An error occurred. Please try again later.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .newsletter {
    color: var(--vp-c-text-1);
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
  }
  
  input[type="text"],
  input[type="email"] {
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid var(--vp-c-border);
  }
  
  button {
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    border-radius: 4px;
    background-color: var(--vp-c-brand);
    color: var(--accent-text-color);
    border: none;
  }
  
  button:hover {
    background-color: var(--vp-c-brand-dark);
  }
  
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  