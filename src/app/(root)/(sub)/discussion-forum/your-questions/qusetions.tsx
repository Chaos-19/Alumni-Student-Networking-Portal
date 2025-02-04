import CommentCard from "@/components/discussion/comment";
import QuestionCard from "@/components/discussion/question-card";
import React from "react";
import { QuestionPostType } from "../../../../../../types/question";
import Suggestions from "@/components/discussion/suggestions";

interface Props {
  questions: QuestionPostType;
}

export default function Qusetions({ questions }: Props) {
  return (
    <div className="flex flex-col gap-5 px-1 py-2">
      <QuestionCard {...questions} />
      <div className="w-full">
        <Suggestions />
      </div>
      <div className="w-full flex flex-col justify-center gap-3">
        {questions.comment.map((val) => (
          <CommentCard {...val} />
        ))}
      </div>
    </div>
  );
}
