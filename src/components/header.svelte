<script lang="ts">
  import { Home } from 'lucide-svelte';
  import { withBase } from '@utils/path';

  const navOptions = [
    {
      href: withBase('download/'),
      content: 'Download',
    },
    {
      href: withBase('docs/user-guide/'),
      content: 'User Guide',
    },
  ];
</script>

<nav class="sticky top-0 z-10 bg-black shadow-md flex items-center gap-4 p-4">
  <!-- {navOptions.map((option) => <a href={option.href}>{option.text}</a>)} -->
  <a href={withBase('/')} class="text-zinc-300 hover:text-zinc-100">
    <Home />
  </a>
  <div class="flex gap-4 items-center">
    {#each navOptions as option}
      <a
        href={option.href}
        class="text-zinc-300 hover:text-zinc-100 hover:underline"
      >
        <!-- {option.content} -->
        {option.content}
      </a>
    {/each}
  </div>
</nav>
