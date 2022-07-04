import { mount } from '@vue/test-utils'
import FlashcardCreateForm from '@/components/FlashcardCreateForm'

describe('Testing FlashcardCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(FlashcardCreateForm)

    // then
    expect(wrapper.find('#flashcards-create-offcanvas').classes()).not.toContain('show')
  })
})
