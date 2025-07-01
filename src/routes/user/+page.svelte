<script lang="ts">
  import { supabase } from '$lib/supabaseClient';

  let user: { email: string | undefined; created_at: string | undefined } | null = null;
  let message = '';
  let title = '';
  let description = '';
  let file: File | null = null;
  let artworks: { title: string; description: string; image_url: string }[] = [];

  // Fetch the currently logged-in user
  const fetchUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      message = `Error: ${error.message}`;
    } else {
      user = { email: data.user?.email, created_at: data.user?.created_at };
      fetchArtworks(); // Fetch artworks after confirming the user is logged in
    }
  };

  // Fetch the user's artworks
  const fetchArtworks = async () => {
    const { data, error } = await supabase.from('artworks').select('*').eq('user_email', user?.email);
    if (error) {
      console.error('Error fetching artworks:', error);
    } else {
      artworks = data;
    }
  };

  // Handle artwork submission with file validation
  const postArtwork = async () => {
    if (!title || !description || !file) {
      message = 'Please fill in all fields and upload a file.';
      return;
    }

    // Validate file type
    if (file.type !== 'image/png') {
      message = 'Only PNG files are allowed.';
      return;
    }

    // Upload the file to Supabase storage
    const fileName = `${Date.now()}-${file.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('artworks') // Replace 'artworks' with your bucket name
      .upload(fileName, file);

    if (uploadError) {
      message = `Error uploading file: ${uploadError.message}`;
      console.error('File upload error:', uploadError);
      return;
    }

    // Get the public URL of the uploaded file
    const { data: { publicUrl } } = supabase.storage.from('artworks').getPublicUrl(fileName);

    // Insert artwork details into the database
    const { error } = await supabase.from('artworks').insert([
      {
        title,
        description,
        image_url: publicUrl, // Use the public URL of the uploaded file
        user_email: user?.email,
      },
    ]);

    if (error) {
      message = `Error: ${error.message}`;
      console.error('Error posting artwork:', error);
    } else {
      message = 'Artwork posted successfully!';
      title = '';
      description = '';
      file = null;
      fetchArtworks(); // Refresh the artworks list
    }
  };

  fetchUser();
</script>

<section class="user-section">
  <h2>User Profile</h2>
  {#if user}
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Created At:</strong> {user.created_at ? new Date(user.created_at).toLocaleString() : 'N/A'}</p>
  {:else}
    <p>{message || 'No user is logged in.'}</p>
  {/if}
</section>

<section class="dashboard-section">
  <h2>Dashboard</h2>
  <form on:submit|preventDefault={postArtwork}>
    <label for="title">Title:</label>
    <input id="title" type="text" bind:value={title} required />

    <label for="description">Description:</label>
    <textarea id="description" bind:value={description} required></textarea>

    <label for="file">Upload PNG File:</label>
    <input id="file" type="file" on:change={(e) => { const target = e.target as HTMLInputElement; if (target && target.files) file = target.files[0]; }} required />

    <button type="submit">Post Artwork</button>
  </form>

  {#if message}
    <p>{message}</p>
  {/if}

  <h3>Your Artworks</h3>
  <div class="artworks-grid">
    {#each artworks as artwork}
      <div class="artwork-card">
        <img src={artwork.image_url} alt={artwork.title} />
        <h4>{artwork.title}</h4>
        <p>{artwork.description}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .user-section, .dashboard-section {
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 1rem;
    max-width: 800px;
    margin: 2rem auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .user-section h2, .dashboard-section h2 {
    margin-bottom: 1rem;
  }
  .dashboard-section form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .dashboard-section input, .dashboard-section textarea {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
  }
  .dashboard-section button {
    background-color: #1abc9c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
  }
  .dashboard-section button:hover {
    background-color: #16a085;
  }
  .artworks-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    margin-top: 2rem;
  }
  .artwork-card {
    background: white;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .artwork-card img {
    width: 100%;
    border-radius: 0.5rem;
  }
</style>