import { it } from 'mocha'
import chatGptClient from '../../src/api/chatGpt/client'

describe('CHAT GPT API', () => {
    it('TEST CONNECTION', async () => {
        const response = await chatGptClient.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { 
                    role: 'system', 
                    content: `You need to think about the character's background as described below.
                            The setting is fantasy.
                            Break down facts, stories, cases.
                            Think about his childhood, school, work, adventure.` 
                },
                { 
                    role: 'user', 
                    content: `Black hair, Brown eyes, Scar on left eye.
                            Wears a staff and a magic hat.
                            He is 35 years old` 
                },
            ],
        })
        console.log(response.choices.map(item => console.log(item.message)))
    })
})
