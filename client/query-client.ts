import { defaultShouldDehydrateQuery, QueryClient } from '@tanstack/react-query'
import SuperJSON from 'superjson'

export const createQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				// With SSR, we usually want to set some default staleTime
				// above 0 to avoid refetching immediately on the client
				staleTime: 0,
				gcTime: 0,
				refetchOnMount: true,
				refetchOnWindowFocus: true,
				refetchOnReconnect: true,
			},
			dehydrate: {
				serializeData: SuperJSON.serialize,
				shouldDehydrateQuery: (query) =>
					defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
			},
			hydrate: {
				deserializeData: SuperJSON.deserialize,
			},
		},
	})
