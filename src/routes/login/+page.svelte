<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let message = '';

  const loginUser = async () => {
    if (!email || !password) {
      message = 'Please enter both email and password.';
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(), // Trim to remove any accidental spaces
      password: password.trim(),
    });

    if (error) {
      message = `Error: ${error.message}`;
      console.error('Login error:', error);
    } else {
      message = 'Login successful!';
      goto('/user'); // Redirect to the user page
    }
  };
</script>

<section class="login-section">
  <h2>Login</h2>
  <form on:submit|preventDefault={loginUser}>
    <label for="email">Email:</label>
    <input id="email" type="email" bind:value={email} required />

    <label for="password">Password:</label>
    <input id="password" type="password" bind:value={password} required />

    <button type="submit">Login</button>

    <a href="/register" class="register-link">Don't have an account? Register here</a>
  </form>
  {#if message}
    <p>{message}</p>
  {/if}
</section>

<style>
  .login-section {
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 1rem;
    max-width: 400px;
    margin: 2rem auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .login-section h2 {
    margin-bottom: 1rem;
  }
  .login-section form {
    display: flex;
    flex-direction: column;
  }
  .login-section label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  .login-section input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
  }
  .login-section button {
    background-color: #1abc9c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
  }
  .login-section button:hover {
    background-color: #16a085;
  }
  .login-section p {
    margin-top: 1rem;
    color: #2c3e50;
  }
</style>