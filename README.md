# Tailwind CSS In-Class Practice 🧩

## Goal
Practice using **Tailwind CSS utility classes** to style a simple React component.

There is **no single correct solution** — this is about getting comfortable with Tailwind.

---

## What You Are Building
You will style a **simple product card** that includes:

- An image  
- A product title  
- A product description  
- A button  

You will use **Tailwind CSS classes only** (no custom CSS).

---

## Starter Component
You will be given a basic React component like this:

```tsx
const Card = () => {
  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="Product" />
      <h2>Product Title</h2>
      <p>This is a short product description.</p>
      <button>Buy Now</button>
    </div>
  );
};

export default Card;
```
Your Task 🎨
Style the card using Tailwind CSS.
You should:

- Add padding and margin
- Style text (size, weight, color)
- Add a background color
- Round corners
- Add hover effects
- Style the button
- Make it look like a real product card

💡 You are encouraged to:
- Use flex or grid
- Use hover: and transition
- Experiment with colors and shadows

Rules
- ✅ Use Tailwind utility classes only
- ❌ No custom CSS files
- ❌ No copying someone else’s design
- ✅ Be creative


Setting Up Tailwind (Vite + React)

Follow the official Tailwind documentation for setting up Tailwind with Vite:
👉 https://tailwindcss.com/docs/installation/using-vite

Carefully follow all steps on that page before starting the assignment.

Submission
- Your card should be fully styled
- Be ready to explain why you chose certain Tailwind classes

Bonus (Optional ⭐)
- Add a hover animation to the card
- Make the button change color on hover
- Center the card on the page