import { Divider, Stack } from "@mui/material";
import "../CSS/faq.css";

const questions_answers = [
  {
    Q: "How can I access my tickets after purchasing them?",
    A: "Your tickets will be emailed to you. You can print them or save the PDF to your phone for easy access.",
  },
  {
    Q: "Can tickets be purchased at the door?",
    A: "Yes, tickets can be purchased both online and in-person prior to the show.",
  },
];

function q_a_card(qObject) {
  return (
    <div class="qaCard">
      <Stack direction="column">
        <div class='mb-2'>
          <strong>Q: {qObject.Q}</strong>
        </div>
        <Divider className="w-3/5 bg-yellow-300 h-1" />
        <div class='mt-2'>
          <strong>A: </strong>
          <em>{qObject.A}</em>
        </div>
      </Stack>
    </div>
  );
}

export default function Faq() {
  const cards = questions_answers.map(qa => q_a_card(qa));

  return (
    <div class="page">
      <div class="subPage">
        <h1 class='title'>Frequently Asked Questions</h1>
        {cards}
      </div>
    </div>
  );
}
