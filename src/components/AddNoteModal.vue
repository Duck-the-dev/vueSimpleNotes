<script setup>
import NoteItem from './NoteItem.vue'
import { ref } from 'vue'

const newNote = ref('')

const notes = ref([])

const addNote = () => {
  notes.value.push({
    id: Math.floor(Math.random() * 100000),
    text: newNote.value,
    date: new Date().toDateString(),
  })

  newNote.value = ''
}
</script>

<template>
  <div class="container mx-auto mt-5 mb-5">
    <!-- The button to open modal -->
    <label for="my-modal-6" class="btn-xl btn-primary btn">Add note</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <label for="my-modal-6" class="btn-sm btn-circle btn absolute right-2 top-2"
          >✕</label
        >

        <div class="form-control">
          <label class="label">
            <span class="label-text">Add New Note</span>
          </label>
          <textarea
            v-model="newNote"
            class="textarea-bordered textarea h-24 max-h-52"
            placeholder="Note content"
          ></textarea>
        </div>
        <div v-show="newNote.length > 10" class="modal-action">
          <label @click="addNote()" for="my-modal-6" class="btn">Add Note!</label>
        </div>
      </div>
    </div>
  </div>

  <!-- grid of notes -->
  <div class="grid grid-flow-row gap-4 sm:grid-cols-1 md:grid-cols-4">
    <div v-for="note in notes" :key="note.id">
      <NoteItem :text="note.text" :date="note.date" />
    </div>
  </div>
</template>

<style scoped></style>
