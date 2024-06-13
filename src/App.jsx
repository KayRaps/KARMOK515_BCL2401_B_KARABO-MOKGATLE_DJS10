import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  