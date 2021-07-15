<template>
  <div>
    <jm-simple-indicator />
    <jm-icon-progress-indicator />
    <jm-number-progress-indicator />
    <jm-carousel-job-cards />
    <new-job />
  </div>
</template>

<script>
import JmSimpleIndicator from "@/components/JmSimpleIndicator/JmSimpleIndicator";
import JmIconProgressIndicator from "@/components/JmIconProgressIndicator/JmIconProgressIndicator";
import JmNumberProgressIndicator from "@/components/JmNumberProgressIndicator/JmNumberProgressIndicator";
import JmCarouselJobCards from "@/components/JmCarouselJobCards/JmCarouselJobCards";
import NewJob from "@/views/NewJob/NewJob";
export default {
  name: "Home",
  components: {
    NewJob,
    JmCarouselJobCards,
    JmNumberProgressIndicator,
    JmIconProgressIndicator,
    JmSimpleIndicator,
  },
};
</script>

<style scoped></style>
