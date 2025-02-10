<script lang="ts">
  const {
    headings,
  }: {
    headings: {
      depth: number;
      text: string;
      slug: string;
    }[];
  } = $props();
</script>

<div class="sticky min-w-64 top-18 flex flex-col gap-2">
  <div class="font-semibold text-lg">On this page</div>
  <hr />
  <ol class="pl-0 list-none text-sm leading-8">
    {#each headings as { depth, text, slug }, i}
      <li class="w-full" style="margin-left: {(depth - 1) * 1}rem;">
        <a href={`#${slug}`} class="text-white block w-full">{text}</a>
      </li>
    {/each}
  </ol>
</div>
