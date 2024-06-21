import { createClient } from '@supabase/supabase-js';

var basic_default = {
	async fetch(request, env) {
		try {
			// init supabase client using environment variables
			const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);

			// extract food slug from requested URL or query parameter
			const url = new URL(request.url);
			const foodSlug = url.pathname.replace('/', '');

			// fetch data from supabase based on the food slug
			const { data, error } = await supabase.from('nutrition_data').select('*').eq('food', foodSlug).single();

			if (error) {
				throw error;
			}

			const responseBody = {
				status: 'success',
				data: data || {},
			};

			// return JSON response
			return new Response(JSON.stringify(responseBody), {
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		} catch (error) {
			console.error('Error fetching food data:', error);

			// error response
			return new Response(JSON.stringify({ status: 'error', message: 'Failed to fetch food data' }), {
				status: 500,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		}
	},
};

export { basic_default as default };
