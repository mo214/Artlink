<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let message = '';

  const navigateToLogin = () => {
    goto('/login');
  };
</script>

<!-- Header section -->
<header class="header">
  <h1 class="logo">ArtWorld</h1>
  <button class="login-button" on:click={navigateToLogin}>Login / Sign In</button>
</header>

<!-- Hero section -->
<section class="hero">
  <h1>Welcome to ArtWorld</h1>
  <p>Discover amazing artworks from talented artists!</p>
</section>

<!-- Anime Artists section -->
<section class="anime-artists-section">
  <h2>Anime Artists</h2>
  <div class="grid">
    <div class="card">
      <img src="/1000_F_770051404_DpwvXlQkeoI8NeibI0BmWZDK3AZTrrrJ.jpg" alt="Anime Art 1" />
      <h3>YukiDraws</h3>
      <p class="art-piece-title">Art Piece Title</p>
      <a href="/artist/yuki">View Portfolio</a>
    </div>
    <div class="card">
      <img src="/maxresdefault.jpg" alt="Anime Art 2" />
      <h3>HanaArt</h3>
      <p class="art-piece-title">Art Piece Title</p>
      <a href="/artist/hana">View Portfolio</a>
    </div>
    <div class="card">
      <img src="/yce_ai_anime_topbanner_mb_01_a51ba67c67.jpg" alt="Anime Art 3" />
      <h3>KaitoSketch</h3>
      <p class="art-piece-title">Art Piece Title</p>
      <a href="/artist/kaito">View Portfolio</a>
    </div>
    <div class="card">
      <img src="/pretty-sci-fi-anime-cyborg-girl-vector.jpg" alt="Anime Art 4" />
      <h3>SakuraLines</h3>
      <p class="art-piece-title">Art Piece Title</p>
      <a href="/artist/sakura">View Portfolio</a>
    </div>
    <div class="card">
      <img src="/Anime-Body-Sketch17.jpg" alt="Anime Art 5" />
      <h3>RikuColors</h3>
      <p class="art-piece-title">Art Piece Title</p>
      <a href="/artist/riku">View Portfolio</a>
    </div>
    <div class="card">
      <img src="/182969.jpg" alt="Anime Art 6" />
      <h3>MikaDesigns</h3>
      <p class="art-piece-title">Art Piece Title</p>
      <a href="/artist/mika">View Portfolio</a>
    </div>
    <div class="card">
      <img src="/5f1a62b5-3b5d-4c4c-afe8-05acc866d041.jpg" alt="Anime Art 7" />
      <h3>AkiraVision</h3>
      <p class="art-piece-title">Art Piece Title</p>
      <a href="/artist/akira">View Portfolio</a>
    </div>
    <!-- New Cards -->
    <div class="card">
      <img src="/5-1024x1024.jpg" alt="Anime Art 8" />
      <h3>ShiroArt</h3>
      <p class="art-piece-title">Art Piece Title</p>
      <a href="/artist/shiro">View Portfolio</a>
    </div>
    <div class="card">
      <img src="/tanupriya-biswas-anime-girl-digital-painting-tanupriya-biswas.jpg" alt="Anime Art 9" />
      <h3>TanuDraws</h3>
      <p class="art-piece-title">Art Piece Title</p>
      <a href="/artist/tanu">View Portfolio</a>
    </div>
    <div class="card">
      <img src="/black-anime-hair-girl-illustrations7-725x1024.jpg" alt="Anime Art 10" />
      <h3>HikariSketch</h3>
      <p class="art-piece-title">Art Piece Title</p>
      <a href="/artist/hikari">View Portfolio</a>
    </div>
    <div class="card">
      <img src="/50511445806_cbeb1a2212_z.jpg" alt="Anime Art 11" />
      <h3>RenArt</h3>
      <p class="art-piece-title">Art Piece Title</p>
      <a href="/artist/ren">View Portfolio</a>
    </div>
    <div class="card">
      <img src="/27-digital-lineart.jpg" alt="Anime Art 12" />
      <h3>LineMaster</h3>
      <p class="art-piece-title">Art Piece Title</p>
      <a href="/artist/linemaster">View Portfolio</a>
    </div>
  </div>
</section>

<style>
  /* Header styling */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f3f8ff;
    border-bottom: 1px solid #ddd;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
  }
  .login-button {
    background-color: #1abc9c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
  }
  .login-button:hover {
    background-color: #16a085;
  }

  /* Styling for Anime Artists Section */
  .anime-artists-section {
    padding: 2rem;
    background: #f3f8ff;
  }
  .anime-artists-section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
  .card {
    background: white;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    text-align: center;
  }
  .card img {
    width: 100%;
    border-radius: 0.5rem;
  }
  .card a {
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
  }
  .card a:hover {
    color: #1abc9c;
  }
  .art-piece-title {
    font-style: italic;
    color: #555;
  }
</style>


