<script lang="ts">
  import { withBase } from '@utils/path';
  import { twMerge } from 'tailwind-merge';
  import type { MarkdownInstance, UserGuideFrontMatter } from 'types';

  const {
    markdownFiles,
  }: {
    markdownFiles: MarkdownInstance<UserGuideFrontMatter>[];
  } = $props();

  // Get the current page URL
  const currentUrl = new URL(window.location.href);
  const isDoc = currentUrl.pathname.includes('/docs/');

  const getEndpoint = (url?: string) => {
    if (!url) return '';
    const endpoint = url.split('/').pop() || '';
    return endpoint;
  };

  // Convert the list to a tree structure by the url, with each node containing:
  // - title: The title of the page in the frontmatter
  // - url: The URL of the page
  // - children: The children of the page
  type TreeNode = {
    title: string;
    url?: string;
    children: Record<string, TreeNode>;
  };

  const root: TreeNode = {
    title: 'Root',
    children: {},
  };

  markdownFiles.forEach(({ frontmatter, url }) => {
    if (!url) return;
    console.log({ frontmatter, url });
    const parts = url.split('/').slice(1);
    let current = root;
    parts.forEach((part) => {
      if (!current.children) {
        current.children = {};
      }
      if (!current.children[part]) {
        current.children[part] = {
          title: part,
          children: {},
        };
      }
      current = current.children[part];
    });
    current.title = frontmatter.title || getEndpoint(url);
    current.url = url;
    // Add tailing slash to the URL to ensure
    // relative links work correctly
    if (current.url && !current.url.endsWith('/')) {
      current.url += '/';
    }
  });

  console.log({ root });
</script>

{#snippet nodeRenderer(node: TreeNode)}
  <div class="flex flex-col">
    {#if node.url}
      <a
        href={withBase(node.url)}
        class={twMerge(
          'hover:underline text-white',
          node.url === currentUrl.pathname ? 'font-bold' : ''
        )}
      >
        {node.title}
      </a>
    {:else}
      <span>{node.title}</span>
    {/if}
    {#if node.children}
      <div class="ml-2">
        {#each Object.values(node.children) as child}
          {@render nodeRenderer(child)}
        {/each}
      </div>
    {/if}
  </div>
{/snippet}

{#if isDoc}
  <div class="flex sticky top-18 flex-col gap-2 min-w-56 rounded p-2">
    <div class="font-semibold text-lg">All Guides</div>
    <hr />

    <div class="text-sm leading-8">
      {#each Object.values(root?.children['docs']?.children || {}) as node}
        {@render nodeRenderer(node)}
      {/each}
    </div>
  </div>
{/if}
