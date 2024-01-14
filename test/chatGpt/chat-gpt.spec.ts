import { it } from 'mocha'
import chatGptClient from '../../src/api/chatGpt/client'
import fs from 'node:fs'
import { HeroEntity } from '../../src/entity/hero.entity'

describe('CHAT GPT API', () => {
    it('Characters generation test', async () => {
        const hero = new HeroEntity('Jakob', 'Farmer')
        const response = await chatGptClient.chat.completions.create({
            model: 'gpt-3.5-turbo-1106',
            response_format: { type: 'json_object' },
            messages: [
                {
                    role: 'system',
                    content:
                        'You are a helpful assistant designed to output JSON.',
                },
                {
                    role: 'system',
                    content: `You need to create a list of five characters from the example provided below, fill in the field values in accordance with the field name.
Take the invented meanings from the world of DND.
The format must also be in the form of JSON`,
                },
                {
                    role: 'user',
                    content: `${JSON.stringify(hero)}`,
                },
            ],
        })
        const charts = response.choices[0].message.content as string
        console.log(charts)
        fs.writeFileSync('characters.json', charts)
    })

    it('Image generation test', async () => {
        const hero = {
            name: 'Grimble',
            description: 'Wizard',
            age: 75,
            background: 'Sage',
            skills: ['Arcana', 'History'],
        }
        const response = await chatGptClient.images.generate({
            model: 'dall-e-2',
            size: '1024x1024',
            quality: 'standard',
            prompt: `Fantasy human art where ${
                hero.description
            } that looks like ${hero.background} with name ${
                hero.name
            } and age ${
                hero.age
            } with skills ${hero.skills.toString()}, use DND and Anime styles`,
            n: 1,
        })
        const url = response.data[0].url
        console.log(url)
    })

    it('entity tests', async () => {
        const hero = new HeroEntity('Jakob', 'Farmer')
        console.log(JSON.stringify(hero))
    })
})
