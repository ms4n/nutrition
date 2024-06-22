# Nutrition Data Cloudflare Worker

This Cloudflare Worker fetches nutritional data for various foods from a Supabase database and returns it as JSON.

## Deployed URL

The Worker is deployed at: [https://nutrition.arjunsanjay0.workers.dev/](https://nutrition.arjunsanjay0.workers.dev/)

## Example Request

To fetch nutritional data for a specific food, make a GET request with the food name as a query parameter in the URL.

**Example Request:**

```bash
GET https://nutrition.arjunsanjay0.workers.dev/?food=chicken
```

## Example Response

If successful, the Worker responds with a JSON object containing the nutritional data for the requested food. All units are in grams and per 100 grams.

**Example Response Body:**

```json
{
	"status": "success",
	"data": {
		"food": "chicken",
		"single_serving_size": 85,
		"calories": 187,
		"total_fat_100g": 12.9,
		"total_carbohydrates_100g": 0,
		"dietary_fiber_100g": 0,
		"protein_100g": 23.5
	}
}
```
