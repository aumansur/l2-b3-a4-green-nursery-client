import React, { useState } from "react";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { useUpdateProductMutation } from "../../redux/features/products/productApi";
import { TProduct } from "@/types";
import { FiEdit } from "react-icons/fi";
import { toast } from "sonner";

interface UpdateModalProps {
  product: TProduct;
}

const UpdateModal: React.FC<UpdateModalProps> = ({ product }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateProduct] = useUpdateProductMutation();

  const onSubmit = async (data: TProduct) => {
    const options = {
      _id: product._id,
      data,
    };
    try {
      const res = await updateProduct(options).unwrap();
      if (res.success) {
        toast.success("Product updated successfully 😎");
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);

    // Set form values
    setValue("title", product.title);
    setValue("description", product.description);
    setValue("category", product.category);
    setValue("rating", product.rating);
    setValue("price", product.price);
    setValue("quantity", product.quantity);
    setValue("images", product.images);
  };

  const handleOk = () => {
    document.getElementById("submitForm")?.click(); // Programmatically click the submit button
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-3 rounded mr-2">
        <FiEdit size={20} />
      </button>

      <Modal
        title="Product Update"
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
            <label htmlFor="images">Image Link</label>
            <input
              id="images"
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
          <button
            className="bg-red-500"
            type="submit"
            id="submitForm"
            style={{ display: "none" }}>
            Update
          </button>{" "}
          {/* Hidden submit button */}
        </form>
      </Modal>
    </>
  );
};

export default UpdateModal;
