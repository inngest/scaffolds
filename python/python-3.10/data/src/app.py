def run(event, steps, context) -> dict:
    # Add your own logic here

    # Learn more about the response format here:
    # https://www.inngest.com/docs/functions/function-input-and-output
    return {
        "status": 200,
        "body": {
            "message": "Received event: " + event["name"]
        }
    }