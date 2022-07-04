import { mount } from '@vue/test-utils'
import SetItem from '@/views/SetItem.vue'
import SetList from '@/components/SetList'

describe('Testing AllFlashcards.vue', () => {
  it('should show no title', () => {
    const wrapper = mount(SetItem)

    expect(wrapper.text()).toMatch('')
  })

  it('should have SetList component', () => {
    // when
    const wrapper = mount(SetItem)

    // then
    const createForm = wrapper.findComponent(SetList)
    expect(createForm.exists()).toBeTruthy()
  })
})
