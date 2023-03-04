<script lang="ts" setup>
const props = defineProps({
  text: { type: String, required: true },
  date: String,
})
</script>

<template>
  <div class="card min-w-max overflow-hidden text-ellipsis bg-base-100 text-xl shadow-xl">
    <div class="mx-auto text-clip text-center">
      <p id="content">{{ props.text }}</p>

      <div class="m-2 justify-end">
        {{ props.date }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
