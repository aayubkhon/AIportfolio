import { getEmbeddingModel } from './gemini.service'
import { knowledgeChunks } from './knowledge-base'
import type { KnowledgeChunk, EmbeddingCacheItem } from '@repo/types'

// in-memory cache; resets on cold start in serverless envs
let cache: EmbeddingCacheItem[] | null = null

async function embed(text: string): Promise<number[]> {
  const { embedding } = await getEmbeddingModel().embedContent(text)
  return embedding.values
}

function cosine(a: number[], b: number[]): number {
  let dot = 0, magA = 0, magB = 0
  for (let i = 0; i < a.length; i++) {
    dot  += a[i] * b[i]
    magA += a[i] ** 2
    magB += b[i] ** 2
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB))
}

async function warmCache(): Promise<void> {
  cache = await Promise.all(
    knowledgeChunks.map(async ({ id, content }) => ({
      id,
      embedding: await embed(content),
    }))
  )
}

export async function retrieveRelevantChunks(
  query: string,
  topK = 4
): Promise<KnowledgeChunk[]> {
  if (!cache) await warmCache()

  const queryVec = await embed(query)

  return [...cache!]
    .map((item) => ({
      chunk: knowledgeChunks.find((c) => c.id === item.id)!,
      score: cosine(queryVec, item.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(({ chunk }) => chunk)
}
