import { createQueryClient } from '@/trpc/client/query-client'
import { createCaller, createTRPCContext } from '@/trpc/server/index'
import type { AppRouter } from '@/trpc/server/root'
import { createHydrationHelpers } from '@trpc/react-query/rsc'
import { headers } from 'next/headers'
import { cache } from 'react'

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async () => {
    const heads = new Headers(headers())
    heads.set('x-trpc-source', 'rsc')

    return createTRPCContext({
        headers: heads,
    })
})

const getQueryClient = cache(createQueryClient)
const caller = createCaller(createContext)

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
    caller,
    getQueryClient
)
