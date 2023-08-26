<template>
  <footer class="footer-view pb-[1000px] bg-woodsmoke-900">
    <o-separator
      color-a="woodsmoke-800"
      color-b="woodsmoke-900"
      :with-ornaments="false" />

    <section class="flex p-10 text-woodsmoke-50 fill-woodsmoke-50">
      <div class="flex-1">
        <!--                <p>-->
        <!--                    Imprint-->
        <!--                </p>-->
      </div>
      <div class="flex-1 text-right">
        <a href="mailto:thomas@lukacs.dev" target="_blank" rel="noopener">
          <span class="i-ph-envelope-open inline-block text-2xl mr-2" />
        </a>
        <a href="https://github.com/riplexus" target="_blank" rel="noopener">
          <span class="i-ph-github-logo inline-block text-2xl mr-2" />
        </a>
        <a href="https://github.com/riplexus" target="_blank" rel="noopener">
          <span class="i-tabler-brand-storybook inline-block text-2xl" />
        </a>
      </div>
    </section>
  </footer>
</template>

<script setup>
  import OSeparator from '@/components/Organisms/OSeparator.vue';
</script>
