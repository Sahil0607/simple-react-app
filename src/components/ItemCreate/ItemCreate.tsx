import { useState } from "react";
import styles from "./ItemCreate.module.css";

type FormData = { id: string; userId: string; title: string; body: string };

const ItemCreate = () => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    userId: "",
    title: "",
    body: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });
      const data = await response.json();
      console.log("Success:", data);
      setFormData({ id: "", userId: "", title: "", body: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.itemCreate}>
      <h2>Create New Item</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="id" className={styles.label}>
            ID
          </label>
          <input
            id="id"
            name="id"
            type="text"
            className={styles.input}
            value={formData.id}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="userId" className={styles.label}>
            User ID
          </label>
          <input
            id="userId"
            name="userId"
            type="text"
            className={styles.input}
            value={formData.userId}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className={styles.input}
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="body" className={styles.label}>
            Body
          </label>
          <textarea
            id="body"
            name="body"
            className={styles.input}
            value={formData.body}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Create Item
        </button>
      </form>
    </div>
  );
};

export default ItemCreate;
