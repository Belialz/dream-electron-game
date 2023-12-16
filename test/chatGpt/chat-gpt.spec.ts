import { it } from 'mocha'
import chatGptClient from '../../src/api/chatGpt/client'
import { HeroEntity } from '../../src/entity/hero.entity'

describe('CHAT GPT API', () => {
    it('TEST CONNECTION', async () => {
        const countOfObject = 10;
        const hero = new HeroEntity('Jakob', 'Farmer')
        const response = await chatGptClient.chat.completions.create({
            model: 'gpt-3.5-turbo-1106',
            response_format: { "type": "json_object" },
            messages: [
                {"role": "system", "content": "You are a helpful assistant designed to output JSON."},
                { 
                    role: 'system', 
                    content: `You need to create a list of ${countOfObject} characters from the example provided below, fill in the field values in accordance with the field name.
Take the invented meanings from the world of DND.
The format must also be in the form of JSON` 
                },
                { 
                    role: 'user', 
                    content: `${JSON.stringify(hero)}` 
                },
            ],
        })
        console.log(response.choices[0].message.content)
    })

    it('entity tests', async () => {
       const hero = new HeroEntity('Jakob', 'Farmer')
       console.log(JSON.stringify(hero))
    })
})
