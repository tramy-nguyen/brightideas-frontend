import { mount } from '@vue/test-utils'
import AllFlashcards from '@/views/AllFlashcards'
import FlashcardList from '@/components/FlashcardList'

describe('Testing AllFlashcards.vue', () => {
  it('should show page title', () => {
    const wrapper = mount(AllFlashcards)

    expect(wrapper.text()).toMatch('Flashcards')
  })

  it('should have FlashcardList component', () => {
    const wrapper = mount(AllFlashcards)

    const createForm = wrapper.findComponent(FlashcardList)
    expect(createForm.exists()).toBeTruthy()
  })
})
