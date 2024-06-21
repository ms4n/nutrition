# Nutrition Data Cloudflare Worker

This Cloudflare Worker fetches nutritional data for various foods from a Supabase database and returns it as JSON.

## Deployed URL

The Worker is deployed at: [https://nutrition.arjunsanjay0.workers.dev/](https://nutrition.arjunsanjay0.workers.dev/)

## Example Request

To fetch nutritional data for a specific food, make a GET request with the food name as part of the URL path.

**Example Request:**

```bash
GET https://nutrition.arjunsanjay0.workers.dev/egg
```


## Example Response

If successful, the Worker responds with a JSON object containing the nutritional data for the requested food.  All units are in grams and per 100 grams.

**Example Response Body:**
```json
{
  "status": "success",
  "data": {
    "food": "egg",
    "single_serving_size": 50,
    "calories": 72,
    "total_fat_100g": 9.6,
    "total_carbohydrates_100g": 0.8,
    "dietary_fiber_100g": 0,
    "protein_100g": 12.6
  }
}
