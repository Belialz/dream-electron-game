import OpenAI from 'openai'
import chatGptKey from '../../../chat-gpt-key.json'

const openai = new OpenAI({
    organization: chatGptKey.organizationID,
    apiKey: chatGptKey.key,
})
const params: OpenAI.Chat.ChatCompletionCreateParams = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Say this is a test!' }],
}
export default openai
