<script lang="ts">
  import { withBase } from '@utils/path';
  import { twMerge } from 'tailwind-merge';
  import type { MarkdownInstance, UserGuideFrontMatter } from 'types';

  const {
    markdownFiles,
    currentPath,
  }: {
    currentPath: string;
    markdownFiles: MarkdownInstance<UserGuideFrontMatter>[];
  } = $props();

  // Get the current page URL
  const BASE_URL = import.meta.env.BASE_URL;

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
    // Replace base URL to get the relative path
    url = url.replace(BASE_URL, '');
    const parts = url.split('/').filter((p) => p); // Remove empty parts
    let current = root;
    console.log({
      frontmatter,
      url,
      parts,
    });
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

  const orderLeafFirst = (a: TreeNode, b: TreeNode) => {
    const aChildren = Object.keys(a.children).length;
    const bChildren = Object.keys(b.children).length;
    if (aChildren !== bChildren) {
      return aChildren - bChildren;
    }
    return a.title.localeCompare(b.title);
  };

  const pathsEqual = (a: string, b: string) => {
    // Compare the paths without the trailing and leading slashes
    return a.replace(/(^\/|\/$)/g, '') === b.replace(/(^\/|\/$)/g, '');
  };

  console.log({ root, currentPath });
</script>

{#snippet nodeRenderer(node: TreeNode)}
  <div class="flex flex-col">
    {#if node.url}
      <a
        href={withBase(node.url)}
        class={twMerge(
          'hover:underline text-white',
          pathsEqual(node.url, currentPath) ? 'font-bold' : ''
        )}
      >
        {node.title}
      </a>
    {:else}
      <span>{node.title}</span>
    {/if}
    {#if node.children}
      <div style="margin-left: 1rem;">
        {#each Object.values(node.children).toSorted(orderLeafFirst) as child}
          {@render nodeRenderer(child)}
        {/each}
      </div>
    {/if}
  </div>
{/snippet}

<div class="flex sticky top-18 flex-col gap-2 min-w-64 rounded p-2">
  <div class="font-semibold text-lg">All Guides</div>
  <hr />

  <div class="text-sm leading-8">
    {#each Object.values(root?.children['docs']?.children || {}) as node}
      {@render nodeRenderer(node)}
    {/each}
  </div>
</div>
