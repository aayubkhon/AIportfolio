// Chat domain types — shared between UI and API layer
export type MessageRole = 'user' | 'model'

export interface ChatMessage {
  role: MessageRole
  content: string
}

export interface ChatApiRequest {
  message: string
  history: ChatMessage[]
}

export interface ChatApiResponse {
  message: string
  error?: string
}

// Gemini SDK turn format
export interface GeminiTurn {
  role: MessageRole
  parts: Array<{ text: string }>
}
