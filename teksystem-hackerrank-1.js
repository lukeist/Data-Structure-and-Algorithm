async function getStockInformation(date) {
  try {
    const response = await fetch(
      `https://jsonmock.hackerrank.com/api/stocks?date=${date}`
    );
    const data = await response.json();
    // Check if the data array is empty
    if (data.data.length === 0) {
      return {};
    }
    // Return the stock record object
    return data.data[0];
  } catch (error) {
    console.error(error);
  }

  const stockInformation = await getStockInformation("5-January-2000");
  console.log(`Open: ${stockInformation.open}`);
  console.log(`High: ${stockInformation.high}`);
  console.log(`Low: ${stockInformation.low}`);
  console.log(`Close: ${stockInformation.close}`);
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const date = readLine().trim();

  const result = await getStockInformation(date);
  const isEmpty = !Object.keys(result).length;
  if (isEmpty) {
    ws.write("No Results Found");
  } else {
    ws.write(`Open: ${result.open}\n`);
    ws.write(`High: ${result.high}\n`);
    ws.write(`Low: ${result.low}\n`);
    ws.write(`Close: ${result.close}\n`);
  }
}
