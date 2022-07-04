import { mount } from '@vue/test-utils'
import FlashCard from '@/components/FlashCard'

describe('Testing FlashCard.vue', () => {
  it('should render front and back', () => {
    const wrapper = mount(FlashCard, {
      propsData: {
        flashcard: {
          id: 1,
          question: 'Hund',
          answer: 'Dog',
          category: 'English',
          setId: 1
        }
      }
    })
    const front = wrapper.find('.flip-card-front')
    expect(front.text()).toBe('Hund')
    const back = wrapper.find('.flip-card-back')
    expect(back.text()).toBe('Dog')
  })
})
