import { GoogleGenerativeAI } from '@google/generative-ai'
import type { GeminiTurn } from '@/libs/types/chat.types'

const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

// fallback list — tries models in order until one succeeds
const CHAT_MODELS = (process.env.GEMINI_MODELS ?? 'gemini-2.0-flash')
  .split(',')
  .map((m) => m.trim())
  .filter(Boolean)

export const getEmbeddingModel = () =>
  client.getGenerativeModel({ model: 'gemini-embedding-001' })

export async function sendChatMessage(
  history: GeminiTurn[],
  message: string
): Promise<string> {
  let lastError: unknown

  for (const modelName of CHAT_MODELS) {
    try {
      const chat = client
        .getGenerativeModel({ model: modelName })
        .startChat({ history })

      const result = await chat.sendMessage(message)
      return result.response.text()
    } catch (err: unknown) {
      // 429 quota / 404 not found → try next model
      const status = (err as { status?: number })?.status
      if (status === 429 || status === 404) {
        lastError = err
        continue
      }
      throw err
    }
  }

  throw lastError ?? new Error('All Gemini models unavailable')
}
