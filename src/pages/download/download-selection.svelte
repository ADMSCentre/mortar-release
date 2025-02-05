<script lang="ts">
  const { release, latest = false }: { release: Release; latest?: boolean } =
    $props();

  // Separate the assets by windows, mac, and linux

  const assets = release.assets.filter(
    (asset) => !asset.name.includes('.blockmap')
  );

  const windowsAssets = assets.filter((asset) => asset.name.includes('.exe'));

  const macAssets = assets.filter((asset) => asset.name.includes('.dmg'));

  const linuxAssets = assets.filter(
    (asset) =>
      asset.name.includes('.AppImage') ||
      asset.name.includes('.deb') ||
      asset.name.includes('.rpm')
  );

  const publishedDate = new Date(release.published).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }
  );
</script>

<div class="p-4 rounded-lg max-w-3xl">
  <div class="flex items-center justify-between gap-4 mb-2">
    <span class="text-2xl font-bold">{release.name}</span>
    <div>
      <!-- <span
        class="inline-block bg-accent-200 text-accent-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
      >
        {release.tag}
      </span> -->
      {#if latest}
        <span
          class="inline-block bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded"
        >
          Latest
        </span>
      {/if}
    </div>
  </div>
  <p class="text-sm text-zinc-400 mb-4">{publishedDate}</p>
  <h3 class="text-xl font-semibold mb-2">Assets</h3>
  <table class="min-w-full bg-black">
    <thead>
      <tr>
        <th class="py-2 px-4 border-b">Platform</th>
        <th class="py-2 px-4 border-b">File Name</th>
        <th class="py-2 px-4 border-b">Download</th>
      </tr>
    </thead>
    <tbody>
      {#if windowsAssets.length > 0}
        {#each windowsAssets as asset}
          <tr>
            <td class="py-2 px-4 border-b">Windows</td>
            <td class="py-2 px-4 border-b">{asset.name}</td>
            <td class="py-2 px-4 border-b">
              <a
                href={asset.downloadUrl}
                class="text-accent-500 hover:underline">Download</a
              >
            </td>
          </tr>
        {/each}
      {/if}
      {#if macAssets.length > 0}
        {#each macAssets as asset}
          <tr>
            <td class="py-2 px-4 border-b">Mac</td>
            <td class="py-2 px-4 border-b">{asset.name}</td>
            <td class="py-2 px-4 border-b">
              <a
                href={asset.downloadUrl}
                class="text-accent-500 hover:underline">Download</a
              >
            </td>
          </tr>
        {/each}
      {/if}
      {#if linuxAssets.length > 0}
        {#each linuxAssets as asset}
          <tr>
            <td class="py-2 px-4 border-b">Linux</td>
            <td class="py-2 px-4 border-b">{asset.name}</td>
            <td class="py-2 px-4 border-b">
              <a
                href={asset.downloadUrl}
                class="text-accent-500 hover:underline">Download</a
              >
            </td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<!-- <pre>{JSON.stringify(release, null, 2)}</pre> -->
