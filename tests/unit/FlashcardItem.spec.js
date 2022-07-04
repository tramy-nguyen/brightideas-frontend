import { mount } from '@vue/test-utils'
import FlashcardItem from '@/views/FlashcardItem'
import FlashcardCreateForm from '@/components/FlashcardCreateForm'
import SetCreateForm from '@/components/SetCreateForm'

describe('Testing FlashcardItem.vue', () => {
  it('should have flashcard create form component', () => {
    const wrapper = mount(FlashcardItem)

    const createForm = wrapper.findComponent(FlashcardCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })

  it('should have set create form component', () => {
    const wrapper = mount(FlashcardItem)

    const createForm = wrapper.findComponent(SetCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
