# News Cards Project

This project consists of a simple news card layout using Next.js with CSS Modules for styling. The design includes a vertical and horizontal list of cards, each containing a date, title, news preview, and interactive tags.

## Technologies Used

- **Next.js** - Framework for React with server-side rendering support  
- **CSS Modules** - Modularized styling for better encapsulation  
- **React** - Library for building user interfaces  

## Project Structure

The project consists of the following main files and directories:

```
/
├── src/
│   ├── app/
│   │   ├── page.js           # Main page component
│   │   ├── page.module.css   # Component styling for the main page
│   │   ├── globals.css       # Global styles
│   ├── components/
│   │   ├── CardColumn/
│   │   │   ├── CardColumn.js       # Vertical list of news cards
│   │   │   ├── CardColumn.module.css # Styles for CardColumn
│   │   ├── CardRow/
│   │   │   ├── CardRow.js          # Horizontal scrollable news cards
│   │   │   ├── CardRow.module.css  # Styles for CardRow
```

## Installation and Execution

To run the project locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

The project will be available at `http://localhost:3000/`.

## Features

- Display of news cards with date, title, description, and tags.  
- Vertical and horizontal layouts using `CardColumn` and `CardRow`.  
- Hover animation to highlight cards.  
- Interactive tags with hover effect.  

## Styles

The project uses CSS Modules for styling, ensuring encapsulation and preventing class conflicts.

### Example Style (`CardColumn.module.css`)
```css
.card {
  width: 800px;
  height: 200px;
  border-radius: 30px;
  border: solid 1px rgb(63, 63, 69);
  background-color: rgb(26, 27, 34);
  padding: 30px;
  transition: 0.2s;
  margin-top: -25pt;
}

.card:hover {
  transform: translateY(-20px);
}
```

## Contribution

If you would like to contribute to this project, follow these steps:

1. Fork the repository.  
2. Create a branch for your feature (`git checkout -b my-feature`).  
3. Commit your changes (`git commit -m 'Adding new feature'`).  
4. Push to the remote repository (`git push origin my-feature`).  
5. Open a Pull Request.  

## License

This project is licensed under the MIT License. You are free to use and modify it as needed.
