import tkinter as tk

# Function to calculate income tax
def calculate_tax():
    try:
        # Retrieve the entered name and income
        name = entry_name.get()
        income = float(entry_income.get())
        
        # Calculate tax (10% of income)
        tax = income * 0.10
        
        # Display the result
        result_label.config(text=f"Hello {name}, your income tax is: ${tax:.2f}")
    except ValueError:
        # Handle case when income is not a valid number
        result_label.config(text="Please enter a valid income.")

# Create the main window
root = tk.Tk()
root.title("Income tax calculator")

# Create labels
label_name = tk.Label(root, text="Enter your name:")
label_name.grid(row=0, column=0, padx=10, pady=5)

label_income = tk.Label(root, text="Enter your annual income:")
label_income.grid(row=1, column=0, padx=10, pady=5)

# Create entry boxes
entry_name = tk.Entry(root)
entry_name.grid(row=0, column=1, padx=10, pady=5)

entry_income = tk.Entry(root)
entry_income.grid(row=1, column=1, padx=10, pady=5)

# Create a button that will calculate the tax
calculate_button = tk.Button(root, text="Calculate Tax", command=calculate_tax)
calculate_button.grid(row=2, column=0, columnspan=2, pady=10)

# Create a label to display the result
result_label = tk.Label(root, text="")
result_label.grid(row=3, column=0, columnspan=2, pady=10)

# Run the Tkinter event loop
root.mainloop()
