'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
const questions = [
  ['Is KanchanFlow only for large manufacturers?', 'Not at all. KanchanFlow is designed for growing manufacturing teams that need a clearer view of quotes, orders and customer follow-ups.'],
  ['Can my team use it on mobile?', 'The experience is designed to work across desktop, tablet and mobile, so sales and operations teams can check progress while away from their desks.'],
  ['Do I need to replace every system I use?', 'No. Start with the workflow that needs the most visibility. During a walkthrough, we can discuss how KanchanFlow could fit alongside your current tools.'],
  ['How do I choose a plan?', 'Choose based on team size and the workflows you need to manage. If you are unsure, book a walkthrough and we can help you compare the options.']
];
export default function FAQ() {
  const [active, setActive] = useState(0);
  return <div className="faq-list">{questions.map(([q, a], i) => <div className={`faq-item ${active === i ? 'faq-active' : ''}`} key={q}><button className="faq-question" aria-expanded={active === i} onClick={() => setActive(active === i ? -1 : i)}><span>{q}</span><span className="faq-icon">{active === i ? <Minus size={18}/> : <Plus size={18}/>}</span></button>{active === i && <p className="faq-answer">{a}</p>}</div>)}</div>;
}
