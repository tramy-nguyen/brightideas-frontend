import { mount } from '@vue/test-utils'
import FlashcardList from '@/components/FlashcardList.vue'
import FlashCard from '@/components/FlashCard'

describe('Testing PersonsCardList.vue', () => {
  it('should render a  Flashcard for each flashcard', () => {
    const wrapper = mount(FlashcardList, {
      propsData: {
        flashcards: [
          {
            id: 1,
            question: 'Gegenwart',
            answer: 'Präsenz',
            category: 'Deutsch',
            setId: 1
          },
          {
            id: 2,
            question: 'Katze',
            answer: 'Cat',
            category: 'English',
            setId: 2
          }
        ]
      }
    })
    const flashCards = wrapper.findAllComponents(FlashCard)
    expect(flashCards.length).toBe(2)
  })
})
