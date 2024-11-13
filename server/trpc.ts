import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import { ZodError } from 'zod'

export const createTRPCContext = async (opts: { headers: Headers }) => {
    const authToken = opts.headers.get('Authorization') ?? null

    const source = opts.headers.get('x-trpc-source') ?? 'unknown'
    console.log('>>> tRPC Request from', source)

    return {
        token: authToken,
    }
}

const t = initTRPC.context<typeof createTRPCContext>().create({
    transformer: {
        ...superjson,
        serialize: (obj) => {
            if (typeof obj === 'function') {
                return {
                    __type: 'function',
                    __value: obj.toString(),
                }
            }
            return superjson.serialize(obj)
        },
        deserialize: (obj) => {
            if (
                obj &&
                typeof obj === 'object' &&
                '__type' in obj &&
                obj.__type === 'function'
            ) {
                return new Function('return ' + obj.__value)()
            }
            return superjson.deserialize(obj)
        },
    },
    errorFormatter: ({ shape, error }) => ({
        ...shape,
        data: {
            ...shape.data,
            zodError:
                error.cause instanceof ZodError ? error.cause.flatten() : null,
        },
    }),
})

/**
 * Create a server-side caller
 * @see https://trpc.io/docs/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory

/**
 * This is how you create new routers and subrouters in your tRPC API
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router

export const publicProcedure = t.procedure

export const protectedProcedure = t.procedure
