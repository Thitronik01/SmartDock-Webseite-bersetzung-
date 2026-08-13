/// <reference path="../pb_data/types.d.ts" />
onRecordEnrich((e) => {
  // This hook ensures that when FAQs are retrieved, they have all required fields populated
  // If question_fr or answer_fr are empty, set them to a placeholder
  if (!e.record.get("question_fr")) {
    e.record.set("question_fr", "[To be translated]");
  }
  if (!e.record.get("answer_fr")) {
    e.record.set("answer_fr", "[To be translated]");
  }
  e.next();
}, "faqs");