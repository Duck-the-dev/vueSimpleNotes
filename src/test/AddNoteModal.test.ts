import AddNoteModalVue from '../components/AddNoteModal.vue'
import NoteItemVue from '../components/NoteItem.vue'
import { mount } from '@vue/test-utils'

describe('note', () => {
  test('add new note', async () => {
    expect(AddNoteModalVue).toBeTruthy()
    expect(NoteItemVue).toBeTruthy()
    let noteMsg = ''

    const wrapperNewNote = mount(AddNoteModalVue)
    noteMsg = 'feed the cat early in the morning'

    const note = mount(NoteItemVue, {
      props: {
        text: noteMsg,
      },
    })

    expect(wrapperNewNote.text()).toContain('Add note')
    expect(wrapperNewNote.html()).toMatchSnapshot()

    await wrapperNewNote.get('#addNoteModal').trigger('click')

    const input = wrapperNewNote.find('textarea')

    await input.setValue('feed the cat early in the morning')
    console.log(input.element.value)

    expect(input.element.value).toBe('feed the cat early in the morning')

    await wrapperNewNote.get('#addNoteConfirm').trigger('click')

    expect(note.text()).toBe('feed the cat early in the morning')
  }),
    test('add two notes', async () => {
      expect(AddNoteModalVue).toBeTruthy()
      expect(NoteItemVue).toBeTruthy()
      let noteMsg = ''

      const wrapperNewNote = mount(AddNoteModalVue)
      noteMsg = 'feed the cat early in the morning'

      const note1 = mount(NoteItemVue, {
        props: {
          text: noteMsg,
        },
      })

      expect(wrapperNewNote.text()).toContain('Add note')
      expect(wrapperNewNote.html()).toMatchSnapshot()

      await wrapperNewNote.get('#addNoteModal').trigger('click')

      const input = wrapperNewNote.find('textarea')

      await input.setValue('feed the cat early in the morning')
      console.log(input.element.value)

      expect(input.element.value).toBe('feed the cat early in the morning')

      await wrapperNewNote.get('#addNoteConfirm').trigger('click')

      expect(note1.text()).toBe('feed the cat early in the morning')

      noteMsg = 'feed the dog early in the morning'

      const note2 = mount(NoteItemVue, {
        props: {
          text: noteMsg,
        },
      })

      await wrapperNewNote.get('#addNoteModal').trigger('click')

      const input2 = wrapperNewNote.find('textarea')

      await input2.setValue(noteMsg)
      console.log(input.element.value)

      expect(input2.element.value).toBe(noteMsg)

      await wrapperNewNote.get('#addNoteConfirm').trigger('click')

      expect(note2.text()).toBe(noteMsg)
    })
})
