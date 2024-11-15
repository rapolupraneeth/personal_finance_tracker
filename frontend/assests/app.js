const API_URL = "http://localhost:8080/api/transactions";

document.getElementById("transaction-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const description = document.getElementById("description").value;

  const transaction = { type, category, amount, description, userId: 1 };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transaction),
  });

  if (response.ok) {
    alert("Transaction added successfully!");
    // Reload the list of transactions
  } else {
    alert("Error adding transaction.");
  }
});
