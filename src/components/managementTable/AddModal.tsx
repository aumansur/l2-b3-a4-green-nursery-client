import React, { useState } from "react";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../redux/features/products/productApi";
import { TProduct } from "@/types";

const AddModal: React.FC = () => {
  const { register, handleSubmit } = useForm<TProduct>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addProduct] = useAddProductMutation();
  const onSubmit = async (data: TProduct) => {
    console.log("Submitting data:", data); // Log data to console for debugging
    try {
      await addProduct(data).unwrap();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to save the product:", error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function handleOk(e: React.MouseEvent): void {
    e.preventDefault();
    document.getElementById("submitForm")?.click(); // Programmatically click the submit button
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <button onClick={showModal} className="my-primary-btn">
        Add Product
      </button>
      <Modal
        title="Add Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit" // Change the button text to "Submit" for clarity
      >
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              {...register("title")}
              placeholder="Product Title"
              style={{
                width: "100%",
                padding: "8px",
                margin: "4px 0",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              {...register("description")}
              placeholder="Product Description"
              style={{
                width: "100%",
                padding: "8px",
                margin: "4px 0",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="category">Category</label>
              <select
                id="category"
                {...register("category")}
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "4px 0",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}>
                <option value="">Select Category</option>
                <option value="Herbs">Herbs</option>
                <option value="Shrubs">Shrubs</option>
                <option value="Trees">Trees</option>
                <option value="Climbers">Climbers</option>
                <option value="Creepers">Creepers</option>
              </select>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="rating">Rating</label>
              <input
                id="rating"
                type="number"
                //max 5

                max={5}
                {...register("rating")}
                placeholder="Rating"
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "4px 0",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="number"
                {...register("price")}
                placeholder="Price"
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "4px 0",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                type="number"
                {...register("quantity")}
                placeholder="Quantity"
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "4px 0",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label htmlFor="imageLink">Image Link</label>
            <input
              id="imageLink"
              type="text"
              {...register("images")}
              placeholder="Image URL"
              style={{
                width: "100%",
                padding: "8px",
                margin: "4px 0",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          </div>
          <button type="submit" id="submitForm">
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddModal;
