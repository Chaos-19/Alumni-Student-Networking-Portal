import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaComment } from "react-icons/fa";

type Props = {
  questionId: string;
};

const Suggestions: React.FC<Props> = ({ questionId }) => {
  const [message, setMessage] = useState("");

  const uID = localStorage.getItem("user-id") || "";

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:8081/v1/questions/${questionId}/answer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": uID,
        },
        body: JSON.stringify({ answer: message }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the suggestion");
      }

      // Handle successful submission (e.g., show a success message or clear the textarea)
      setMessage("");
      alert("Suggestion submitted successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the suggestion");
    }
  };

  return (
    <div className="w-full text-black">
      <div className="flex justify-center items-center font-medium my-10">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Suggestions</h2>
      </div>
      <div className="flex flex-col justify-center w-full gap-4 px-10 bg-white py-8">
        <Textarea
          placeholder="Type your message here."
          className="max-w-screen-sm"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex items-center justify-end gap-2">
          <Button variant="secondary" className="rounded bg-gray-400 hover:bg-red-500 hover:text-black">
            Cancel
          </Button>
          <Button
            className="flex items-center gap-2 rounded"
            onClick={handleSubmit}
          >
            <FaComment /> Suggest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
