import { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteIcon from "@mui/icons-material/Delete";

const Forms = () => {
  const [formFields, setFormFields] = useState([
    { type: "text", value: "", key: 0 },
  ]);
  const [formTitle, setFormTitle] = useState("");

  const handleTextareaSubmit = (e) => {
    if (e.key === "Enter") {
      setFormTitle(e.target.value);
    }
  };

  const handleFieldChange = (index, e) => {
    const newFields = [...formFields];
    newFields[index].value = e.target.value;
    setFormFields(newFields);
  };

  const addField = () => {
    const newFields = [
      ...formFields,
      { type: "text", value: "", key: formFields.length },
    ];
    setFormFields(newFields);
  };

  const removeField = (index) => {
    const newFields = formFields.filter((field) => field.key !== index);
    setFormFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { title: formTitle, fields: formFields });
  };

  return (
    <div className="flex items-center justify-center h-screen font-sans">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            placeholder="Titre du formulaire"
            className="w-full p-2 border-none outline-none text-4xl font-bold rounded"
            onKeyDown={handleTextareaSubmit}
          ></textarea>
        </div>

        {formFields.map((field, index) => (
          <div key={field.key} className="flex items-center mb-4">
            <div className="ml-2 flex">
              <button
                type="button"
                onClick={() => removeField(field.key)}
                className="px-2 py-1 mr-1 rounded"
              >
                <DeleteIcon />
              </button>
              <button
                type="button"
                onClick={addField}
                className="px-2 py-1 rounded"
              >
                <AddRoundedIcon />
              </button>
            </div>
            <input
              type={field.type}
              value={field.value}
              onChange={(e) => handleFieldChange(index, e)}
              className="w-full p-2 border-none outline-none rounded"
            />
          </div>
        ))}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
