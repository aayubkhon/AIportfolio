// RAG engine entry point — retrieval + Gemini chat, kept server-side.
export { sendChatMessage, getEmbeddingModel } from './gemini.service'
export { retrieveRelevantChunks } from './rag.service'
export { knowledgeChunks } from './knowledge-base'
