<script lang="ts">
  const { release }: { release: Release } = $props();

  // Separate the assets by windows, mac, mac arm64, and linux

  const assets = release.assets.filter(
    (asset) => !asset.name.includes('.blockmap')
  );

  const windowsAssets = assets.filter((asset) => asset.name.includes('.exe'));

  const macAssets = assets.filter(
    (asset) => asset.name.includes('.dmg') && !asset.name.includes('arm64')
  );

  const macArm64Assets = assets.filter(
    (asset) => asset.name.includes('.dmg') && asset.name.includes('arm64')
  );

  const linuxAssets = assets.filter(
    (asset) =>
      asset.name.includes('.AppImage') ||
      asset.name.includes('.deb') ||
      asset.name.includes('.rpm')
  );

  function formatSize(size: number): string {
    return size >= 1048576
      ? (size / 1048576).toFixed(2) + ' MB'
      : size + ' bytes';
  }

  // Identify the platform of the user
  let platform = $state('unknown');
  if (window.navigator.userAgent.includes('Win')) {
    platform = 'windows';
  } else if (window.navigator.userAgent.includes('Mac')) {
    platform = 'mac';
  } else if (window.navigator.userAgent.includes('Linux')) {
    platform = 'linux';
  }

  // Identify the architecture of the user
  let arch = $state('unknown');
  if (
    window.navigator.userAgent.includes('x86_64') ||
    window.navigator.userAgent.includes('x64')
  ) {
    arch = 'x64';
  } else if (window.navigator.userAgent.includes('arm64')) {
    arch = 'arm64';
  }
</script>

{#snippet downloadButton(asset: {
  downloadUrl: string;
  size: number;
  platform: string;
  arch: string;
})}
  <a
    href={asset.downloadUrl}
    class="download-btn"
    class:main={platform === asset.platform && arch === asset.arch}
  >
    {#if asset.platform === 'windows'}
      Download for Windows
    {:else if asset.platform === 'mac' && asset.arch === 'x64'}
      Download for Mac
    {:else if asset.platform === 'mac' && asset.arch === 'arm64'}
      Download for Mac ARM64
    {:else if asset.platform === 'linux'}
      Download for Linux
    {/if}
    <span class="block text-xs mt-1 font-normal">{formatSize(asset.size)}</span>
  </a>
{/snippet}

<div class="rounded-lg w-fit">
  <div class="flex flex-wrap gap-4">
    {#if windowsAssets.length > 0}
      {#each windowsAssets as asset}
        {@render downloadButton({
          downloadUrl: asset.downloadUrl,
          size: asset.size,
          platform: 'windows',
          arch: 'x64',
        })}
      {/each}
    {/if}
    {#if macAssets.length > 0}
      {#each macAssets as asset}
        {@render downloadButton({
          downloadUrl: asset.downloadUrl,
          size: asset.size,
          platform: 'mac',
          arch: 'x64',
        })}
      {/each}
    {/if}
    <!-- {#if macArm64Assets.length > 0}
      {#each macArm64Assets as asset}
        {@render downloadButton({
          downloadUrl: asset.downloadUrl,
          size: asset.size,
          platform: 'mac',
          arch: 'arm64',
        })}
      {/each}
    {/if} -->
    {#if linuxAssets.length > 0}
      {#each linuxAssets as asset}
        {@render downloadButton({
          downloadUrl: asset.downloadUrl,
          size: asset.size,
          platform: 'linux',
          arch: 'x64',
        })}
      {/each}
    {/if}
  </div>
</div>

<style>
  .version-tag {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
</style>
