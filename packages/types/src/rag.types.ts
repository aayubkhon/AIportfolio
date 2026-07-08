// RAG pipeline types
export type ChunkCategory = 'personal' | 'experience' | 'skills' | 'project' | 'education'

export interface KnowledgeChunk {
  id: string
  content: string
  category: ChunkCategory
}

export interface EmbeddingCacheItem {
  id: string
  embedding: number[]
}
