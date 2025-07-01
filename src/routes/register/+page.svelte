<script lang="ts">
    import { supabase } from '$lib/supabaseClient';
    import { goto } from '$app/navigation';
    
    let email = '';
    let password = '';
    let message = '';
  
    const registerUser = async () => {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        message = `Error: ${error.message}`;
      } else {
        message = 'User registered successfully! Please check your email to confirm your account.';
      }
    };
  
    const navigateToLogin = () => {
      goto('/login');
    };
  </script>
  





<!-- User Registration Form -->
<section class="registration-section">
    <h2>Register</h2>
    <form on:submit|preventDefault={registerUser}>
      <label for="email">Email:</label>
      <input id="email" type="email" bind:value={email} required />
  
      <label for="password">Password:</label>
      <input id="password" type="password" bind:value={password} required />
  
      <button type="submit">Register</button>
    </form>
    {#if message}
      <p>{message}</p>
    {/if}
    <p>Already have an account? <a href="/login">Login here</a></p>
  </section>
<style>
  /* Styling for Registration Section */
  .registration-section {
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 1rem;
    max-width: 400px;
    margin: 2rem auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .registration-section h2 {
    margin-bottom: 1rem;
  }
  .registration-section form {
    display: flex;
    flex-direction: column;
  }
  .registration-section label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  .registration-section input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
  }
  .registration-section button {
    background-color: #1abc9c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
  }
  .registration-section button:hover {
    background-color: #16a085;
  }
  .registration-section p {
    margin-top: 1rem;
    color: #2c3e50;
  }
</style>

