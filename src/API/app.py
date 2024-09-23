from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
import uvicorn
from starlette.middleware.cors import CORSMiddleware

# Initialize FastAPI app
app = FastAPI()

# Define allowed origins for CORS
origins = [
    "http://localhost:8000",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/data")
async def get_data():
    return {"message": "Hello from FastAPI!"}

# Load the validation DataFrame
valid = pd.read_csv('valid.csv', index_col='date', parse_dates=True)

class PriceData(BaseModel):
    date: str

@app.post("/predict")
def predict(data: PriceData):
    try:
        # Parse the input date
        input_date = pd.to_datetime(data.date)
        
        # Check if the date exists in the DataFrame
        if input_date not in valid.index:
            raise HTTPException(status_code=404, detail="Date not found in the dataset")

        # Retrieve the predicted value for the given date
        predicted_value = valid.loc[input_date, 'Predicted']

        # Return the predicted value if it's not NaN
        if pd.notna(predicted_value):
            return {f"predicted_value_for_{data.date}": predicted_value}
        else:
            raise HTTPException(status_code=404, detail="Predicted value is NaN for the given date")
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Run the server
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
