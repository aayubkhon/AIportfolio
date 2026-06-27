import type { NextApiRequest, NextApiResponse } from 'next'
import { sendChatMessage } from '@/libs/services/gemini.service'
import { retrieveRelevantChunks } from '@/libs/services/rag.service'
import type { ChatApiRequest, ChatApiResponse, GeminiTurn } from '@/libs/types/chat.types'

function buildHistory(context: string, history: ChatApiRequest['history'], language: string): GeminiTurn[] {
  const languageNames: Record<string, string> = {
    en: 'English',
    ko: 'Korean (한국어)',
    uz: "Uzbek (O'zbekcha)",
  };
  const targetLanguage = languageNames[language] || 'Uzbek';

  return [
    {
      role: 'user',
      parts: [{ text: `You are Leo's personal AI assistant. Leo is Ayubkhon Akramov — a Fullstack & AI Engineer.\n\nAnswer ONLY based on this context:\n\n${context}\n\nRules: stay on-topic. You MUST answer and write your response ONLY in ${targetLanguage} language. Use markdown where helpful.` }],
    },
    {
      role: 'model',
      parts: [{ text: `Got it. I will answer questions about Leo using only the provided context, and I will write my responses strictly in ${targetLanguage}.` }],
    },
    ...history.map(({ role, content }) => ({
      role,
      parts: [{ text: content }],
    })),
  ]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '', error: 'Method not allowed' })
  }

  const { message, history, language } = req.body as ChatApiRequest & { language?: string }

  if (!message?.trim()) {
    return res.status(400).json({ message: '', error: 'Message is required' })
  }

  try {
    const chunks  = await retrieveRelevantChunks(message)
    const context = chunks.map((c) => c.content).join('\n\n---\n\n')

    const reply = await sendChatMessage(buildHistory(context, history, language || 'uz'), message)
    return res.status(200).json({ message: reply })
  } catch (err) {
    console.error('[chat]', err)
    return res.status(500).json({ message: '', error: 'Internal server error' })
  }
}
